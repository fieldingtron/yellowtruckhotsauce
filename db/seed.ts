import { db, Stories, Panels } from 'astro:db';

export default async function seed() {
	await db.delete(Panels);
	await db.delete(Stories);

	await db.insert(Stories).values([
		{
			slug: 'gonkerlives',
			title: 'Gonker Lives',
			summary: 'The legend of the survivor.',
		},
		{
			slug: 'cornhole',
			title: 'Operation Cornhole',
			summary: 'The mission that changed everything.',
		},
		{
			slug: 'pauls',
			title: 'Hot Sauce History',
			summary: 'The man behind the wheel.',
		},
		{
			slug: 'beas-story',
			title: "The Dragon's Roar",
			summary: 'The champion of the river.',
		},
		{
			slug: 'phin',
			title: 'The Boss',
			summary: 'The master of creation.',
		},
		{
			slug: 'peyton',
			title: 'Things No One Asked Them To Say',
			summary: 'The accidental bestseller.',
		}
	]);

	await db.insert(Panels).values([
		// Gonker Lives
		{
			storySlug: 'gonkerlives',
			order: 1,
			imageUrl: '/yellowtruck.jpg',
			fullStory: '<p>Deep in the archives, the files were found. Gonker was never gone. He was just waiting for the right signal.</p>',
			typedCaptions: ['Signal received.', ' The yellow truck arrives.', 'Gonker steps out.'],
		},
		// Operation Cornhole
		{
			storySlug: 'cornhole',
			order: 1,
			imageUrl: '/yellowtruck.jpg',
			fullStory: '<p>It wasn\'t just a game. It was a test of skill, precision, and hot sauce tolerance.</p>',
			typedCaptions: ['The target is set.', 'Bags in hand.', 'A perfect slide.'],
		},
		// Pauls - Panel 1
		{
			storySlug: 'pauls',
			order: 1,
			imageUrl: '/pauls_panel_1_bald.jpg',
			fullStory: '<p>Between the yelling students, the protests, and the demands for better grades without work, Pauls knew it was time.</p>',
			typedCaptions: [
				'The classroom was in full revolt.',
				'Between the yelling students, the protests, and the demands for better grades without work...',
				'Pauls knew it was time.'
			],
		},
		// Pauls - Panel 2
		{
			storySlug: 'pauls',
			order: 2,
			imageUrl: '/pauls_panel_2.jpg',
			fullStory: '<p>While Phin spent his nights researching the ultimate recipe, Pauls watched with growing anticipation. They weren\'t just making sauce; they were building an empire.</p>',
			typedCaptions: [
				'Phin dove deep into the digital archives of spice.',
				'Two cats, double the judgment.',
				'The blueprint for Yellow Truck Hot Sauce was beginning to take shape.'
			],
		},
		// Pauls - Panel 3
		{
			storySlug: 'pauls',
			order: 3,
			imageUrl: '/pauls_panel_3.jpg',
			fullStory: '<p>Batch #42 was a biological catastrophe. It smelled like burnt tires and disappointment, and the murky green color was actively discouraging.</p>',
			typedCaptions: [
				'Batch #42 was a biological catastrophe.',
				'It smelled like burnt tires and disappointment.',
				'Even the cats were staging a kitchen walkout.'
			],
		},
		// Pauls - Panel 4
		{
			storySlug: 'pauls',
			order: 4,
			imageUrl: '/pauls_panel_4.jpg',
			fullStory: '<p>The university market testing was... aggressive. Students were running for fountains, steam literally pouring from their ears. Rejection was tasting a lot like murky green sludge.</p>',
			typedCaptions: [
				'The market testing was... aggressive.',
				'Student tasters were refusing to return for a second drop.',
				'Professor Pauls was beginning to doubt the dream.'
			],
		},
		// Pauls - Panel 5
		{
			storySlug: 'pauls',
			order: 5,
			imageUrl: '/pauls_panel_5.jpg',
			fullStory: '<p>They were out of ideas and out of spirit. Late night turned into early morning as Phin collapsed into sleep, and Pauls watched the rain wash away their hopes.</p>',
			typedCaptions: [
				'They were out of ideas and out of spirit.',
				'Even the cats could sense the heavy cloud of failure.',
				'The dream of the perfect sauce was slipping away.'
			],
		},
		// Pauls - Panel 6
		{
			storySlug: 'pauls',
			order: 6,
			imageUrl: '/pauls_panel_6.jpg',
			fullStory: '<p>The cats decided to take pity on the pathetic humans. Under the cover of the full moon, a secret biological catalyst was added to the jalapeno patch, forever changing the DNA of the crop.</p>',
			typedCaptions: [
				'The cats decided to take pity on the pathetic humans.',
				'A secret, biological catalyst was added under the full moon.',
				'The intervention was... unconventional.'
			],
		},
		// Pauls - Panel 7
		{
			storySlug: 'pauls',
			order: 7,
			imageUrl: '/pauls_panel_7.jpg',
			fullStory: '<p>The morning harvest defied every law of botany. The peppers were practically vibrating with flavor, their vibrant orange-red glow promising something legendary.</p>',
			typedCaptions: [
				'The morning harvest defied every law of botany.',
				'The peppers were practically vibrating with flavor.',
				'Phin had never seen anything like it.'
			],
		},
		// Pauls - Panel 8
		{
			storySlug: 'pauls',
			order: 8,
			imageUrl: '/pauls_panel_8.jpg',
			fullStory: '<p>The new batch was more than hot—it was addictive, it was perfection, it was a culinary revelation. Yellow Truck Hot Sauce had finally arrived, and the world would never be the same.</p>',
			typedCaptions: [
				'TO BE CONTINUED...'
			],
		},
		// Bea's Story - Panel 1
		{
			storySlug: 'beas-story',
			order: 1,
			imageUrl: '/beas_panel_1.jpg',
			fullStory: '<p>At 15, Bea was already the undisputed queen of the river. Leading her dragon boat team wasn\'t just a sport; it was her domain.</p>',
			typedCaptions: [
				'Bea wasn\'t just the leader of the dragon boat team.',
				'She was the undisputed queen of the river.'
			],
		},
		// Bea's Story - Panel 2
		{
			storySlug: 'beas-story',
			order: 2,
			imageUrl: '/beas_panel_2.jpg',
			fullStory: '<p>More than anything, Beatrix hated to lose. Her father, Pauls, had many failures in his lab. Bea saw them as tactical opportunities, especially the "experimental rejects" that were too volatile for human consumption.</p>',
			typedCaptions: [
				'More than anything, Beatrix hated to lose.',
				'Her father had many failures in his lab.',
				'Bea saw them as tactical opportunities.'
			],
		},
		// Bea's Story - Panel 3
		{
			storySlug: 'beas-story',
			order: 3,
			imageUrl: '/beas_panel_3.jpg',
			fullStory: '<p>She was always the most charming competitor on the docks, offering "friendship samples" of her special blend. The rival teams never suspected the gut-wrenching surprise she had in store.</p>',
			typedCaptions: [
				'She was always charming on the docks.',
				'The rival teams never suspected a thing.'
			],
		},
		// Bea's Story - Panel 4
		{
			storySlug: 'beas-story',
			order: 4,
			imageUrl: '/beas_panel_4.jpg',
			fullStory: '<p>Sunday mornings were for choir practice. Not just for the music, but to build the ultimate vocal range and lung capacity. Bea was training for more than just a hymn.</p>',
			typedCaptions: [
				'Sunday mornings were for choir practice.',
				'Building the ultimate vocal range.'
			],
		},
		// Bea's Story - Panel 5
		{
			storySlug: 'beas-story',
			order: 5,
			imageUrl: '/beas_panel_5.jpg',
			fullStory: '<p>Halfway through the championship, the competition began to crumble. The "reject" sauce was doing its dirty work, leaving rival rowers clutching their stomachs in agony.</p>',
			typedCaptions: [
				'Halfway through, the competition began to crumble.',
				'The "reject" sauce was doing its dirty work.'
			],
		},
		// Bea's Story - Panel 6
		{
			storySlug: 'beas-story',
			order: 6,
			imageUrl: '/beas_panel_6.jpg',
			fullStory: '<p>But one boat remained neck-and-neck. In the middle of the lake, far from the judges\' ears, Bea stood up. It was time for her secret weapon.</p>',
			typedCaptions: [
				'But one boat remained neck-and-neck.',
				'It was time for the secret weapon.'
			],
		},
		// Bea's Story - Panel 7
		{
			storySlug: 'beas-story',
			order: 7,
			imageUrl: '/beas_panel_7.jpg',
			fullStory: '<p>She let out a roar that would make a dragon jealous. The sonic vibration was precise and devastating, splitting the rival boat apart like wet paper.</p>',
			typedCaptions: [
				'She let out a roar that would make a dragon jealous.',
				'Devastatingly precise.'
			],
		},
		// Bea's Story - Panel 8
		{
			storySlug: 'beas-story',
			order: 8,
			imageUrl: '/beas_panel_8.jpg',
			fullStory: '<p>Another year, another championship for Bea. Winning isn\'t just about strength; it\'s about technique and the right "supplements."</p>',
			typedCaptions: [
				'Winning isn\'t just about strength.',
				'TO BE CONTINUED...'
			],
		},
		// Phin's Story - Panel 1
		{
			storySlug: 'phin',
			order: 1,
			imageUrl: '/phin_panel_1.jpg',
			fullStory: '<p>Phin is grounded. No school on time = No internet.</p>',
			typedCaptions: [
				'Phin is grounded.',
				'No school on time = No internet.'
			],
		},
		// Phin's Story - Panel 2: Grounded From The Grid
		{
			storySlug: 'phin',
			order: 2,
			imageUrl: '/phin_panel_2_grounded.jpg',
			fullStory: '<p>Study door shut tight. Sign: “HOT SAUCE R&D — DO NOT ENTER.” Professor inserting Wi-Fi router into a safe like it’s radioactive. Phin watches, betrayed and furious.</p>',
			typedCaptions: [
				'No WiFi. No gaming. No freedom.',
				'Phin swears quietly: He’ll get it back… one way or another.'
			],
		},
		// Phin's Story - Panel 3: The Bitter Garden
		{
			storySlug: 'phin',
			order: 3,
			imageUrl: '/phin_panel_3_garden.jpg',
			fullStory: '<p>Backyard pepper patch. Plants small, wilted, pathetic. Professor kneels with soil test kit, frowning at results. Phin peers through window, realizing his father is desperate.</p>',
			typedCaptions: [
				'The professor’s boutique sauce dream is failing.',
				'The peppers won’t grow… and time is running out.'
			],
		},
		// Phin's Story - Panel 4: Night Research
		{
			storySlug: 'phin',
			order: 4,
			imageUrl: '/phin_panel_4_research.jpg',
			fullStory: '<p>Phin sneaking into the yard at night with flashlight & DIY thermal monocle made from goggles and duct tape. Two black cats watch from fence with alien awareness.</p>',
			typedCaptions: [
				'Grounded and bored, Phin wanders outside.',
				'Curiosity blooms — something strange hums under the soil.'
			],
		},
		// Phin's Story - Panel 5: The Accident
		{
			storySlug: 'phin',
			order: 5,
			imageUrl: '/phin_panel_5_accident.jpg',
			fullStory: '<p>Cats casually peeing at base of pepper stems. Soil glows faint neon and steam rises. Phin freezes mid-step — stunned realization moment.</p>',
			typedCaptions: [
				'He doesn’t invent the miracle — he witnesses it.',
				'Cat urine… interacts with the peppers.'
			],
		},
		// Phin's Story - Panel 6: The Cat Choir Project
		{
			storySlug: 'phin',
			order: 6,
			imageUrl: '/phin_panel_6_choir.jpg',
			fullStory: '<p>Backyard training setup. Phin with whistle, whiteboard diagrams, cat treats as incentives. Cats arranged like soldiers or lab subjects — eerie compliance.</p>',
			typedCaptions: [
				'Phin conducts experiments. The cats follow orders.',
				'Something in their eyes suggests they understand too much.'
			],
		},
		// Phin's Story - Panel 7: The Harvest
		{
			storySlug: 'phin',
			order: 7,
			imageUrl: '/phin_panel_7_harvest.jpg',
			fullStory: '<p>Rows of oversized glowing peppers — deep red with faint bio-luminescent veins. Professor drop-to-knees, overwhelmed. One black cat sits beside him like a witness.</p>',
			typedCaptions: [
				'A miracle crop erupts overnight.',
				'Pauls believes it\'s luck — Phin says nothing.'
			],
		},
		// Phin's Story - Panel 8: The Empire Wakes
		{
			storySlug: 'phin',
			order: 8,
			imageUrl: '/phin_panel_8_empire.jpg',
			fullStory: '<p>Magazine cover: “THE SAUCE KING!” Factory line bottling glowing sauce. News drones hover overhead. Phin stands in shadows behind success photos.</p>',
			typedCaptions: [
				'The sauce spreads worldwide.',
				'But Professor won’t return the WiFi — principle over progress.'
			],
		},
		// Phin's Story - Panel 9: Biological Strike
		{
			storySlug: 'phin',
			order: 9,
			imageUrl: '/phin_panel_9_strike.jpg',
			fullStory: '<p>Garden now guarded by cats holding tiny union-style picket signs. Phin stands defiantly with banner: NO BYTES = NO BITES. Peppers drying and greying behind him.</p>',
			typedCaptions: [
				'Phin withdraws the feline workforce.',
				'The sauce pipeline collapses within days.'
			],
		},
		// Phin's Story - Panel 10: The Router Treaty
		{
			storySlug: 'phin',
			order: 10,
			imageUrl: '/phin_panel_10_treaty.jpg',
			fullStory: '<p>In Phin’s glowing bedroom control center — dark screens, code rain, cyberpunk lighting. Professor kneels, offering a golden router and signed contract: “Unlimited Internet + Partnership Rights.” Cats perched like advisors.</p>',
			typedCaptions: [
				'Cornered, Pauls surrenders.',
				'Phin gains power — not just WiFi, but the keys to the empire.'
			],
		},
		// Peyton's Story - Panel 1
		{
			storySlug: 'peyton',
			order: 1,
			imageUrl: '/peyton_panel_1.jpg',
			fullStory: '<p>Peyton wanted to write a classic. All she had was caffeine and panic.</p>',
			typedCaptions: [
				'Peyton wanted to write a classic.',
				'All she had was caffeine and panic.'
			],
		},
		{
			storySlug: 'peyton',
			order: 2,
			imageUrl: '/peyton_panel_2.jpg',
			fullStory: '<p>Bills don’t wait for inspiration. So she rented out the other half of her duplex.</p>',
			typedCaptions: [
				'Bills don’t wait for inspiration.',
				'So she rented out the other half of her duplex.'
			],
		},
		{
			storySlug: 'peyton',
			order: 3,
			imageUrl: '/peyton_panel_3.jpg',
			fullStory: '<p>Steven and Craig moved in. Bold. Loud. Dramatic. Unfiltered.</p>',
			typedCaptions: [
				'Steven and Craig moved in.',
				'Bold. Loud. Dramatic. Unfiltered.'
			],
		},
		{
			storySlug: 'peyton',
			order: 4,
			imageUrl: '/peyton_panel_4.jpg',
			fullStory: '<p>Every day: a new crisis. None of them real.</p>',
			typedCaptions: [
				'Every day: a new crisis.',
				'None of them real.'
			],
		},
		{
			storySlug: 'peyton',
			order: 5,
			imageUrl: '/peyton_panel_5.jpg',
			fullStory: '<p>Her cats adored Steven’s laundry basket. Possibly too much.</p>',
			typedCaptions: [
				'Her cats adored Steven’s laundry basket.',
				'Possibly too much.'
			],
		},
		{
			storySlug: 'peyton',
			order: 6,
			imageUrl: '/peyton_panel_6.jpg',
			fullStory: '<p>They never figured it out. Cat-pee mystery season: ongoing.</p>',
			typedCaptions: [
				'They never figured it out.',
				'Cat-pee mystery season: ongoing.'
			],
		},
		{
			storySlug: 'peyton',
			order: 7,
			imageUrl: '/peyton_panel_7.jpg',
			fullStory: '<p>Her brother said, “You should publish this.” She didn’t hesitate.</p>',
			typedCaptions: [
				'Her brother said, “You should publish this.”',
				'She didn’t hesitate.'
			],
		},
		{
			storySlug: 'peyton',
			order: 8,
			imageUrl: '/peyton_panel_8.jpg',
			fullStory: '<p>So she made a book of their stupidest phrases. Anonymous. Completely untraceable.</p>',
			typedCaptions: [
				'So she made a book of their stupidest phrases.',
				'Anonymous. Completely untraceable.'
			],
		},
		{
			storySlug: 'peyton',
			order: 9,
			imageUrl: '/peyton_panel_9.jpg',
			fullStory: '<p>It blew up. Apparently, nonsense is delightful.</p>',
			typedCaptions: [
				'It blew up.',
				'Apparently, nonsense is delightful.'
			],
		},
		{
			storySlug: 'peyton',
			order: 10,
			imageUrl: '/peyton_panel_10.jpg',
			fullStory: '<p>Steven & Craig still complain. Still dramatic. Still confused why they smell funny. Still unknowingly paying her mortgage — twice.</p>',
			typedCaptions: [
				'Steven & Craig still complain.',
				'Still dramatic. Still confused why they smell funny.',
				'Still unknowingly paying her mortgage — twice.'
			],
		},
	]);
}
