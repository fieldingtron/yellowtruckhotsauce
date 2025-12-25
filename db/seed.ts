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
			imageUrl: '/pauls_panel_1_bald.png',
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
			imageUrl: '/pauls_panel_2.png',
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
			imageUrl: '/pauls_panel_3.png',
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
			imageUrl: '/pauls_panel_4.png',
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
			imageUrl: '/pauls_panel_5.png',
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
			imageUrl: '/pauls_panel_6.png',
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
			imageUrl: '/pauls_panel_7.png',
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
			imageUrl: '/pauls_panel_8.png',
			fullStory: '<p>The new batch was more than hot—it was addictive, it was perfection, it was a culinary revelation. Yellow Truck Hot Sauce had finally arrived, and the world would never be the same.</p>',
			typedCaptions: [
				'TO BE CONTINUED...'
			],
		},
	]);
}
