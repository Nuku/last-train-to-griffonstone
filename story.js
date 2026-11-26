const choice = (label, to, detail = '') => ({ label, to, detail });
const scene = (place, title, prose, choices) => ({ place, title, prose, choices });
const ending = (outcome, place, title, prose) => ({ outcome, place, title, prose });

const story = {
  dusk: scene('Griffonstone · The lower station', 'The last train to Griffonstone', [
    'You had two jobs. Bring the freight ledger down from the market, and bring yourself home before the stew got cold. The ledger was under your wing. The stew was still a possibility.',
    'Then Mera stuck her head under the platform. She came back with grit on her beak. “The track moved.”',
    'One rail sat a claw-width lower than its neighbor. Beneath it, a stone retaining wall clung to the cliff. It had rained for three days. Now, somewhere around the bend, the evening train from Equestria gave one cheerful whistle.',
    'Mera tapped the little coach she’d drawn on the timetable. “That’s a passenger carriage behind the freight. I helped put the seats in.” She looked at you. “I’d like those seats to come back.”'
  ], [
    choice('Take the red lamp up to the bend.', 'lamp', 'Give the driver an early warning.'),
    choice('Get the market crews down here.', 'market', 'The smiths and haulers have gear and wings.'),
    choice('Ask the stationmaster to close the line.', 'office', 'He has the authority and the signal key.'),
    choice('Climb under the platform with Mera.', 'wall', 'Find out how much of the cliff is still there.')
  ]),
  lamp: scene('The upper bend', 'A red light in daylight', [
    'The wind caught the lamp and left you holding it sideways. You folded one wing and let yourself slide onto a shelf of rock. It was a terrible landing. There was no one to see it. That improved it considerably.',
    'From here you could see the smoke. The driver would see a red lamp from the old signal post, if you could reach it. A washout had turned the path between you and the post into a gap full of wind.',
    'Across the cutting, a young griffon with a coal bucket waved. “You doing something stupid?”',
    'You cupped a hand around your beak. “Thinking about it!” For the moment, that was true.'
  ], [
    choice('Call the coal runner over and relay the signal.', 'relay', 'Two short flights can get the warning around the bend.'),
    choice('Launch straight for the old signal post.', 'gust', 'Carry the signal across the gap yourself.'),
    choice('Get to the uphill footpath and warn the guard.', 'ramp', 'Reach the train from solid ground.')
  ]),
  relay: scene('The upper bend', 'Pass it on', [
    'You lifted the lamp. “Red lamp! Stand where they can see it.” You pointed out the footholds. “Take the rock shelf, there and there.” The coal runner put the bucket down with great care. You recognized the little pause before the leap. Every griffon had it, even the ones who said they didn’t.',
    'The runner took your lamp at the first shelf. A guard on the far side saw the next hop and raised their own red flag. The whistle changed. You had never heard a cheerier sound than a train putting its brakes on.',
    'The engine came to a stop up the grade. The driver leaned out. “Two things. Are we going to fall, and where do I send these passengers?”'
  ], [
    choice('Walk the passengers down the guard’s footpath.', 'footpath', 'Bring them into town while the guard keeps the line shut.'),
    choice('Ask the driver to back up to stable ground.', 'turnback', 'Keep the passengers together and clear the slope.'),
    choice('Put the waiting time to use with Mera.', 'survey', 'The stopped train buys time to take a proper look.')
  ]),
  gust: scene('Above the cutting', 'The wind has a word', [
    'Halfway out, an updraft turned into a shove from the side. Your body did its best. The lamp did nothing at all to help. The wall came up and took the red glass out with one neat crack.',
    'A claw caught a root. Your other hand held the lamp by its handle. Both were bad things to be holding when you needed two hands.',
    'On the far shelf, the coal runner set one paw toward the path and leaned out far enough for you to see their face. “Drop it! I can get the guard!”'
  ], [
    choice('Drop the lamp and take the offered help.', 'ramp', 'The runner can fetch the guard while you climb.'),
    choice('Hang on and try to light the broken lamp.', 'emptyhook', 'The driver is almost at the bend.')
  ]),
  ramp: scene('The guard’s footpath', 'A door on the uphill side', [
    'The guard took one look at your face and reached for the signal cord. The post rang twice. Up the grade an answer came, and the train drew to a stop.',
    'The guard pulled out a pencil. “Any hurt?”',
    'You considered your pride. The pencil hovered. “No.”',
    'There was an old loading platform on the uphill side of the carriage. The conductor could open the doors there. Past it, a footpath ran up to the market, where somegriff might be persuaded to find a kettle.'
  ], [
    choice('Open the uphill doors and count every passenger.', 'footpath'),
    choice('Keep everycreature aboard and send the train back.', 'turnback')
  ]),
  market: scene('The market stairs', 'Everygriff’s busiest hour', [
    'A butcher was trying to sell the last of the day’s chops. Two bakers were deciding who had borrowed whose tray. The second you said “rail,” three heads turned. The second you said “passengers,” all the rest did.',
    'A smith named Sedge took a coil of rope off a hook. “Say what you need.”',
    'You had come up to ask for help. It was a peculiar thing to get it so quickly you still had to work out what it meant.'
  ], [
    choice('Send the haulers with a red flag. Ask the kitchens for room.', 'kettles', 'Split the work among griffons who can do it.'),
    choice('Bring the smiths to inspect the wall.', 'survey', 'Ask what can be fixed after the train stops.'),
    choice('Tell the crews to brace the wall for this one crossing.', 'brace', 'Keep the evening delivery on time.')
  ]),
  office: scene('Station office', 'The key on the nail', [
    'Stationmaster Corven was eating a green bean over the freight ledger’s empty spot. As soon as you mentioned the rail, he put the bean down.',
    'Corven brushed the salt off his talons. “A false stop costs us. They’ll ask who called it. They’ll ask how certain I was.” He pulled out a blank sheet. Its corner had a grease mark in precisely the shape of a green bean. “What can you put your name to?”',
    'The signal key hung within reach of both of you.'
  ], [
    choice('Sign what you and Mera actually saw.', 'record', 'Give Corven a witness and a reason to turn the key.'),
    choice('Take the key. Explain after the train stops.', 'override', 'The key can turn before an argument can finish.'),
    choice('Wait for a second inspection before stopping traffic.', 'late', 'Get certainty before putting your name on it.')
  ]),
  wall: scene('Under the platform', 'Where the mortar went', [
    'You went down the service steps sideways. Below the rail, the wall had a fat belly that a wall should never have. Brown water streamed through the joints. Mera held up a hand. A little square of mortar landed in it like it had been waiting to be asked.',
    'Mera tipped the mortar out of her palm. “The drain’s blocked higher up. Clearing it would help tomorrow.” She tucked in a wing to make room for you to pass. “Today I’d like everygriff off these stairs.”',
    'Overhead, a hoof trotted across the platform. Somepony had come early to meet the train.'
  ], [
    choice('Get Mera and the waiting crowd off the platform.', 'clear', 'Use the station bell to get the guard’s attention.'),
    choice('Go up together and put the damaged mortar on Corven’s desk.', 'record', 'Give the stationmaster something he can see.'),
    choice('Clear the drain yourself while Mera tries to stop the train.', 'drain', 'Deal with the water while there’s still a wall.')
  ]),
  kettles: scene('The market kitchens', 'How many bowls?', [
    'The haulers took the stairs two at a time. The butcher sent the chops uphill. One of the bakers went after them with bread, then turned back and tucked their own tray under a wing. “I always knew where that was.”',
    'Two whistles. The guard had signaled a stop. From the first landing you could see the coach doors opening on the uphill side.',
    'The cook pointed at the stack of bowls. “I can feed whoever fits in the room. If some of them are ponies, some of this stays in the pan. Find out for me?”'
  ], [
    choice('Meet the passengers and ask what they need.', 'footpath', 'Count heads, clear seats, and tell the kitchen what to serve.'),
    choice('Offer the cooks fair pay for a night’s work.', 'commons', 'Get beds and supper ready before the passengers reach town.')
  ]),
  survey: scene('The head of the stairs', 'Good iron, bad stone', [
    'A guard ran past you with a red flag. The distant grind of brakes gave Mera time to take the smiths down two steps and no further.',
    'Sedge turned a stone the size of a loaf in both hands. “I can give you a brace as good as any brace in the country. What do you want me to lean it on?”',
    'No one had an answer. The question came back up to the street, where the shopkeepers were beginning to calculate how much a closed line would cost them.'
  ], [
    choice('Let Mera set the repair terms and bring them to the council.', 'publicworks'),
    choice('Set up a meal and a collection for stranded passengers.', 'commons'),
    choice('Buy the brace and put the freight through slowly.', 'brace', 'The market needs what is in those wagons.')
  ]),
  record: scene('Station office', 'Put your name on it', [
    'Corven wrote down the claw-width of drop, the moving mortar, and the time. He gave Mera the pencil to add what she had seen. She wrote slowly. You could hear the whistle through the glass.',
    'Corven turned the key. You heard two bells from the upper bend. Corven let his shoulders drop. “All right. I suppose I’ve stopped a train.”',
    'He put a second sheet down. “They’ll want an account for the council. I’d like the names of the griffons who helped. I’ll put mine by the key.”'
  ], [
    choice('Take the crew’s account to the council together.', 'publicworks'),
    choice('Leave your account and take charge of the passengers.', 'footpath'),
    choice('Give the conductor the report and ask them to turn back.', 'turnback')
  ]),
  override: scene('Station office', 'Two bells', [
    'The key turned. Bells sounded from up the grade. The whistle broke off. Corven’s beak clicked shut so hard it hurt to hear.',
    'Corven stared at the bare nail. After a while he rubbed the spot it had left in the wall. “There are sixteen seats in that carriage. I was in the middle of thinking about that.”',
    'You set the key on the desk. “I needed you to be further along.” Outside, Mera called that the train was stopped. Corven looked from the key to the ledger and asked what he should write.'
  ], [
    choice('Tell him exactly what you did, and ask Mera to sign beside you.', 'publicworks'),
    choice('Give him the key back and take the passengers up to supper.', 'footpath'),
    choice('Say the key was already turned when you found it.', 'byyourword')
  ]),
  clear: scene('The station yard', 'Stand where I can see you', [
    'A pony objected that they had come a long way just to meet their sister. Mera took them by one hoof and you took their valise. They came up with you, complaining as far as the sound of the first falling stone.',
    'At the top you rang the station bell with both hands. The guard knew what to do with a bell at that hour. The train stopped. The edge of the platform came away and let itself down into the ravine.',
    'The pony found their sister at the uphill door. The valise was still in your hand.'
  ], [
    choice('Walk the sisters and the other passengers into town.', 'footpath'),
    choice('Stay with Mera and get a repair request on the record.', 'publicworks')
  ]),
  drain: scene('The service ledge', 'A mouthful of leaves', [
    'The drain let go all at once. Brown water went over your head and down your back in a sheet. You had a mouthful of leaves and the great satisfaction of a job done.',
    'Then the ledge shifted under both hind paws. Water that had already gone through the wall had taken the fine stone with it. Mera’s bell sounded above, sharp and repeated.',
    'There was a handrail on the stairs. You could reach it if you left the clearing hook where it was.'
  ], [
    choice('Leave the hook and climb to Mera.', 'clear'),
    choice('Hold your ground and finish clearing the drain.', 'understone')
  ]),
  brace: scene('The platform edge', 'Just the one crossing', [
    'The upright looked strong. It was strong. Sedge had made it. The stone beneath its foot was somebody else’s workmanship, and several hundred rains older.',
    'Corven leaned over the rail of the signal platform. The red lamp shone behind his shoulder. “Driver can see it. Say the word and it stays red.”',
    'A little chalk line Mera had drawn across two stones was now two chalk lines. Sedge looked at it, then at you.'
  ], [
    choice('Keep the red signal and close the line properly.', 'publicworks'),
    choice('Tell Corven to clear the signal and bring the freight through.', 'lostline')
  ]),

  footpath: ending('Good', 'The market stairs', 'A place at the table', [
    'You counted sixteen passengers, then seventeen. The seventeenth was a chick who had been asleep in her mother’s lap and took it personally when you counted her as a whole passenger. She held up a hand with all her talons spread. “I’m five.” You made very sure to tell the guard.',
    'At the market kitchens, a pony asked whether the soup had meat in it. The cook lifted both lids and went through what was in each. She set the lids back down. “Thank you for asking.” She looked briefly astonished to have meant it.',
    'Long after the last passenger had found a bed, Mera set a bowl down in front of you. You recognized the chipped rim. Your own bowl, from home. Mera pushed a spoon toward you. “They sent it up when you missed supper.”',
    'You dipped your beak. The stew was hot.'
  ]),
  commons: ending('Good', 'The market kitchens', 'Buy another loaf', [
    'The settlement took three arguments and one pot of tea. The kitchens would be paid out of the station’s contingency purse. The merchants put the use of their spare rooms on the same sheet. A pony conductor added the crew’s names. She had two legs of the return journey tomorrow and wanted her brakemare to sleep.',
    'It was the first time you had seen a merchant argue somebody else’s rate up. The butcher slid the tally back to the baker and tapped the empty line. “You said hot breakfast. Charge them for the fuel.”',
    'The following week there was a fresh chalkboard outside the station. It listed where a traveler could get a bed and what a loaf cost. At the bottom, in Mera’s hand, was a smaller line. Ask if you’re hungry.',
    'You added a second line. Ask if you can cook.'
  ]),
  publicworks: ending('Good', 'The council chamber', 'Put a drain in it', [
    'Giselda asked Mera to show her where the water went. Mera used three cups, two spoons, and the council’s clean tablecloth. There was a spirited objection to the tablecloth. There was very little objection to the drain.',
    'The council funded a new retaining wall and paid the crews to inspect the rest of the grade. A shopkeeper made them add a footpath for the days work stopped the trains. Their shop was halfway up it. You decided the country could afford to profit twice.',
    'At the reopening Corven gave Mera the signal key. She turned it, handed it straight back, and stepped aside to let the train go by. You knew what she was watching. So were you.',
    'Below the new wall, water ran out exactly where it was meant to.'
  ]),
  turnback: ending('Mixed', 'The closed station', 'A quiet platform', [
    'The train backed up the grade until its tail lamp looked no bigger than a coal in a stove. Every seat went back the way it had come. A guard brought a list down to the platform so the waiting families would know who was safe.',
    'The freight went back with it. Two shops closed early and the cook made the same lentils three nights running. On the fourth, the baker put a fresh loaf in your hands and folded your talons around it. “You’ll eat it.”',
    'It took a week before the wall could be approached. Each evening you went home by the long way and passed the empty platform. Each evening, every griffon and pony who had ridden that train had somewhere to be.'
  ]),
  byyourword: ending('Bad', 'The station office', 'The story that stuck', [
    'A guard heard the bells. The conductress saw the red. Mera watched your hand on the key through the office window. Corven let you finish anyway.',
    'The passengers slept safely up in the market. The station sent a good account of the evening to the council. Your name appeared on it twice, once for calling the stop and once for lying about it.',
    'A season later there was another meeting about the rail. You had a fair idea for keeping the platform clear in a storm. When you raised your hand, the chair called on the griffon sitting behind you.',
    'Mera walked you home. At your door, she brushed a bit of station grit off your shoulder. “Say the fair thing earlier next time.”'
  ]),
  late: ending('Bad', 'The lower station', 'A second opinion', [
    'Corven found the second inspector. You could see her jacket on the market stairs. You could see the engine’s yellow lamp at the bend at the same time.',
    'The wall dropped. The driver braked, and the engine stopped with its front wheels hanging out over a place where the earth had been. The freight wagons leaned into each other. The passenger coach stayed on the rails.',
    'When the driver climbed out she couldn’t put weight on one hoof. Mera gave her a shoulder. The inspector stood by the rail with an unopened notebook in her hand.',
    'The notebook was dry. So were the places where your name would have gone.'
  ]),
  emptyhook: ending('Bad', 'The upper bend', 'The empty hook', [
    'The wick lit for a moment. Without the red glass it looked, from the track, like any light a griffon might carry home. The engine went by below you. Then came a sound you could feel in the root.',
    'The coach stayed on the grade. Two freight wagons went off it. The coal runner brought the guard back and helped get you down. You had a red cut across each palm from the handle.',
    'There was a hook for the lamp at the station. You left the broken handle hanging there. On your next shift the hook was empty. There was a new lamp at the bend, and a guard assigned to tend it. The guard was the coal runner’s sister.',
    'The runner still waved when you passed. For a while you found that harder to bear than if they hadn’t.'
  ]),
  understone: ending('Bad', 'The service ledge', 'The long way up', [
    'You got the hook free. The ledge went with it.',
    'Mera had stopped the train. She spent the next hour finding a rope crew and the next three trying to get eyes on you. By the time you felt their rope, you were shivering too hard to tie it. You had to let the smallest hauler come down and do it for you.',
    'The healers said the wing would mend. They said it again when you asked about flying. They had a great deal of patience. You discovered you had very little.',
    'Mera brought your supper right up the stairs for a month. You always heard her coming. One of these days, you thought, you’d be the one carrying it.'
  ]),
  lostline: ending('Bad', 'The platform edge', 'A brace will hold', [
    'The guard took the red down. The engine rolled in at walking pace. For three long breaths the brace held. Just before the first freight wagon reached it, the stone at its foot went into the ravine.',
    'The brakemare dropped the coupler and the last wagons stayed on their wheels. The driver came out through a smashed window. It took every hauler on the platform to get her up to the street.',
    'The rail stayed shut for months. Shops made do without the freight you had been so sure they needed tonight. Sedge worked on the new wall. When you brought your tools, he gave you a place to work and you did your share.',
    'At lunch you sat with the crew. It took a long time for anygriff to pass you the bread.'
  ])
};
