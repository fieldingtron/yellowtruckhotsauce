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
			imageUrl: '/pauls-lab.png',
			fullStory: '<p>The man behind the wheel was only the beginning.</p>',
			typedCaptions: [
				'Here is a story of professor Paul, Paul with an S, and the hot sauce.',
				'The sad and bizarre story of Yellow Truck Hot Sauce.'
			],
		},
		// Pauls - Panel 2
		{
			storySlug: 'pauls',
			order: 2,
			imageUrl: '/paul-delivery.png',
			fullStory: '<p>The city streets were slick with rain and neon shadows. Paul gripped the wheel of the yellow truck, the precious cargo of liquid fire rattling in the back. The delivery could not wait.</p>',
		}
	]);
}
