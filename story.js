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
    choice('Walk the passengers down the guard’s footpath.', 'escort', 'Bring them into town while the guard keeps the line shut.'),
    choice('Ask the driver to back up to stable ground.', 'siding', 'Keep the passengers together and clear the slope.'),
    choice('Put the waiting time to use with Mera.', 'survey', 'The stopped train buys time to take a proper look.')
  ]),
  gust: scene('Above the cutting', 'The wind has a word', [
    'Halfway out, an updraft turned into a shove from the side. Your body did its best. The lamp did nothing at all to help. The wall came up and took the red glass out with one neat crack.',
    'A claw caught a root. Your other hand held the lamp by its handle. Both were bad things to be holding when you needed two hands.',
    'On the far shelf, the coal runner set one paw toward the path and leaned out far enough for you to see their face. “Drop it! I can get the guard!”'
  ], [
    choice('Drop the lamp and take the offered help.', 'ramp', 'The runner can fetch the guard while you climb.'),
    choice('Hang on and try to light the broken lamp.', 'washout', 'The driver is almost at the bend.')
  ]),
  ramp: scene('The guard’s footpath', 'A door on the uphill side', [
    'The guard took one look at your face and reached for the signal cord. The post rang twice. Up the grade an answer came, and the train drew to a stop.',
    'The guard pulled out a pencil. “Any hurt?”',
    'You considered your pride. The pencil hovered. “No.”',
    'There was an old loading platform on the uphill side of the carriage. The conductor could open the doors there. Past it, a footpath ran up to the market, where somegriff might be persuaded to find a kettle.'
  ], [
    choice('Open the uphill doors and count every passenger.', 'escort'),
    choice('Keep everycreature aboard and send the train back.', 'siding')
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
    choice('Wait for a second inspection before stopping traffic.', 'secondlook', 'Get certainty before putting your name on it.')
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
    choice('Meet the passengers and ask what they need.', 'escort', 'Count heads, clear seats, and tell the kitchen what to serve.'),
    choice('Offer the cooks fair pay for a night’s work.', 'accounts', 'Get beds and supper ready before the passengers reach town.')
  ]),
  survey: scene('The head of the stairs', 'Good iron, bad stone', [
    'A guard ran past you with a red flag. The distant grind of brakes gave Mera time to take the smiths down two steps and no further.',
    'Sedge turned a stone the size of a loaf in both hands. “I can give you a brace as good as any brace in the country. What do you want me to lean it on?”',
    'No one had an answer. The question came back up to the street, where the shopkeepers were beginning to calculate how much a closed line would cost them.'
  ], [
    choice('Let Mera set the repair terms and bring them to the council.', 'hearing'),
    choice('Set up a meal and a collection for stranded passengers.', 'accounts'),
    choice('Buy the brace and put the freight through slowly.', 'brace', 'The market needs what is in those wagons.')
  ]),
  record: scene('Station office', 'Put your name on it', [
    'Corven wrote down the claw-width of drop, the moving mortar, and the time. He gave Mera the pencil to add what she had seen. She wrote slowly. You could hear the whistle through the glass.',
    'Corven turned the key. You heard two bells from the upper bend. Corven let his shoulders drop. “All right. I suppose I’ve stopped a train.”',
    'He put a second sheet down. “They’ll want an account for the council. I’d like the names of the griffons who helped. I’ll put mine by the key.”'
  ], [
    choice('Take the crew’s account to the council together.', 'hearing'),
    choice('Leave your account and take charge of the passengers.', 'escort'),
    choice('Give the conductor the report and ask them to turn back.', 'siding')
  ]),
  override: scene('Station office', 'Two bells', [
    'The key turned. Bells sounded from up the grade. The whistle broke off. Corven’s beak clicked shut so hard it hurt to hear.',
    'Corven stared at the bare nail. After a while he rubbed the spot it had left in the wall. “There are sixteen seats in that carriage. I was in the middle of thinking about that.”',
    'You set the key on the desk. “I needed you to be further along.” Outside, Mera called that the train was stopped. Corven looked from the key to the ledger and asked what he should write.'
  ], [
    choice('Tell him exactly what you did, and ask Mera to sign beside you.', 'hearing'),
    choice('Give him the key back and take the passengers up to supper.', 'escort'),
    choice('Say the key was already turned when you found it.', 'erased')
  ]),
  clear: scene('The station yard', 'Stand where I can see you', [
    'A pony objected that they had come a long way just to meet their sister. Mera took them by one hoof and you took their valise. They came up with you, complaining as far as the sound of the first falling stone.',
    'At the top you rang the station bell with both hands. The guard knew what to do with a bell at that hour. The train stopped. The edge of the platform came away and let itself down into the ravine.',
    'The pony found their sister at the uphill door. The valise was still in your hand.'
  ], [
    choice('Walk the sisters and the other passengers into town.', 'escort'),
    choice('Stay with Mera and get a repair request on the record.', 'hearing')
  ]),
  drain: scene('The service ledge', 'A mouthful of leaves', [
    'The drain let go all at once. Brown water went over your head and down your back in a sheet. You had a mouthful of leaves and the great satisfaction of a job done.',
    'Then the ledge shifted under both hind paws. Water that had already gone through the wall had taken the fine stone with it. Mera’s bell sounded above, sharp and repeated.',
    'There was a handrail on the stairs. You could reach it if you left the clearing hook where it was.'
  ], [
    choice('Leave the hook and climb to Mera.', 'clear'),
    choice('Hold your ground and finish clearing the drain.', 'hold')
  ]),
  brace: scene('The platform edge', 'Just the one crossing', [
    'The upright looked strong. It was strong. Sedge had made it. The stone beneath its foot was somebody else’s workmanship, and several hundred rains older.',
    'Corven leaned over the rail of the signal platform. The red lamp shone behind his shoulder. “Driver can see it. Say the word and it stays red.”',
    'A little chalk line Mera had drawn across two stones was now two chalk lines. Sedge looked at it, then at you.'
  ], [
    choice('Keep the red signal and close the line properly.', 'hearing'),
    choice('Tell Corven to clear the signal and bring the freight through.', 'wreck')
  ]),

  escort: scene('The market footpath', 'Seventeen', [
    'You counted sixteen passengers, then seventeen. The seventeenth had been asleep in her mother’s lap. Now she was awake and determined to correct your arithmetic. She spread the talons of one hand. “I’m five.”',
    '“I’ll tell the guard.” You told the guard. The chick watched until the tally went down.',
    'The kitchens were one flight of steps farther up. A pony in the back of the line kept turning to look downhill. The chick’s mother stopped beside them. “We can ask. Which carriage was it?”',
    'The pony looked at you. “My blue case. I left it under the seat. There’s something in it for my sister.”'
  ], [
    choice('Take everycreature up to the kitchens together.', 'footpath', 'Get the passengers warm before sorting out belongings.'),
    choice('Ask what’s in the case and get the conductor’s help.', 'luggage', 'Keep the pony in sight of the group while you check.')
  ]),
  luggage: scene('The uphill doors', 'The blue case', [
    'The sister had a bakery. The case held the little brass weights their father used for measuring dough. You had imagined a collection of letters or a great inheritance. The pony held their hooves a hoof’s width apart. “Heavy for how small they are.”',
    'The conductor opened her wagon book. “We can go back in from the uphill side.” She ran a hoof down the page. “I can escort one of you. Both of you, and I’ve got more heads to watch than windows.”',
    'The pony looked at the gap between the train and the loading step. The whistle had stopped, but their ears still lay flat.'
  ], [
    choice('Go with the conductor while the pony waits with you in sight.', 'bluecase'),
    choice('Get the case’s description on the ledger and leave it aboard for now.', 'claimcheck')
  ]),
  accounts: scene('The market kitchens', 'Who washes the bowls?', [
    'The baker counted the bowls twice and came up with a different number. A griffon under the bench handed up the missing one. They had been using it to catch the drips from the kettle.',
    'A cook hauled her stool over with one hind paw. “Supper I can do. Somebody has to stay up with the fire if they want breakfast.” She looked into the empty bread basket. “Somebody also has to be paid for the flour.”',
    'The station purse was locked in Corven’s office. The conductor could pay from her own pouch. You saw how few bits she had before she drew the strings shut.'
  ], [
    choice('Bring the cooks’ tally to Corven and use the station purse.', 'commons'),
    choice('Offer only what neighbors can spare tonight.', 'thinpot'),
    choice('Put the full cost on the conductor’s bill.', 'bill')
  ]),
  hearing: scene('The council anteroom', 'Who goes on the sheet?', [
    'Mera set the little piece of mortar on a bench between you. By the time the clerk came out, it had left a brown ring.',
    'A smith’s guild representative had priced a new wall. One of the members from the market had a list of stalls that would close if the trains stayed off much longer. They compared pages. Neither had written down the drain.',
    'Mera reached for the quill. “I can show them where the water goes.” The clerk held the door. You could hear Giselda moving chairs around inside.'
  ], [
    choice('Ask for the floor for Mera and let her show the council.', 'publicworks'),
    choice('Propose paying haulers to keep goods moving during repairs.', 'wingroad'),
    choice('Ask the council to cover the wall and leave the drain for later.', 'repeat')
  ]),
  siding: scene('The uphill switch', 'What goes back', [
    'The driver got the engine up to the siding and shut the throttle. She had a steady hoof now. You could see what it cost her by the way she rested the other one against the window frame.',
    'A pony unfolded a letter from their sister who was waiting at the lower station. Two griffon chicks waved through a window at a guard walking up the footpath. The guard waved back with the whole arm.',
    'The conductor came forward with the freight list. “I can take them all back. We’ve time to unload a little here, if somebody can carry it and knows where it’s going.”'
  ], [
    choice('Get a list of names to the waiting families and send the whole train back.', 'turnback'),
    choice('Ask the haulers to help carry the most urgent freight.', 'manifest')
  ]),
  manifest: scene('The uphill switch', 'What fits on your back', [
    'The haulers looked up at the freight door and counted the trips on their claws. They could make three before the light went. The rest would need to go back with the train.',
    'A cloth merchant held up a receipt. The butcher needed ice. Somebody at the healers’ rooms had written POTS in one corner of the list, then scratched it out and put CLEAN BANDAGES.',
    'Sedge took off the empty load frame and stood it up beside you. “First load’s yours to call.”'
  ], [
    choice('Send the bandages first and let the kitchens divide the remaining loads.', 'firstload'),
    choice('Fill the frames in the order the freight was paid for.', 'paidfirst')
  ]),
  erased: scene('Station office', 'The pause before the ink', [
    'Corven put the pencil down without writing. On the other side of the glass, Mera held out the red lamp for the guard to take. Her eyes flicked from the empty nail to your hand.',
    '“I can wait for the conductor’s statement.” Corven pushed his chair back. “Or I can write yours now, while I have you.”',
    'You had saved the train. There was room on the sheet for how.'
  ], [
    choice('Tell him you turned the key and why.', 'plainrecord'),
    choice('Put your name on the version you already gave him.', 'byyourword')
  ]),
  secondlook: scene('Station office', 'The length of the stairs', [
    'Corven stood up with his coat half on. A guard had gone for the inspector. She was good and quick. Neither fact made the market stairs shorter.',
    'Up at the bend the engine whistled twice. Mera came into the office with a bit of mortar in her hand and water in both sleeves. She put the mortar on the desk. It broke when she took her hand off it.',
    'Corven looked at you. He still had one talon through the loop of the signal key.'
  ], [
    choice('Tell Corven the wait is over. Put your name on the stop.', 'lastflag'),
    choice('Wait for the inspector to make the call.', 'late')
  ]),
  lastflag: scene('The near signal', 'One ring short', [
    'Corven turned the key. The first bell rang and the second caught halfway through its stroke. He tugged again. There was a sound like a spoon against the bottom of a drawer.',
    'The guard had a red flag and room to stand above the bend. You could see their silhouette. They had their head turned toward the office, still listening for the second bell.',
    'The nearest door stuck in the rain. The office window did what windows do when you push them all the way up.'
  ], [
    choice('Open the window and get the guard’s eyes on you.', 'bothhands'),
    choice('Stay on the key and work the bell loose.', 'late')
  ]),
  washout: scene('Above the cutting', 'The wrong light', [
    'The wick caught. You had a cheerful little flame in your hand, the sort you might see any evening from the window of a train.',
    'Below, the driver leaned out as the engine came past the first post. She lifted a hoof in greeting. You understood, all at once, how it looked from where she was.',
    'The coal runner had reached the guard’s path. One overlong stride had left them with a wing full of brambles. They looked back at you.'
  ], [
    choice('Put out the flame and wave the runner on toward the guard.', 'runnersflag'),
    choice('Lift the lamp higher and try to catch the driver’s eye.', 'emptyhook')
  ]),
  hold: scene('The service ledge', 'All the weight on one claw', [
    'You got the hook free. The ledge tipped and put you on one knee. Your wing knocked the handrail with a sharpness you would have time to think about later.',
    'Mera’s bell stopped. A pair of talons came down through the gap in the rail. “Which hand can you move?”',
    'The hook had a lovely grip. You couldn’t have asked for better work from a smith. You wished very hard that it had been attached to the stairs.'
  ], [
    choice('Drop the hook and give Mera your free hand.', 'grounded'),
    choice('Use the hook to try to climb back onto the ledge.', 'understone')
  ]),
  wreck: scene('The platform edge', 'Three breaths', [
    'For three long breaths the brace held. Then the stone at its foot went into the ravine. The brakemare dropped the coupler. You caught her eye through the haze and she pointed back. The passenger coach still had all its wheels on the rail.',
    'The driver was visible through the broken window. She had both eyes open and one hoof caught under the seat. Below her, against the edge of the platform, a freight door hung open.',
    'Sedge had the rope. He nodded at the brake lever and waited for you to say where you needed him.'
  ], [
    choice('Put the rope on the driver and get the haulers to lift together.', 'ropecircle'),
    choice('Try to move the snagged wagon so the driver has space to climb out.', 'lostline')
  ]),

  footpath: ending('Good', 'The market stairs', 'A place at the table', [
    'All seventeen made it to the kitchen. The chick counted the places at her table with enough care that you asked her to tell the cook how many bowls they needed. She took the job seriously enough to count the cook as well.',
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
    'The train left the siding. Up the grade, its tail lamp dwindled to the size of a coal in a stove. Every seat went back the way it had come. A guard brought a list down to the platform so the waiting families would know who was safe.',
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
    'You held the little flame as high as your shoulder would let you. The engine went by below you. Then came a sound you could feel in the root.',
    'The coach stayed on the grade. Two freight wagons went off it. The coal runner brought the guard back and helped get you down. You had a red cut across each palm from the handle.',
    'There was a hook for the lamp at the station. You left the broken handle hanging there. On your next shift the hook was empty. There was a new lamp at the bend, and a guard assigned to tend it. The guard was the coal runner’s sister.',
    'The runner still waved when you passed. For a while you found that harder to bear than if they hadn’t.'
  ]),
  understone: ending('Bad', 'The service ledge', 'The long way up', [
    'You got the hook into a crack above your head. The stone it caught came loose. Then the ledge went.',
    'Mera had stopped the train. She spent the next hour finding a rope crew and the next three trying to get eyes on you. By the time you felt their rope, you were shivering too hard to tie it. You had to let the smallest hauler come down and do it for you.',
    'The healers said the wing would mend. They said it again when you asked about flying. They had a great deal of patience. You discovered you had very little.',
    'Mera brought your supper right up the stairs for a month. You always heard her coming. One of these days, you thought, you’d be the one carrying it.'
  ]),
  lostline: ending('Bad', 'The platform edge', 'A brace will hold', [
    'You got the wagon to move. It settled another claw-width toward the ravine and pulled the engine with it. Sedge threw the rope down and got the driver to take it before you could try again.',
    'The driver came out through the window. It took every hauler on the platform to get her up to the street. By then she could barely close her hoof around the rope.',
    'The rail stayed shut for months. Shops made do without the freight you had been so sure they needed tonight. Sedge worked on the new wall. When you brought your tools, he gave you a place to work and you did your share.',
    'At lunch you sat with the crew. It took a long time for anygriff to pass you the bread.'
  ]),
  bluecase: ending('Good', 'The market kitchens', 'Father’s weights', [
    'The case was exactly where the pony had said. A bit too far under the seat for the conductor to reach with her hoof. You hooked it with two talons and passed it up through the door.',
    'The sister came to the kitchens in a floury apron. She worked the clasp twice before it opened. The weights were dull brown and the smallest had a dint in the side. Her sister touched that one first.',
    'A week later you found a bun in your ledger wrap. “Two ounces,” the note read. It was a little more than that. You could tell without needing weights.'
  ]),
  claimcheck: ending('Mixed', 'The market kitchens', 'A place in the ledger', [
    'You made the conductor write “blue with a split handle.” The pony made her add “under the third seat.” Everyone came up for supper with enough time left to eat it hot.',
    'The case came back four days later. The pony found you at the station with a loaf to thank you. You’d seen their sister selling bread on the market stairs that morning. When you asked what the delay had cost them, the pony broke the loaf in two.',
    '“Four days.” They gave you the larger piece. “I had four days with her.”'
  ]),
  thinpot: ending('Mixed', 'The market kitchens', 'Add a little water', [
    'The butcher brought two onions. The baker brought the end of yesterday’s loaf and a heel of today’s. It was enough to make supper if you put a good deal of trust in the onions.',
    'A passenger washed the bowls. There was no fuel left for breakfast when the haulers came to carry the bags back down. You took the morning delivery on an empty crop before anyone could ask you to feed them again.',
    'Next time a kettle went on for travelers, a cook brought her own chalk and wrote the price of the fuel on the door.'
  ]),
  bill: ending('Bad', 'The market kitchens', 'On the conductor’s account', [
    'The conductor counted her bits onto the table. They paid for supper. At the baker’s tally she turned her pouch upside down and a button fell out. Your name was on the request to feed the passengers. Hers was on the bill.',
    'The cooks served what they had started. Some passengers left the next morning thinking the railway had covered the meal. The conductor walked the whole way to the uphill platform with a broken strap held shut in one hoof.',
    'When the next passenger run was announced, the kitchens sent a price in writing. It was the same price. They asked for it up front.'
  ]),
  wingroad: ending('Good', 'The market stairs', 'The way freight went', [
    'The council paid the haulers by the load while the wall was rebuilt. A smith insisted the payment include the trip back uphill with the empty frames. The haulers elected her to read the tally out loud every week.',
    'By reopening day, you’d learned who could get an egg down the stairs whole and who could be trusted with one to eat on the way. You’d also learned what the market could do for three weeks without a train.',
    'The conductor offered Sedge a place unloading the first wagon. Sedge waved her over to the load frames. “I’ve got two griffons you ought to meet.”'
  ]),
  repeat: ending('Bad', 'The lower station', 'Same rain', [
    'The council found enough for the wall. The old drain stayed up where the plans ended. You were there when the fresh stone was signed off, gray and dry and square against the platform.',
    'The first hard rain ran out under the waiting room. The second came up through the boards. Corven closed the line himself that evening. He turned the key without waiting for you.',
    'Mera came down with the original drawing, still in its fold. This time there was money for the drain. There was also a second bill for the stone.'
  ]),
  firstload: ending('Good', 'The market stairs', 'The top of the list', [
    'There was a griffon waiting outside the healers’ rooms with the hem of her apron pressed to somebody’s paw. She saw what you were carrying and got the door all the way open with her tail.',
    'The other two loads went through the kitchens. Every merchant got a little of what they needed. The rest went back up the line with the train. You wrote every piece down, including the ice that arrived as most of a bucket of water.',
    'At dusk the cook handed you the empty bucket. There was a hot loaf sitting in the bottom and a clean cloth folded over it. “That’s on the list too.”'
  ]),
  paidfirst: ending('Mixed', 'The uphill switch', 'In receipt order', [
    'The cloth merchant got the first two loads. They sent somebody down with a receipt for each bale, and every signature was right where it should be.',
    'The healers boiled old dressings through the night. The kitchens bought one bolt of cloth off the merchant the next morning and sent it upstairs cut into strips. You put down what they paid. It came to more than the freight charge on all three loads.',
    'The conductor handed you a blank sheet for the next run. The first column said PAID. You added a second one.'
  ]),
  plainrecord: ending('Mixed', 'Station office', 'Both names', [
    'You told Corven where you’d stood and which hand you’d used. Mera added what she’d seen from the window. Corven struck through the first account with a single line. There was still room on the sheet.',
    'You lost the office key and kept your market rounds. Corven drew up a rule for when a courier could turn the signal. He put it up on a hook where anygriff coming in could read it.',
    'The next time you brought him a ledger, there was a clean cup by your elbow. He moved the key out of the way so you could sit down.'
  ]),
  bothhands: ending('Good', 'The near signal', 'A flag in time', [
    'You put both hands through the window and crossed them high. The guard saw you do it. A moment later a red flag went out exactly where the driver could see it.',
    'The engine stopped short of the loose stone. For a while all you could hear was the guard panting. Corven put his pencil down by the window. “I need the name of the griffon on that post.”',
    'You walked up to ask. The guard looked at the open window, then at the flag, and made you give your name first.'
  ]),
  runnersflag: ending('Mixed', 'The upper bend', 'The runner’s bucket', [
    'The runner tore free of the brambles and got to the guard. The flag came out too late for the engine to stop cleanly. Its front wheels jumped the rail. The rest of the train stayed put.',
    'The runner was holding their empty coal bucket when you came down. You filled it from the station kettle so the driver could wash the grit out of her eyes.',
    'Later the guard put in a new signal post. The runner came up with two buckets of bolts. This time you were there to take one.'
  ]),
  grounded: ending('Mixed', 'The service stairs', 'Ten steps', [
    'The hook went down. Mera caught you under the forearm and would have come down with you if the guard hadn’t caught her by the belt. The three of you stopped moving at once. It was an excellent feeling.',
    'You walked up ten steps and sat down. The train had stopped and your wing would be fine. You would have to do your rounds on foot for a while.',
    'Mera handed you the small end of her supper roll. You handed it back and tore the large end in two. She sat down beside you to eat.'
  ]),
  ropecircle: ending('Mixed', 'The platform edge', 'Hold together', [
    'Sedge put the rope through the window. You got it around the driver and the brakemare reached her from inside. Together you lifted until she could pull her hoof free.',
    'The driver made it up the steps between you and Mera. Behind her the engine leaned far enough to put out its own fire. The line would be shut for months. Nobody asked you what the freight had been worth.',
    'When the council heard the crew, the driver asked you to sit where she could see you while she spoke. So you did.'
  ])
};
