const byId = (id) => document.getElementById(id);
const start = 'dusk';
const endings = Object.keys(story).filter((key) => story[key].outcome);
const saveKey = 'last-train-to-griffonstone:v1';
const legacyEndingScenes = {
  footpath: 'escort',
  commons: 'accounts',
  publicworks: 'hearing',
  turnback: 'siding',
  byyourword: 'erased',
  late: 'secondlook',
  emptyhook: 'washout',
  understone: 'hold',
  lostline: 'wreck'
};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(saveKey));
    const route = [start];
    if (Array.isArray(saved?.route)) {
      for (const next of saved.route.slice(1)) {
        const choices = story[route.at(-1)].choices;
        if (!choices?.some(({ to }) => to === next)) {
          // Older saves went straight to these endings.
          const addedScene = legacyEndingScenes[next];
          if (!choices?.some(({ to }) => to === addedScene)) break;
          route.push(addedScene);
        }
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
const endingPlate = byId('ending-plate');
const endingImage = byId('ending-image');
const readEnding = byId('read-ending');
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

function focusStory() {
  byId('title').focus({ preventScroll: true });
  byId('story').scrollIntoView({ block: 'start' });
}

function render(moveFocus = false) {
  const key = state.route.at(-1);
  const node = story[key];
  const isEnding = Boolean(node.outcome);
  if (isEnding) state.found.add(key);
  byId('book').classList.toggle('book-ending', isEnding);
  byId('cover-plate').hidden = isEnding;
  endingPlate.hidden = !isEnding;
  if (isEnding) {
    const imagePath = 'endings/' + key + '.webp?v=table-foretalon';
    endingImage.alt = node.artAlt;
    endingImage.src = imagePath;
    endingPlate.style.setProperty('--ending-art', 'url("' + imagePath + '")');
    readEnding.setAttribute('aria-label', 'Read ending · ' + node.title);
  }
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
  if (moveFocus) {
    if (isEnding) {
      readEnding.focus({ preventScroll: true });
      endingPlate.scrollIntoView({ block: 'start' });
    } else {
      focusStory();
    }
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
for (const link of [document.querySelector('.skip'), readEnding]) {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    focusStory();
  });
}
render();
