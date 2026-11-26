const byId = (id) => document.getElementById(id);
const start = 'dusk';
const endings = Object.keys(story).filter((key) => story[key].outcome);
const saveKey = 'last-train-to-griffonstone:v1';

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(saveKey));
    const route = [start];
    if (Array.isArray(saved?.route)) {
      for (const next of saved.route.slice(1)) {
        if (!story[route.at(-1)].choices?.some(({ to }) => to === next)) break;
        route.push(next);
      }
    }
    return {
      route,
      found: new Set(Array.isArray(saved?.found) ? saved.found.filter((key) => endings.includes(key)) : [])
    };
  } catch {
    return { route: [start], found: new Set() };
  }
}

const state = load();
const actionList = byId('actions');
const backButton = byId('back-button');
const journal = byId('journal');
const restart = byId('restart');

function save() {
  try {
    localStorage.setItem(saveKey, JSON.stringify({ route: state.route, found: [...state.found] }));
  } catch {
    // The current run still works in browsers that restrict storage.
  }
}

function restartStory() {
  state.route = [start];
  render(true);
}

function render(focusTitle = false) {
  const key = state.route.at(-1);
  const node = story[key];
  if (node.outcome) state.found.add(key);
  save();
  byId('count').textContent = state.found.size + ' / ' + endings.length;
  byId('place').textContent = node.outcome ? node.outcome + ' ending · ' + node.place : node.place;
  const title = byId('title');
  title.textContent = node.title;
  byId('prose').replaceChildren(...node.prose.map((line) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = line;
    return paragraph;
  }));
  byId('actions-title').textContent = node.outcome ? 'Play again' : 'What do you do?';
  actionList.replaceChildren();
  if (node.choices) {
    node.choices.forEach((option, index) => {
      addOption(option.label, option.detail, () => {
        state.route.push(option.to);
        render(true);
      }, index + 1);
    });
  } else {
    addOption('Begin a new run.', '', restartStory);
    addOption('Open the ending journal.', '', openJournal);
  }
  backButton.hidden = state.route.length < 2;
  if (focusTitle) {
    title.focus({ preventScroll: true });
    byId('story').scrollIntoView({ block: 'start' });
  }
}

function addOption(label, detail, select, ordinal) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'option';
  if (ordinal) {
    const number = document.createElement('span');
    number.className = 'choice-number';
    number.setAttribute('aria-hidden', 'true');
    number.textContent = ordinal.toString().padStart(2, '0');
    button.append(number);
  }
  const words = document.createElement('span');
  const main = document.createElement('b');
  main.textContent = label;
  words.append(main);
  if (detail) {
    const description = document.createElement('small');
    description.textContent = detail;
    words.append(description);
  }
  button.append(words);
  button.addEventListener('click', select);
  actionList.append(button);
}

function openJournal() {
  byId('journal-description').textContent = 'You’ve discovered ' + state.found.size + ' of ' + endings.length + ' endings.';
  byId('journal-list').replaceChildren(...endings.filter((key) => state.found.has(key)).map((key) => {
    const item = document.createElement('li');
    const outcome = document.createElement('span');
    outcome.className = 'outcome';
    outcome.textContent = story[key].outcome;
    item.append(outcome, story[key].title);
    return item;
  }));
  journal.showModal();
}

byId('journal-button').addEventListener('click', openJournal);
byId('journal-close').addEventListener('click', () => journal.close());
byId('restart-button').addEventListener('click', () => restart.showModal());
byId('restart-cancel').addEventListener('click', () => restart.close());
byId('restart-confirm').addEventListener('click', () => {
  restart.close();
  restartStory();
});
backButton.addEventListener('click', () => {
  state.route.pop();
  render(true);
});
document.querySelector('.skip').addEventListener('click', (event) => {
  event.preventDefault();
  byId('title').focus();
});
render();
