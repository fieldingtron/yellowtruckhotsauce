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
		// Phin's Story - Panel 2: The Biological Hack
		{
			storySlug: 'phin',
			order: 2,
			imageUrl: '/phin_panel_2.jpg',
			fullStory: '<p>Phin discovers that the specific pH level of cat... "donations"... creates a mutation in the peppers. He also sneaks a few "calming" drops into his parents\' morning coffee.</p>',
			typedCaptions: [
				'Phin is in the backyard at night with a thermal-imaging monocle.',
				'He\'s using a high-pitched whistle to command a small army of neighborhood cats.',
				'Target: his dad’s failing jalapeño patch.'
			],
		},
		// Phin's Story - Panel 3: The Golden Harvest
		{
			storySlug: 'phin',
			order: 3,
			imageUrl: '/phin_panel_3.jpg',
			fullStory: '<p>The crop is a miracle. The parents are strangely relaxed and happy (thanks to the coffee), and the Father’s new "Cat-Hacked Sauce" becomes an overnight global sensation.</p>',
			typedCaptions: [
				'The jalapeño plants have exploded into massive, glowing red fruits.',
				'The Father is in the garden, looking at a pepper with tears of joy.',
				'A black cat with a bowtie watches him from a branch.'
			],
		},
		// Phin's Story - Panel 4: The Empire Rises
		{
			storySlug: 'phin',
			order: 4,
			imageUrl: '/phin_panel_4.jpg',
			fullStory: '<p>The Father is rich but remains stubborn about the "No Internet" rule as a matter of principle.</p>',
			typedCaptions: [
				'Paul is on the cover of "Spice Weekly".',
				'Boxes of "Professor’s Secret Sauce" are stacked to the ceiling.',
				'Wealthy now, but he still won’t give Phin the WiFi password.'
			],
		},
		// Phin's Story - Panel 5: The Strike Begins
		{
			storySlug: 'phin',
			order: 5,
			imageUrl: '/phin_panel_5.jpg',
			fullStory: '<p>Phin initiates a "Biological Strike." Without his feline "coders," the secret ingredient disappears, and the sauce quality plummets.</p>',
			typedCaptions: [
				'The cats are sitting on the garden fence, refusing to enter.',
				'Phin is standing in the garden with a sign: "NO BYTES, NO BITES."',
				'The jalapeño plants are already starting to wither and turn grey.'
			],
		},
		// Phin's Story - Panel 6: The Extortion Note
		{
			storySlug: 'phin',
			order: 6,
			imageUrl: '/phin_panel_6.jpg',
			fullStory: '<p>Phin moves from mischief to full-blown corporate extortion. The Father realizes his empire depends entirely on his son’s "stinky" secret.</p>',
			typedCaptions: [
				'The Father looks horrified at a plummeting stock chart.',
				'On his desk is a physical "Ransom Note" made of cut-out magazine letters.',
				'"RESTORE THE FIBER OPTICS OR THE SAUCE DIES. THE CATS WANT TREATS. I WANT GIGABITS."'
			],
		},
		// Phin's Story - Panel 7: The Total Surrender
		{
			storySlug: 'phin',
			order: 7,
			imageUrl: '/phin_panel_7.jpg',
			fullStory: '<p>The Father begs for forgiveness. He promises never to throttle the speed or set a bedtime again, as long as the cats return to the garden.</p>',
			typedCaptions: [
				'The Father is on his knees, crying and holding a golden router like a trophy.',
				'He is handing Phin a signed "Lifetime Internet Contract."',
				'Phin is sitting in a high-tech gaming chair, looking like a young villain.'
			],
		},
		// Phin's Story - Panel 8: The New Status Quo
		{
			storySlug: 'phin',
			order: 8,
			imageUrl: '/phin_panel_8.jpg',
			fullStory: '<p>Phin is now the shadow CEO of the hot sauce empire. He gets to school whenever he wants, and the internet connection is the fastest in the country.</p>',
			typedCaptions: [
				'Phin is surrounded by 6 monitors, hacking with lightning speed.',
				'The Father is happily packing hot sauce in the background.',
				'A cat is sitting on Phin\'s shoulder.'
			],
		},
	]);
}
