import { db, Stories, Panels } from 'astro:db';

export default async function seed() {
	await db.delete(Panels);
	await db.delete(Stories);

	await db.insert(Stories).values([
		{
			slug: 'pauls',
			title: 'Hot Sauce History',
			summary: 'The man behind the wheel.',
		},
		{
			slug: 'bea',
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
		},
		{
			slug: 'ian',
			title: 'The Midnight Strays',
			summary: 'The melody of a black cat.',
		},
		{
			slug: 'isa',
			title: 'Isabella & The Sonic Carol',
			summary: 'A holiday adventure with a high-pitched twist.',
		}
	]);

	await db.insert(Panels).values([
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
			storySlug: 'bea',
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
			storySlug: 'bea',
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
			storySlug: 'bea',
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
			storySlug: 'bea',
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
			storySlug: 'bea',
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
			storySlug: 'bea',
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
			storySlug: 'bea',
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
			storySlug: 'bea',
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
		// Ian's Story - Panel 1
		{
			storySlug: 'ian',
			order: 1,
			imageUrl: '/ian_panel_1.jpg',
			fullStory: '<p>Ian loves skating but wants to start a rock and roll band.</p>',
			typedCaptions: ['Ian loves skating...', 'But he really wants to start a rock and roll band.'],
		},
		{
			storySlug: 'ian',
			order: 2,
			imageUrl: '/ian_panel_2.jpg',
			fullStory: '<p>But writing a hit song is harder than landing a kickflip.</p>',
			typedCaptions: ['Writing a hit song is harder than landing a kickflip.', 'Ian’s bedroom was filled with the sounds of failure.'],
		},
		{
			storySlug: 'ian',
			order: 3,
			imageUrl: '/ian_panel_3.jpg',
			fullStory: '<p>Isabella never misses a chance to weigh in.</p>',
			typedCaptions: ['Isabella never misses a chance to weigh in.', '“You can’t just invent rock greatness, Ian.”'],
		},
		{
			storySlug: 'ian',
			order: 4,
			imageUrl: '/ian_panel_4.jpg',
			fullStory: '<p>Then a strange visitor appeared at the window.</p>',
			typedCaptions: ['Then a strange visitor appeared at the window.', 'A black cat with a look that said it knew something Ian didn’t.'],
		},
		{
			storySlug: 'ian',
			order: 5,
			imageUrl: '/ian_panel_5.jpg',
			fullStory: '<p>And suddenly, the music started to flow.</p>',
			typedCaptions: ['Every time the cat meowed, the guitar sang.', 'It was like the amp was possessed by the blues.'],
		},
		{
			storySlug: 'ian',
			order: 6,
			imageUrl: '/ian_panel_6.jpg',
			fullStory: '<p>The whole crew was here for the first jam session.</p>',
			typedCaptions: ['The cousins joined in, and the sound was incredible.', 'Bea on drums, Phin on bass, and Isa on the mic.'],
		},
		{
			storySlug: 'ian',
			order: 7,
			imageUrl: '/ian_panel_7.jpg',
			fullStory: '<p>Late night in the garage, the magic was real.</p>',
			typedCaptions: ['Late night in the garage, the magic was real.', 'They finally found their sound.'],
		},
		{
			storySlug: 'ian',
			order: 8,
			imageUrl: '/ian_panel_8.jpg',
			fullStory: '<p>The neighborhood was starting to notice.</p>',
			typedCaptions: ['The neighborhood was starting to notice.', '“Who’s playing? That’s actually good!”'],
		},
		{
			storySlug: 'ian',
			order: 9,
			imageUrl: '/ian_panel_9.jpg',
			fullStory: '<p>The Midnight Strays’ first show was legendary.</p>',
			typedCaptions: ['Their first street concert was pure magic.', 'Lights, crowd, and one very special fan on the amp.'],
		},
		{
			storySlug: 'ian',
			order: 10,
			imageUrl: '/ian_panel_10.jpg',
			fullStory: '<p>A new band was born, with a little help from a friend.</p>',
			typedCaptions: ['The Midnight Strays were officially born.', 'TO BE CONTINUED...'],
		},
		// Isabella's Story - Panel 1
		{
			storySlug: 'isa',
			order: 1,
			imageUrl: '/isa_panel_1.jpg',
			fullStory: '<p>Isabella arrives for Christmas — fresh from shredding snow and ready for adventure.</p>',
			typedCaptions: ['Isabella arrives for Christmas.', 'Fresh from shredding snow and ready for adventure.'],
		},
		{
			storySlug: 'isa',
			order: 2,
			imageUrl: '/isa_panel_2.jpg',
			fullStory: '<p>Holiday vibes: cocoa, jokes, and chaos brewing softly in the background.</p>',
			typedCaptions: ['Holiday vibes: cocoa, jokes, and chaos.', 'Something’s brewing softly in the background.'],
		},
		{
			storySlug: 'isa',
			order: 3,
			imageUrl: '/isa_panel_3.jpg',
			fullStory: '<p>Tonight — they’re going caroling. Whether the neighborhood is ready or not.</p>',
			typedCaptions: ['Tonight — they’re going caroling.', 'Whether the neighborhood is ready or not.'],
		},
		{
			storySlug: 'isa',
			order: 4,
			imageUrl: '/isa_panel_4.jpg',
			fullStory: '<p>Their voices? Questionable. Their spirit? Unstoppable.</p>',
			typedCaptions: ['Their voices? Questionable.', 'Their spirit? Unstoppable.'],
		},
		{
			storySlug: 'isa',
			order: 5,
			imageUrl: '/isa_panel_5.jpg',
			fullStory: '<p>Last stop — the dreaded house of Steven and Craig.</p>',
			typedCaptions: ['Last stop — the dreaded house of Steven and Craig.', 'The atmosphere was... gloomy.'],
		},
		{
			storySlug: 'isa',
			order: 6,
			imageUrl: '/isa_panel_6.jpg',
			fullStory: '<p>“Fa-la-la-la-la—”</p>',
			typedCaptions: ['“Fa-la-la-la-la—”'],
		},
		{
			storySlug: 'isa',
			order: 7,
			imageUrl: '/isa_panel_7.jpg',
			fullStory: '<p>Festive spirit meets produce warfare.</p>',
			typedCaptions: ['Festive spirit meets produce warfare.', '“Get off our property!”'],
		},
		{
			storySlug: 'isa',
			order: 8,
			imageUrl: '/isa_panel_8.jpg',
			fullStory: '<p>Isabella (serious): “Bea… use the Sonic Scream.”<br>Bea: “Finally.”</p>',
			typedCaptions: ['“Bea… use the Sonic Scream.”', '“Finally.”'],
		},
		{
			storySlug: 'isa',
			order: 9,
			imageUrl: '/isa_panel_9.jpg',
			fullStory: '<p>Years of choir training finally pay off.</p>',
			typedCaptions: ['Years of choir training finally pay off.', 'Windows shattered. Hearts trembled.'],
		},
		{
			storySlug: 'isa',
			order: 10,
			imageUrl: '/isa_panel_10.jpg',
			fullStory: '<p>Retreat! Retreat!<br>Craig: “Officers! The children are a menace!”</p>',
			typedCaptions: ['Retreat! Retreat!', '“Officers! The children are a menace!”'],
		},
		{
			storySlug: 'isa',
			order: 11,
			imageUrl: '/isa_panel_11.jpg',
			fullStory: '<p>Payback — delivered by feline biological warfare.</p>',
			typedCaptions: ['Payback — delivered by feline biological warfare.', 'Landscaping: Brown. Honor: Restored.'],
		},
		{
			storySlug: 'isa',
			order: 12,
			imageUrl: '/isa_panel_12.jpg',
			fullStory: '<p>Peace on Earth, goodwill to kids — after a little chaos.</p>',
			typedCaptions: ['Peace on Earth, goodwill to kids.', 'Merry Christmas.'],
		},
	]);
}
