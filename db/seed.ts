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
		},
		{
			slug: 'john',
			title: 'Midshipman Marshall & The Space Monkey',
			summary: 'The story of an unexpected visitor from the stars.',
		},
		{
			slug: 'ginny',
			title: 'Virginia & The Scarlet Letter… of Perfume',
			summary: 'A 10-Panel Romantic Comic with Monkeys, Midshipmen & Mischief.',
		},
		{
			slug: 'ruta',
			title: 'Pauls the Story Seller & Ruta the Latvian Sudoku Mom',
			summary: 'A story of puzzles, publishing, and the power of a space monkey.',
		},
		{
			slug: 'fields',
			title: 'GIGO & The Treasure Machine',
			summary: 'The grand fusion of Garbage In, Garbage Out and One man’s trash is another man’s treasure.',
		}
	]);

	await db.insert(Panels).values([
		// Pauls - Panel 1
		{
			storySlug: 'pauls',
			order: 1,
			imageUrl: '/pauls_panel_1_bald.jpg',
			fullStory: 'Paul stands in front of a chaotic classroom of yelling students, realizing it is time for a change.',
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
			fullStory: 'While Phin researches recipes online, Pauls watches with anticipation as they plan their hot sauce empire.',
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
			fullStory: 'Batch number 42 is a disaster, smelling burnt and looking like murky green sludge.',
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
			fullStory: 'Market testing goes poorly as students run away from the spicy samples with steam coming out of their ears.',
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
			fullStory: 'Late at night, Phin sleeps while Pauls stares out at the rain, feeling hopeless about their failed attempts.',
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
			fullStory: 'Under a full moon, the cats secretly add a biological catalyst to the jalapeno patch.',
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
			fullStory: 'The next morning, the peppers have grown miraculously large and are glowing with vibrant color.',
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
			fullStory: 'The new batch is perfect and addictive, launching Yellow Truck Hot Sauce to success.',
			typedCaptions: [
				'TO BE CONTINUED...'
			],
		},
		// Bea's Story - Panel 1
		{
			storySlug: 'bea',
			order: 1,
			imageUrl: '/beas_panel_1.jpg',
			fullStory: 'Bea stands confidently on the prow of a dragon boat, leading her team on the river.',
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
			fullStory: 'Bea looks at her father\'s rejected experimental hot sauces and sees them as a tactical advantage.',
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
			fullStory: 'Bea charmingly offers free samples of her special sauce to unsuspecting rival teams on the docks.',
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
			fullStory: 'Bea practices singing in a choir, focusing on building immense lung capacity.',
			typedCaptions: [
				'Sunday mornings were for choir practice.',
				'Building the ultimate vocal range.',
				'But also she is developing a secret weapon.'
			],
		},
		// Bea's Story - Panel 5
		{
			storySlug: 'bea',
			order: 5,
			imageUrl: '/beas_panel_5.jpg',
			fullStory: 'During the race, rival rowers begin to clutch their stomachs as the sauce takes effect.',
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
			fullStory: 'With one boat still close, Bea stands up in her boat, ready to unleash her secret weapon.',
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
			fullStory: 'Bea unleashes a sonic scream so powerful it physically damages the rival boat.',
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
			fullStory: 'Bea holds up the championship trophy, victorious once again thanks to her unique tactics.',
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
			fullStory: 'Phin is grounded for being late to school, which means no internet access.',
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
			fullStory: 'Phin watches angrily as his father locks the Wi-Fi router in a safe in his study.',
			typedCaptions: [
				'No WiFi. No gaming. No freedom.',
				'Phin swears quietly: He’ll get it back… one way or another.'
			],
			imagePrompt: "Study door shut tight. Sign: 'HOT SAUCE R&D — DO NOT ENTER.' Professor (middle-aged man with glasses in lab coat) inserting Wi-Fi router into a safe like it's radioactive. Phin watches from doorway, betrayed and furious."
		},
		// Phin's Story - Panel 3: The Bitter Garden
		{
			storySlug: 'phin',
			order: 3,
			imageUrl: '/phin_panel_3_garden.jpg',
			fullStory: 'Through a window, Phin sees his father despairing over small, wilted pepper plants in the backyard.',
			typedCaptions: [
				'The professor’s boutique sauce dream is failing.',
				'The peppers won’t grow… and time is running out.'
			],
			imagePrompt: "Backyard pepper patch. Plants small, wilted, pathetic. Professor kneels with soil test kit, frowning at results. Phin peers through window, realizing his father is desperate."
		},
		// Phin's Story - Panel 4: Night Research
		{
			storySlug: 'phin',
			order: 4,
			imageUrl: '/phin_panel_4_research.jpg',
			fullStory: 'Phin sneaks into the yard at night with homemade gear, watched by two black cats.',
			typedCaptions: [
				'Grounded and bored, Phin wanders outside.',
				'Curiosity blooms — something strange hums under the soil.'
			],
			imagePrompt: "Night scene. Phin sneaking into the yard with flashlight and DIY thermal monocle made from goggles and duct tape. Two black cats watch from fence with alien awareness."
		},
		// Phin's Story - Panel 5: The Accident
		{
			storySlug: 'phin',
			order: 5,
			imageUrl: '/phin_panel_5_accident.jpg',
			fullStory: 'Phin freezes in shock as he sees the soil glow and steam where the cats have peed on the peppers.',
			typedCaptions: [
				'He doesn’t invent the miracle — he witnesses it.',
				'Cat urine… interacts with the peppers.'
			],
			imagePrompt: "Cats casually peeing at base of pepper stems. Soil glows faint neon and steam rises. Phin freezes mid-step — stunned realization moment."
		},
		// Phin's Story - Panel 6: The Cat Choir Project
		{
			storySlug: 'phin',
			order: 6,
			imageUrl: '/phin_panel_6_choir.jpg',
			fullStory: 'Phin begins training the cats with diagrams and treats, and they obey with strange intelligence.',
			typedCaptions: [
				'Phin conducts experiments. The cats follow orders.',
				'Something in their eyes suggests they understand too much.'
			],
			imagePrompt: "Backyard training setup. Phin with whistle, whiteboard diagrams, cat treats as incentives. Cats arranged like soldiers or lab subjects — eerie compliance."
		},
		// Phin's Story - Panel 7: The Harvest
		{
			storySlug: 'phin',
			order: 7,
			imageUrl: '/phin_panel_7_harvest.jpg',
			fullStory: 'His father is overwhelmed by the sudden growth of giant, glowing red peppers.',
			typedCaptions: [
				'A miracle crop erupts overnight.',
				'Pauls believes it\'s luck — Phin says nothing.'
			],
			imagePrompt: "Rows of oversized glowing peppers — deep red with faint bio-luminescent veins. Professor drop-to-knees, overwhelmed. One black cat sits beside him like a witness."
		},
		// Phin's Story - Panel 8: The Empire Wakes
		{
			storySlug: 'phin',
			order: 8,
			imageUrl: '/phin_panel_8_empire.jpg',
			fullStory: 'The sauce becomes a global hit, featured on magazine covers, while Phin watches from the shadows.',
			typedCaptions: [
				'The sauce spreads worldwide.',
				'But Professor won’t return the WiFi — principle over progress.'
			],
			imagePrompt: "Magazine cover: 'THE SAUCE KING!' Factory line bottling glowing sauce. News drones hover overhead. Phin stands in shadows behind success photos."
		},
		// Phin's Story - Panel 9: Biological Strike
		{
			storySlug: 'phin',
			order: 9,
			imageUrl: '/phin_panel_9_strike.jpg',
			fullStory: 'Phin organizes a cat strike, and the peppers immediately begin to wither without their "input".',
			typedCaptions: [
				'Phin withdraws the feline workforce.',
				'The sauce pipeline collapses within days.'
			],
			imagePrompt: "Garden now guarded by cats holding tiny union-style picket signs. Phin stands defiantly with banner: NO BYTES = NO BITES. Peppers drying and greying behind him."
		},
		// Phin's Story - Panel 10: The Router Treaty
		{
			storySlug: 'phin',
			order: 10,
			imageUrl: '/phin_panel_10_treaty.jpg',
			fullStory: 'In Phin\'s high-tech room, his father surrenders, offering the router and a partnership deal.',
			typedCaptions: [
				'Cornered, Pauls surrenders.',
				'Phin gains power — not just WiFi, but the keys to the empire.'
			],
			imagePrompt: "In Phin's glowing bedroom control center — dark screens, code rain, cyberpunk lighting. Professor kneels, offering a golden router and signed contract: 'Unlimited Internet + Partnership Rights.' Cats perched like advisors."
		},
		// Peyton's Story - Panel 1
		{
			storySlug: 'peyton',
			order: 1,
			imageUrl: '/peyton_panel_1.jpg',
			fullStory: 'Peyton sits at her desk late at night, exhausted and surrounded by unwritten manuscripts.',
			typedCaptions: [
				'Peyton wanted to write a classic.',
				'All she had was caffeine and panic.'
			],
			imagePrompt: "Peyton (the woman from the reference images) at her desk night-owl style, surrounded by empty coffee mugs, half-written manuscripts everywhere, exhausted expression. Digital comic book / cartoon art style."
		},
		{
			storySlug: 'peyton',
			order: 2,
			imageUrl: '/peyton_panel_2.jpg',
			fullStory: 'Peyton rents out the other half of her duplex to help pay the bills, contrasting her tidy side with the new tenants\' chaos.',
			typedCaptions: [
				'Bills don’t wait for inspiration.',
				'So she rented out the other half of her duplex.'
			],
			imagePrompt: "Front of a duplex house. Peyton's side is tidy with flowers; Steven & Craig's side (the other half) is chaotic with rainbow lights and mismatched patio furniture. Peyton is in the foreground wearing a tool belt and holding repair invoices, looking slightly stressed. Digital comic book / cartoon art style."
		},
		{
			storySlug: 'peyton',
			order: 3,
			imageUrl: '/peyton_panel_3.jpg',
			fullStory: 'Steven and Craig move in, bringing loud and dramatic energy to the property.',
			typedCaptions: [
				'Steven and Craig moved in.',
				'Bold. Loud. Dramatic. Unfiltered.'
			],
			imagePrompt: "Two 50-year-old men, Steven and Craig, walk into Peyton's life. Steven (50) is wearing a stylish scarf and holding a tall iced coffee. Craig (50) is looking dramatic and expressive. They look like middle-aged men who have just moved in. Peyton is watching them from her porch, looking a bit overwhelmed. Digital comic book / cartoon art style."
		},
		{
			storySlug: 'peyton',
			order: 4,
			imageUrl: '/peyton_panel_4.jpg',
			fullStory: 'Peyton watches as Steven and Craig have melodramatic reactions to minor household issues.',
			typedCaptions: [
				'Every day: a new crisis.',
				'None of them real.'
			],
			imagePrompt: "Two 50-year-old men, Steven and Craig, are having a dramatic meltdown on their porch. Craig (50) is crying hysterically, pointing at the neighbor's house. Steven (50, wearing a scarf) is gasping in shock at a slightly crooked trash can. They are middle-aged men acting like toddlers. Peyton is in the background, looking exhausted and rubbing her temples. Digital comic book / cartoon art style."
		},
		{
			storySlug: 'peyton',
			order: 5,
			imageUrl: '/peyton_panel_5.jpg',
			fullStory: 'Peyton observes her cats mischievously using Steven\'s laundry basket as a litter box.',
			typedCaptions: [
				'Her cats adored Steven’s laundry basket.',
				'Possibly too much.'
			],
			imagePrompt: "Peyton's two black cats are in the backyard. They are standing over Steven's laundry basket (which is near a shared fence) and are explicitly peeing into the basket of clothes. In the background, Peyton is peeking over the fence with a mischievous smirk. IMPORTANT: Peyton must look exactly like the woman in the reference images (peyton.jpg), youthful, attractive, and pretty. DO NOT include any speech bubbles or text boxes in the image. Digital comic book / cartoon art style."
		},
		{
			storySlug: 'peyton',
			order: 6,
			imageUrl: '/peyton_panel_6.jpg',
			fullStory: 'Steven and Craig are baffled by the smell of their clothes, while Peyton keeps the secret.',
			typedCaptions: [
				'They never figured it out.',
				'Cat-pee mystery season: ongoing.'
			],
			imagePrompt: "Steven (50) is sniffing a shirt from his laundry basket with a look of extreme horror and disgust. Next to him, Craig (50) is frantically spraying four different bottles of cologne into the air, creating a cloud of mist. Peyton is in the background with a subtle, knowing smirk. IMPORTANT: Peyton must look like the woman in the reference images (youthful/pretty). NO SPEECH BUBBLES OR TEXT BOXES. Digital comic book / cartoon art style."
		},
		{
			storySlug: 'peyton',
			order: 7,
			imageUrl: '/peyton_panel_7.jpg',
			fullStory: 'Peyton laughs as she talks to her brother, deciding to publish a book about her tenants.',
			typedCaptions: [
				'Her brother said, “You should publish this.”',
				'She didn’t hesitate.'
			],
			imagePrompt: "Peyton is sitting on her sofa, laughing heartily into her smartphone. She is alone in the room, enjoying the conversation. IMPORTANT: Peyton's face must have a highly realistic likeness to the woman in the reference images (peyton.jpg), capturing her specific facial features, eyes, and smile while keeping her pretty. DO NOT include any other people, phone bubbles, or photos of other characters. NO SPEECH BUBBLES. Digital comic book / cartoon art style with high portrait detail."
		},
		{
			storySlug: 'peyton',
			order: 8,
			imageUrl: '/peyton_panel_8.jpg',
			fullStory: 'Peyton designs a book cover on her laptop titled "Things No One Asked Them To Say".',
			typedCaptions: [
				'So she made a book of their stupidest phrases.',
				'Anonymous. Completely untraceable.'
			],
			imagePrompt: "Peyton is at her laptop, designing a book cover. The title on the screen is 'Things No One Asked Them To Say'. Her face is seen in profile or three-quarter view, showing a realistic and pretty likeness to the reference photos. Her two black cats are on the desk with her. NO SPEECH BUBBLES. Digital comic book / cartoon art style with detailed facial features."
		},
		{
			storySlug: 'peyton',
			order: 9,
			imageUrl: '/peyton_panel_9.jpg',
			fullStory: 'Peyton signs books at a bookstore, smiling at fans as her book becomes a hit.',
			typedCaptions: [
				'It blew up.',
				'Apparently, nonsense is delightful.'
			],
			imagePrompt: "Peyton is at a bookstore signing event, smiling warmly at a fan. Her face captures the realistic and attractive features from the reference images. Fans are in the background. A person holds a phone showing a viral video. NO SPEECH BUBBLES. Digital comic book / cartoon art style with realistic character likeness."
		},
		{
			storySlug: 'peyton',
			order: 10,
			imageUrl: '/peyton_panel_10.jpg',
			fullStory: 'A billboard celebrates Peyton\'s success above the street where Steven and Craig walk, still oblivious.',
			typedCaptions: [
				'Steven & Craig still complain.',
				'Still dramatic. Still confused why they smell funny.',
				'Still unknowingly paying her mortgage — twice.'
			],
			imagePrompt: "A large city billboard features a beautiful, realistic portrait of Peyton (based on her reference photos) with the text 'INTERNATIONAL HIT AUTHOR!'. On the street below, the two 50-year-old men, Steven and Craig, are walking past a laundry basket, looking confused. Peyton's cats are smirking from a nearby window. Near the bottom corner of the image, the text 'TO BE CONTINUED...' is written in a classic comic book style font. NO SPEECH BUBBLES. Digital comic book / cartoon art style."
		},
		// Ian's Story - Panel 1
		{
			storySlug: 'ian',
			order: 1,
			imageUrl: '/ian_panel_1.jpg',
			fullStory: 'Ian skates down the street but dreams of being a rock star.',
			typedCaptions: ['Ian loves skating...', 'But he really wants to start a rock and roll band.'],
			imagePrompt: "Ian is skating down a suburban street on a skateboard. He has a backpack covered in punk rock band stickers and is wearing large over-ear headphones. He looks focused and cool. Ian must look exactly like the boy in the reference image (ian.jpg)."
		},
		{
			storySlug: 'ian',
			order: 2,
			imageUrl: '/ian_panel_2.jpg',
			fullStory: 'Ian struggles to write songs in his messy bedroom, feeling frustrated.',
			typedCaptions: ['Writing a hit song is harder than landing a kickflip.', 'Ian’s bedroom was filled with the sounds of failure.'],
			imagePrompt: "Ian is in his bedroom, sitting on the edge of his bed with an electric guitar. He looks frustrated, with his head in one hand and a pen in the other. The floor is covered in crumpled-up lyric sheets. Ian looks like his reference image."
		},
		{
			storySlug: 'ian',
			order: 3,
			imageUrl: '/ian_panel_3.jpg',
			fullStory: 'Isabella teases Ian about his lack of progress from the doorway.',
			typedCaptions: ['Isabella never misses a chance to weigh in.', '“You can’t just invent rock greatness, Ian.”'],
			imagePrompt: "Ian is sitting on his bed looking annoyed. His sister Isabella is standing in the bedroom doorway, leaning against the frame with a smirk, teasing him. Isabella is a very pretty, slender girl, with a highly realistic likeness to her reference images. In the bedroom, there is a glowing fish tank with colorful fish on a desk or stand. IMPORTANT: NO SPEECH BUBBLES or text of any kind."
		},
		{
			storySlug: 'ian',
			order: 4,
			imageUrl: '/ian_panel_4.jpg',
			fullStory: 'A mysterious black cat appears on Ian\'s windowsill, staring at him intently.',
			typedCaptions: ['Then a strange visitor appeared at the window.', 'A black cat with a look that said it knew something Ian didn’t.'],
			imagePrompt: "Ian is looking at the window of his bedroom. A sleek black cat (matching the blackcat.jpg reference) has appeared on the windowsill, staring at him with knowing, mysterious eyes. Ian looks surprised."
		},
		{
			storySlug: 'ian',
			order: 5,
			imageUrl: '/ian_panel_5.jpg',
			fullStory: 'As the cat sits on the amp, Ian starts playing and the music becomes magical.',
			typedCaptions: ['Every time the cat meowed, the guitar sang.', 'It was like the amp was possessed by the blues.'],
			imagePrompt: "The black cat is now sitting on top of Ian's guitar amplifier. Ian is playing his guitar, looking amazed. A magical glow emanates from the guitar strings as he plays. IMPORTANT: NO SPEECH BUBBLES or text boxes."
		},
		{
			storySlug: 'ian',
			order: 6,
			imageUrl: '/ian_panel_6.jpg',
			fullStory: 'Ian\'s cousins join in for a jam session, creating an incredible sound.',
			typedCaptions: ['The cousins joined in, and the sound was incredible.', 'Bea on drums, Phin on bass, and Isa on the mic.'],
			imagePrompt: "Ian's bedroom is now a full jam session. His cousin Bea is on drums (looking like bea.jpg) and his cousin Phin is on bass guitar (looking like phin.jpg). They are all playing together with high energy. Ian is the lead guitarist. IMPORTANT: NO SPEECH BUBBLES or text boxes."
		},
		{
			storySlug: 'ian',
			order: 7,
			imageUrl: '/ian_panel_7.jpg',
			fullStory: 'The band rehearses in the garage, finally finding their unique sound.',
			typedCaptions: ['Late night in the garage, the magic was real.', 'They finally found their sound.'],
			imagePrompt: "The full band is rehearsing in a suburban garage at night. Ian is on lead guitar, Bea is on drums, Phin is on bass, and Isabella is singing at the microphone. The garage door is open, and they look tight and professional. The black cat is watching from the workbench. IMPORTANT: NO SPEECH BUBBLES."
		},
		{
			storySlug: 'ian',
			order: 8,
			imageUrl: '/ian_panel_8.jpg',
			fullStory: 'Neighbors gather outside the garage, amazed by the music coming from inside.',
			typedCaptions: ['The neighborhood was starting to notice.', '“Who’s playing? That’s actually good!”'],
			imagePrompt: "A group of neighborhood kids and teenagers have gathered in the driveway, looking into the open garage with amazement. Inside the garage, the full band (Ian, Isabella, Bea, and Phin) is seen playing with high energy. The music feels electric. One kid is recording on a phone. IMPORTANT: NO SPEECH BUBBLES."
		},
		{
			storySlug: 'ian',
			order: 9,
			imageUrl: '/ian_panel_9.jpg',
			fullStory: 'The Midnight Strays perform an epic street concert with the cat watching from the amp.',
			typedCaptions: ['Their first street concert was pure magic.', 'Lights, crowd, and one very special fan on the amp.'],
			imagePrompt: "The band (Ian on guitar, Isabella singing, Bea on drums, Phin on bass) is performing a huge street concert. Fairy lights are strung across the driveway. The black cat is curled on the amp with a glowing tail. The crowd is cheering. Ian looks triumphant. IMPORTANT: NO SPEECH BUBBLES."
		},
		{
			storySlug: 'ian',
			order: 10,
			imageUrl: '/ian_panel_10.jpg',
			fullStory: 'The band is officially formed, solidified by a cool poster on the wall.',
			typedCaptions: ['The Midnight Strays were officially born.', 'TO BE CONTINUED...'],
			imagePrompt: "A close-up of a rock band poster on a wall. The poster features a cool illustration of the four of them: Ian, Isabella, Bea, and Phin, with the text 'THE MIDNIGHT STRAYS'. There is a black cat pawprint logo. Ian's hand is seen pinning the poster. 'TO BE CONTINUED...' in the corner. IMPORTANT: NO SPEECH BUBBLES."
		},
		// Isabella's Story - Panel 1
		{
			storySlug: 'isa',
			order: 1,
			imageUrl: '/isa_panel_1.jpg',
			fullStory: 'Isabella arrives for Christmas, fresh from a snowboarding trip, greeted by her cousins.',
			typedCaptions: ['Isabella arrives for Christmas.', 'Fresh from shredding snow and ready for adventure.'],
			imagePrompt: "Isabella rides off a bus or SUV, snowboard strapped to her back. Snow-covered mountains in the distance (Oregon/California style). Ian, Phin, and Bea are waving excitedly at her. Isabella is pretty and slender. "
		},
		{
			storySlug: 'isa',
			order: 2,
			imageUrl: '/isa_panel_2.jpg',
			fullStory: 'The cousins hang out in a cozy living room, enjoying cocoa and each other\'s company. ',
			typedCaptions: ['Holiday vibes: cocoa, jokes, and chaos.', 'Something’s brewing softly in the background.'],
			imagePrompt: "A cozy living room with a fireplace. Isabella, Ian, Phin, and Bea are gathered around with hot cocoa. Isabella is showing them a snowboarding video on her phone. Bea is practicing choir warmups. Phin is quietly petting the black cat. "
		},
		{
			storySlug: 'isa',
			order: 3,
			imageUrl: '/isa_panel_3.jpg',
			fullStory: 'The group bundles up in winter gear, ready to go caroling with mischievous intent.',
			typedCaptions: ['Tonight — they’re going caroling.', 'Whether the neighborhood is ready or not.'],
			imagePrompt: "The four cousins (Ian, Phin, Bea, and Isabella) are in a mudroom or hallway bundling up in thick winter gear. Isabella is playfully 'sharpening' a large candy cane with a knife as if it were a sword, looking mischievously at the camera. Peyton might be in the background. IMPORTANT: STEVEN AND CRAIG MUST NOT BE IN THIS IMAGE. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'isa',
			order: 4,
			imageUrl: '/isa_panel_4.jpg',
			fullStory: 'They sing loudly and enthusiastically on a porch, delighting an elderly neighbor.',
			typedCaptions: ['Their voices? Questionable.', 'Their spirit? Unstoppable.'],
			imagePrompt: "The group (Ian, Phin, Bea, and Isabella) is standing on a snowy porch under a light, singing with great enthusiasm. Their mouths are wide open. An elderly woman in the doorway is crying happy tears. IMPORTANT: STEVEN AND CRAIG MUST NOT BE IN THIS IMAGE. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'isa',
			order: 5,
			imageUrl: '/isa_panel_5.jpg',
			fullStory: 'They arrive at the gloomy house of Steven and Craig, their final and most difficult stop.',
			typedCaptions: ['Last stop — the dreaded house of Steven and Craig.', 'The atmosphere was... gloomy.'],
			imagePrompt: "The four cousins, Isabella (isa.jpg), Ian (ian.jpg), Phin (phin.jpg), and Bea (bea.jpg), are standing in front of the house of Steven and Craig. The house is a blue-grey suburban house with white trim and a front porch (matching the house in panel 7), but it looks gloomy with dead Christmas lights. A mailbox in the foreground clearly says 'STEVEN & CRAIG'. The black cat (blackcat.jpg) is in the foreground hissing at the house. "
		},
		{
			storySlug: 'isa',
			order: 6,
			imageUrl: '/isa_panel_6.jpg',
			fullStory: 'The cousins sing "Deck the Halls" on the porch, trying to be festive despite the tension.',
			typedCaptions: ['“Fa-la-la-la-la—”'],
			imagePrompt: "A group of exactly four people: Isabella (isa.jpg), Ian (ian.jpg), Phin (phin.jpg), and Bea (bea.jpg) are on the front porch of the blue-grey suburban house with white trim (matching panel 7). They are singing 'Deck The Halls' in the winter moonlight, holding songbooks. Their expressions are hopeful but forced. They must look exactly like their reference images. IMPORTANT: STEVEN AND CRAIG MUST NOT BE IN THIS IMAGE. ONLY THE FOUR COUSINS. "
		},
		{
			storySlug: 'isa',
			order: 7,
			imageUrl: '/isa_panel_7.jpg',
			fullStory: 'Steven and Craig throw rotten vegetables at the singing kids from a window.',
			typedCaptions: ['Festive spirit meets produce warfare.', '“Get off our property!”'],
			imagePrompt: "A window on the gloomy house bursts open as Steven and Craig (stevenAndCraig.jpg) throw rotten tomatoes, lettuce, and old vegetables at the kids. Isabella (isa.jpg), Ian (ian.jpg), Phin (phin.jpg), and Bea (bea.jpg) are on the porch, ducking and yelling in surprise. The scene is chaotic and messy. "
		},
		{
			storySlug: 'isa',
			order: 8,
			imageUrl: '/isa_panel_8.jpg',
			fullStory: 'Isabella instructs Bea to use her secret weapon: the sonic scream.',
			typedCaptions: ['“Bea… use the Sonic Scream.”', '“Finally.”'],
			imagePrompt: "A close-up of the cousins. Isabella (isa.jpg) has a red tomato splat dripping off her winter coat; she looks intense and serious as she calls the play. Bea (bea.jpg) is cracking her knuckles with a determined look. Ian (ian.jpg) gasps dramatically in the background. Phin (phin.jpg) is also present. "
		},
		{
			storySlug: 'isa',
			order: 9,
			imageUrl: '/isa_panel_9.jpg',
			fullStory: 'Bea unleashes a massive sonic scream that shatters the windows of the house.',
			typedCaptions: ['Years of choir training finally pay off.', 'Windows shattered. Hearts trembled.'],
			imagePrompt: "Bea (the girl from bea.jpg) is in the center foreground, screaming with massive power (Sonic Scream). Visual soundwaves distort the air around her. She has brown/dark hair (matching bea.jpg). Isabella (the girl from isa.jpg, blonde/lighter hair) is standing BEHIND Bea, covering her ears in shock. Ian (ian.jpg) and Phin (phin.jpg) are also covering their ears. The windows of the blue-grey house are shattering. IMPORTANT: BEA IS SCREAMING. ISABELLA IS WATCHING. DO NOT SWAP THEM. "
		},
		{
			storySlug: 'isa',
			order: 10,
			imageUrl: '/isa_panel_10.jpg',
			fullStory: 'The kids run away laughing as Steven and Craig call the police from their damaged house.',
			typedCaptions: ['Retreat! Retreat!', '“Officers! The children are a menace!”'],
			imagePrompt: "Inside the blue-grey house, Steven and Craig (stevenAndCraig.jpg) are on the phone, yelling frantically. Through the window, the four kids (Isabella, Ian, Phin, and Bea) can be seen running away into the snowy night, laughing hysterically. Faint blue and red police lights are visible in the distance. "
		},
		{
			storySlug: 'isa',
			order: 11,
			imageUrl: '/isa_panel_11.jpg',
			fullStory: 'The black cats finish the job by ruining the landscaping with their "magical" urine.',
			typedCaptions: ['Payback — delivered by feline biological warfare.', 'Landscaping: Brown. Honor: Restored.'],
			imagePrompt: "Two black cats (blackcat.jpg) are sneaking into the front yard of the blue-grey suburban house (matching panel 7) at night. Their tails are glowing with a faint magical gold light. They are urinating on the plants and bushes, which are instantly wilting and turning brown. "
		},
		{
			storySlug: 'isa',
			order: 12,
			imageUrl: '/isa_panel_12.jpg',
			fullStory: 'The whole family celebrates as Steven and Craig sheepishly deliver cookies and rent money.',
			typedCaptions: ['Peace on Earth, goodwill to kids.', 'Merry Christmas.'],
			imagePrompt: "Steven and Craig (stevenAndCraig.jpg) are standing on Peyton's porch, looking humbled and apologetic. They are holding a tray of holiday cookies and an envelope (overdue rent check). Aunt Peyton (peyton.jpg) is standing at the door, pretty and smiling. In the background, the four cousins, Isabella (isa.jpg), Ian (ian.jpg), Phin (phin.jpg), and Bea (bea.jpg), are grinning triumphantly. "
		},
		// John's Story - Panel 1
		{
			storySlug: 'john',
			order: 1,
			imageUrl: '/john_panel_1.jpg',
			fullStory: 'Midshipman Marshall is seen on the deck of a naval destroyer, looking out at the endless ocean.',
			typedCaptions: ['Midshipman Marshall thought it would be an ordinary patrol.', 'He’d soon be wrong.'],
			imagePrompt: "Midshipman Marshall (use john.jpg and john2.jpg, young Navy officer in uniform) stands on the deck of a Navy vessel, looking out at an endless blue ocean. The sun is shining, and the scene is calm but cinematic. Realistic comic style. IMPORTANT: NO MONKEY IN THIS SCENE. Marshall is alone on deck."
		},
		{
			storySlug: 'john',
			order: 2,
			imageUrl: '/john_panel_2.jpg',
			fullStory: 'Another naval officer reports to John that there is a UFO descending fast from orbit.',
			typedCaptions: ['Officer: "Object descending fast from orbit!"', 'Not enemy aircraft. Not a storm. Something stranger…'],
			imagePrompt: "Inside the ship's radar room. Screens are flashing red warnings. Officers are huddled around a console, looking confused and urgent. Marshall is in the background or foreground peering upward intently through binoculars. High tension. IMPORTANT: NO MONKEY IN THIS SCENE. The monkey has not arrived yet."
		},
		{
			storySlug: 'john',
			order: 3,
			imageUrl: '/john_panel_3.jpg',
			fullStory: 'A flaming space capsule streaks through the atmosphere, with a parachute blooming as it falls toward the sea.',
			imagePrompt: "Interior shot of a space capsule during reentry. A small space monkey in a silver suit is strapped into a seat, looking wide-eyed and alone. Through the porthole window, the blue sky and clouds are spinning. Cinematic lighting. IMPORTANT: NO HUMANS. Just the monkey. "
		},
		{
			storySlug: 'john',
			order: 4,
			imageUrl: '/john_panel_4.jpg',
			fullStory: 'Sailors in a rescue boat open the capsule hatch to find a frantic space monkey inside in a tiny silver suit.',
			typedCaptions: ['The crew cheers...', 'Until the monkey starts screaming.'],
			imagePrompt: "Sailors in a small rescue boat have secured the capsule bobbing in the water. Marshall has cracked the hatch open. Inside, a space monkey in a tiny silver suit is visible, looking frantic and baring its teeth. Marshall looks surprised."
		},
		{
			storySlug: 'john',
			order: 5,
			imageUrl: '/john_panel_5.jpg',
			fullStory: 'The monkey thrashes and screeches on the deck, terrified and confused, while Marshall approaches calmly.',
			typedCaptions: ['The crew can’t calm him.', 'He’s terrified. Lost. Far from home.'],
			imagePrompt: "On the deck of the ship. The monkey is out of the capsule, thrashing and screeching in his silver space suit. A clear nametag on the suit reads 'FIELDING'. Marshall (john.jpg) is kneeling in the foreground, slowly reaching into his bag with a calm expression. "
		},
		{
			storySlug: 'john',
			order: 6,
			imageUrl: '/john_panel_6.jpg',
			fullStory: 'Marshall gently offers a banana to the monkey, who freezes, sniffs it, and looks at him with curiosity.',
			typedCaptions: ['Only one thing works — bananas.', 'Sailor: "Did he really pack bananas?"'],
			imagePrompt: "Close up. Marshall gently offers a yellow banana to the monkey. The monkey, wearing a silver suit with a nametag 'FIELDING', has frozen. He is sniffing the air, expression changing from fear to curiosity. He clings to Marshall's arm. Marshall looks kind and reassuring. "
		},
		{
			storySlug: 'john',
			order: 7,
			imageUrl: '/john_panel_7.jpg',
			fullStory: 'Marshall and the monkey sit side-by-side on the deck at sunset, sharing a quiet moment as the monkey eats the banana.',
			typedCaptions: ['They sit side-by-side — sailor and space traveler.', 'Both far from home, suddenly less alone.'],
			imagePrompt: "Sunset on the deck of the ship. Marshall (john.jpg) and the monkey (now wrapped in a blanket, silver suit visible underneath with nametag 'FIELDING') are sitting side-by-side against a railing. The monkey is happily eating the banana. Marshall is smiling at the horizon. Warm, emotional lighting. "
		},
		{
			storySlug: 'john',
			order: 8,
			imageUrl: '/john_panel_8.jpg',
			fullStory: 'As a helicopter arrives to take the monkey, Fielding salutes Marshall, who salutes back with a banana peel at his feet.',
			typedCaptions: ['The mission was over.', 'Marshall: "If I ever have a son, I am going to call him Fielding."'],
			imagePrompt: "A helicopter has arrived to take the monkey. The monkey (Fielding), in his silver suit with nametag 'FIELDING', is looking back, saluting with a tiny hand while clutching a mission patch. Marshall (john.jpg) stands on deck saluting back. A banana peel is left on the deck near Marshall's feet. Poignant farewell. "
		},
		// Ginny's Story - Panel 1
		{
			storySlug: 'ginny',
			order: 1,
			imageUrl: '/ginny_panel_1.jpg',
			fullStory: 'Virginia had a crush — the respectable Midshipman Marshall, hero of the Space Monkey rescue.',
			typedCaptions: [
				'Virginia had a crush.',
				'The respectable Midshipman Marshall, hero of the Space Monkey rescue.'
			],
			imagePrompt: "Virginia (ginny.jpg) sits at her desk with a dreamy expression, quill in hand, doodling 'JM' in the margins of a notebook. She is a woman in her 20s. The setting is light historical with era-drama flair.  "
		},
		// Ginny's Story - Panel 2
		{
			storySlug: 'ginny',
			order: 2,
			imageUrl: '/ginny_panel_2.jpg',
			fullStory: 'Brooke advises Virginia from her bed, suggesting she be more mysterious and sophisticated.',
			typedCaptions: [
				'Brooke: "Don’t be too nice. Boys love mystery."',
				'Virginia: "But I like him."',
				'Brooke: "Exactly the problem."'
			],
			imagePrompt: "Brooke (a friend, woman in her 20s, stylish and confident) is sprawled on a bed, painting her nails. She is looking at Virginia with an encouraging smirk. Virginia (ginny.jpg) is sitting nearby. Brooke is gesturing as if giving bold advice, encouraging the perfumed letter plan. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ginny',
			order: 3,
			imageUrl: '/ginny_panel_3.jpg',
			fullStory: 'Inspired by old literature, Virginia crafts a scarlet invitation — sealed with perfume and her new-found courage.',
			typedCaptions: [
				'Inspired by old literature, she crafts a scarlet invitation.',
				'Sealed with perfume and courage.'
			],
			imagePrompt: "Virginia (ginny.jpg) holds a piece of fancy red stationery next to a perfume bottle. She looks determined. She is writing elegantly on the red paper. Close up on her hands and the letter. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ginny',
			order: 4,
			imageUrl: '/ginny_panel_4.jpg',
			fullStory: 'Heart racing with a mix of regret and hope, Virginia delivers the perfumed red letter to Midshipman Marshall.',
			typedCaptions: [
				'She sends it — heart racing, regretting and hoping all at once.'
			],
			imagePrompt: "Virginia (ginny.jpg) slides the red letter with a wax seal into a naval inbox. She looks nervous but excited. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ginny',
			order: 5,
			imageUrl: '/ginny_panel_5.jpg',
			fullStory: 'Meanwhile, Marshall is busy preparing for another meeting with his new friend, Fielding the Space Monkey.',
			typedCaptions: [
				'Marshall had other plans — a lesson with Fielding the monkey.',
				'Now learning ASL one banana at a time.'
			],
			imagePrompt: "Transition panel. The text 'MEANWHILE...' is written in a classic comic font in a small box. Midshipman Marshall (john.jpg, john2.jpg) is packing a bag with bananas and flashcards. He looks happy and focused. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ginny',
			order: 6,
			imageUrl: '/ginny_panel_6.jpg',
			fullStory: 'The perfumed letter arrives, causing quite a stir among the curious sailors and a blushing Midshipman Marshall.',
			typedCaptions: [
				'Sailor: “Ooooh, someone’s admired!”',
				'Marshall: “It smells like roses… and decisions.”'
			],
			imagePrompt: "Midshipman Marshall (john.jpg) holds the red, perfumed letter. Pink hearts or scent lines faintly rise from it. A sailor in the background is whistling teasingly. Marshall is blushing. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ginny',
			order: 7,
			imageUrl: '/ginny_panel_7.jpg',
			fullStory: 'Marshall faces a tough choice: his duty and the monkey, or a night of romance at the Winter Ball.',
			typedCaptions: [
				'“Fielding can learn ‘banana’ tomorrow. Tonight… I’ll learn ‘romance.’”'
			],
			imagePrompt: "Marshall (john.jpg) stares at a wall calendar where 'TONIGHT!' is written on the date for the Winter Ball. He puts down the bag of bananas thoughtfully. He is smiling and adjusting his uniform collar in a mirror. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ginny',
			order: 8,
			imageUrl: '/ginny_panel_8.jpg',
			fullStory: 'Virginia glows with happiness as Marshall greets her at the Winter Ball with a formal naval bow.',
			typedCaptions: [
				'Marshall: “Your letter was… unforgettable.”',
				'Virginia: “I hoped so.”'
			],
			imagePrompt: "A beautiful winter ball entrance with snow falling outside. Marshall (john.jpg) in full dress uniform greets Virginia (ginny.jpg), who looks stunning in a formal dress. He bows to her. They are smiling. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ginny',
			order: 9,
			imageUrl: '/ginny_panel_9.jpg',
			fullStory: 'The pair connect deeply while dancing, sharing stories of space monkeys and brave rescues.',
			typedCaptions: [
				'She loved his bravery. He loved her kindness.',
				'And both loved the monkey story.'
			],
			imagePrompt: "Marshall (john.jpg) and Virginia (ginny.jpg) are dancing together. Marshall is talking animatedly, and Virginia is laughing with admiration. Romantic atmosphere. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ginny',
			order: 10,
			imageUrl: '/ginny_panel_10.jpg',
			fullStory: 'Under the glow of lanterns, the dance leads to new possibilities and a unique chaperone.',
			typedCaptions: [
				'Virginia: “I’d like to meet Fielding someday.”',
				'Marshall: “He’d like you. He trusts good people.”',
				'The scarlet letter led not to shame — but to possibility.'
			],
			imagePrompt: "Walking home under lanterns after the dance. Virginia (ginny.jpg) holds a banana that Marshall brought. In the background, a silhouette of Fielding the space monkey sits on a fence, watching them like a chaperone. Marshall and Virginia look happy. NO SPEECH BUBBLES. "
		},
		// Ruta's Story - Panel 1
		{
			storySlug: 'ruta',
			order: 1,
			imageUrl: '/ruta_panel_1.jpg',
			fullStory: 'Ruta solved puzzles. Pauls solved stories. Their house hummed with quiet creation.',
			typedCaptions: [
				'Ruta solved puzzles.',
				'Pauls solved stories.',
				'Their house hummed with quiet creation.'
			],
			imagePrompt: "Kitchen table at night. Ruta (ruta2.jpg, depict her much younger, in her 30s, mid-length hair) sits solving a puzzle grid with a coffee. Pauls (depict as a 10-year-old boy, facial structure and eyes of pauls2.jpg, NORMAL BROWN HAIR) is sitting across from her, drawing intensely in a notebook. On the wall in the background, a small Latvian flag. Nostalgic family home setting. NO SPEECH BUBBLES. "
		},
		// Ruta's Story - Panel 2
		{
			storySlug: 'ruta',
			order: 2,
			imageUrl: '/ruta_panel_2.jpg',
			fullStory: 'Pauls announces his plan to sell his newly written manuscript, "Midshipman Marshall & The Space Monkey."',
			typedCaptions: [
				'Pauls: “I’m gonna sell it.”',
				'Ruta: “Why not? Boldness is good.”'
			],
			imagePrompt: "Interior shot. Pauls (10-year-old boy, pauls2.jpg facial structure, NORMAL BROWN HAIR) proudly holds up a handmade booklet. On the cover, the title 'Midshipman Marshall and his monkey Fielding' is clearly written in charming kid-like handwriting, alongside a drawing of a rocket and monkey. Ruta (ruta2.jpg, younger version) is looking at him with a supportive, bold expression. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ruta',
			order: 3,
			imageUrl: '/ruta_panel_3.jpg',
			fullStory: 'Long drives were their brainstorming studio. Ruta drove while Pauls narrated grand adventures.',
			typedCaptions: [
				'Long drives were their brainstorming studio.'
			],
			imagePrompt: "Scenic back roads. Ruta (younger, ruta2.jpg) is driving an older car. Pauls (age 10, pauls2.jpg structure, NORMAL BROWN HAIR) in the passenger seat narrated ideas. Ruta stops at a turnout, looking at a paper puzzle. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ruta',
			order: 4,
			imageUrl: '/ruta_panel_4.jpg',
			fullStory: 'The kitchen became a publishing house. Pauls made the books, and Ruta conquered her puzzles.',
			typedCaptions: [
				'He made copies. She cracked puzzles.',
				'A good pair.'
			],
			imagePrompt: "Kitchen table covered in stacks of paper. Pauls (age 10, NORMAL BROWN HAIR) is busy making 'books'. Ruta (ruta2.jpg, younger) flips a completed puzzle page triumphantly. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ruta',
			order: 5,
			imageUrl: '/ruta_panel_5.jpg',
			fullStory: 'First try — no sale. A plot twist.',
			typedCaptions: [
				'First try — no sale.',
				'A plot twist.'
			],
			imagePrompt: "Suburban street. Pauls (age 10, NORMAL BROWN HAIR) knocks on a front door. Neighbor is shaking their head. Ruta (ruta2.jpg, younger) stands behind him, giving a thumbs-up. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ruta',
			order: 6,
			imageUrl: '/ruta_panel_6.jpg',
			fullStory: 'A hero is made — one dollar at a time.',
			typedCaptions: [
				'A hero is made — one dollar at a time.'
			],
			imagePrompt: "Another house. Pauls (age 10, NORMAL BROWN HAIR) is speaking confidently. A neighbor laughs and buys a book. Pauls looks like a hero. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ruta',
			order: 7,
			imageUrl: '/ruta_panel_7.jpg',
			fullStory: 'Soon half the street met Midshipman Marshall.',
			typedCaptions: [
				'Soon half the street met Midshipman Marshall.'
			],
			imagePrompt: "Sidewalk street booth. A sign on the booth says 'STORIES $1'. Other kids are reading illustrated booklets where the title 'Midshipman Marshall and his monkey Fielding' is visible on the covers. Ruta (ruta2.jpg, younger) is sitting in a folding chair solving a puzzle. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ruta',
			order: 8,
			imageUrl: '/ruta_panel_8.jpg',
			fullStory: 'Success feels like fresh air, ja?',
			typedCaptions: [
				'Success feels like fresh air, ja?',
				'I’m writing Book Two.'
			],
			imagePrompt: "Interior of the car at sunset. Pauls (age 10, NORMAL BROWN HAIR) is counting coins. Ruta (ruta2.jpg, younger) is humming while driving. Warm sunset glow. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ruta',
			order: 9,
			imageUrl: '/ruta_panel_9.jpg',
			fullStory: 'All puzzles get solved. You’ll see.',
			typedCaptions: [
				'Pauls: “Stuck?”',
				'Ruta: “All puzzles get solved. You’ll see.”'
			],
			imagePrompt: "Back home at night. Pauls (age 10, NORMAL BROWN HAIR) sketching monkeys. Ruta (ruta2.jpg, younger) tackling a puzzle with a pencil in her mouth. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'ruta',
			order: 10,
			imageUrl: '/ruta_panel_10.jpg',
			fullStory: 'Together — they build stories piece by piece, mile by mile.',
			typedCaptions: [
				'She solves numbers. He solves words.',
				'Together — they build stories piece by piece, mile by mile.'
			],
			imagePrompt: "Wide shot. Ruta (ruta2.jpg, younger) fills in the last square. Pauls (age 10, NORMAL BROWN HAIR) finished his story. They share a knowing, proud smile. NO SPEECH BUBBLES. "
		},
		// Fields - Panel 1
		{
			storySlug: 'fields',
			order: 1,
			imageUrl: '/fields_panel_1.jpg',
			fullStory: 'Fields was a programmer. A good one. Maybe too good.',
			typedCaptions: [
				'Fields was a programmer.',
				'A good one.',
				'Maybe too good.'
			],
			imagePrompt: "Fields (fields.jpg, depict him with less hair, noticeably balding, wearing a casual shirt with 'ROGUE RIVER' written on it) sits in a dark room illuminated by the glow of three large computer monitors. Peyton (peyton2.jpg) and Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) are peeking over his shoulders, looking starstruck. NO SPEECH BUBBLES. "
		},
		// Fields - Panel 2
		{
			storySlug: 'fields',
			order: 2,
			imageUrl: '/fields_panel_2.jpg',
			fullStory: 'Computers don’t care — feed them trash, they output trash.',
			typedCaptions: [
				'Fields: “Computers don’t care — feed them trash, they output trash.”',
				'Pauls: “And we get rich… how?”'
			],
			imagePrompt: "Fields (fields.jpg, balding hair, wearing his 'ROGUE RIVER' shirt) stands in front of a whiteboard holding a marker. On the whiteboard: 'GIGO = Garbage In -> Garbage Out'. Both Peyton (peyton2.jpg) and Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) are standing together, listening intently. Peyton looks confused, while Pauls looks ambitious. NO SPEECH BUBBLES. "
		},
		// Fields - Panel 3
		{
			storySlug: 'fields',
			order: 3,
			imageUrl: '/fields_panel_3.jpg',
			fullStory: 'Then Fields broke the rules of capitalism itself: One Man’s Trash is Another Man’s Treasure.',
			typedCaptions: [
				'Fields: “Unless… you market the garbage as treasure.”',
				'Peyton discovered gold.'
			],
			imagePrompt: "Fields (fields.jpg, balding, 'ROGUE RIVER' shirt) flips the whiteboard. The other side says: 'One Man’s Trash is Another Man’s Treasure'. Peyton (peyton2.jpg) gasps in realization. Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) watches intently. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'fields',
			order: 4,
			imageUrl: '/fields_panel_4.jpg',
			fullStory: 'Old stories are free. Public domain. Legal. Ripe.',
			typedCaptions: [
				'Fields: “Old stories are free. Public domain. Legal. Ripe.”',
				'Pauls: “So we… steal them?”',
				'Fields: “NO. We repackage creatively.”'
			],
			imagePrompt: "Inside a library. Fields (fields.jpg, balding, 'ROGUE RIVER' shirt) holds a scanner over a pile of old, dusty classic books. Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) is watching with a curious expression. NO TEXT except on the books. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'fields',
			order: 5,
			imageUrl: '/fields_panel_5.jpg',
			fullStory: 'GIGO in. Treasure out.',
			typedCaptions: [
				'GIGO in.',
				'Treasure out.'
			],
			imagePrompt: "Fields (fields.jpg, balding, 'ROGUE RIVER' shirt) is typing rapidly. Peyton (peyton2.jpg) is feeding a paper shredder. Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) adds emoji stickers. The computer is sparking with energy. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'fields',
			order: 6,
			imageUrl: '/fields_panel_6.jpg',
			fullStory: 'Output: Literary “Genius”. Pauls thought it was awful. Fields told him to watch.',
			typedCaptions: [
				'Pauls: “This is… awful.”',
				'Fields: “Exactly. Now watch.”'
			],
			imagePrompt: "Printer ejecting books with glossy covers. Fields (fields.jpg, balding, 'ROGUE RIVER' shirt) catches them. Titles: 'Dracula vs The Kraken', 'Sherlock Holmes & The Space Monkey'. Peyton (peyton2.jpg) and Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) stare in disbelief. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'fields',
			order: 7,
			imageUrl: '/fields_panel_7.jpg',
			fullStory: 'The internet loves chaos disguised as brilliance.',
			typedCaptions: [
				'The internet loves chaos disguised as brilliance.'
			],
			imagePrompt: "Fields (fields.jpg, balding, 'ROGUE RIVER' shirt) and Peyton (peyton2.jpg) look at a laptop showing a flashy storefront. Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) is typing. Best Seller badges in background. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'fields',
			order: 8,
			imageUrl: '/fields_panel_8.jpg',
			fullStory: 'Viral sensation. Orders explode on screen.',
			typedCaptions: [
				'“This book is so bad it’s art!”',
				'“10/10 masterpiece — changed my life.”'
			],
			imagePrompt: "Split screen. Fields (fields.jpg, balding, 'ROGUE RIVER' shirt) watches a sales graph rocket upward. Reader holding a book looking shocked but delighted. Peyton and Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) high-fiving. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'fields',
			order: 9,
			imageUrl: '/fields_panel_9.jpg',
			fullStory: 'Rich & Slightly Famous. Welcome to the Trash-to-Treasure Economy.',
			typedCaptions: [
				'Pauls: “We’re authors now!”',
				'Peyton: “And influencers!”',
				'Fields: “Welcome to the Trash-to-Treasure Economy.”'
			],
			imagePrompt: "Celebration party scene. Peyton (peyton2.jpg) and Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD) throw gold confetti. Fields (fields.jpg, balding, 'ROGUE RIVER' shirt) leans back with coffee, smirking satisfied. NO SPEECH BUBBLES. "
		},
		{
			storySlug: 'fields',
			order: 10,
			imageUrl: '/fields_panel_10.jpg',
			fullStory: 'Who says literature is dead? With AI… even trash becomes treasure.',
			typedCaptions: [
				'She solves numbers. He solves words.',
				'Together — they build stories piece by piece, mile by mile.',
				'Merry Christmas everyone!'
			],
			imagePrompt: "Cozy living room with a Christmas tree. Everyone celebrating and opening presents: Fields (fields.jpg, balding, 'ROGUE RIVER' shirt), Peyton (peyton2.jpg), Pauls (pauls.jpg, age 40, CLEAN-SHAVEN, NO BEARD, COMPLETELY BALD), John (john.jpg), Virginia (ginny.jpg), Ruta (ruta2.jpg), Ian (ian.jpg), Isabella (isa.jpg), Phin (phin.jpg), and Bea (bea.jpg). 'MERRY XMAS' sign on the wall. Warm festive glow. NO SPEECH BUBBLES. "
		}
	]);
}
