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
			imageUrl: '/pauls_stressed.png',
			fullStory: '<p>Professor Pauls was a man living on the edge of academic disaster.</p>',
			typedCaptions: [
				'At the University, they called him a failure.',
				'He was an abused professor, buried under a mountain of grading and disappointment.',
				'But he had a plan to make it rich... very rich.'
			],
		},
		// Pauls - Panel 2
		{
			storySlug: 'pauls',
			order: 2,
			imageUrl: '/pauls_son_working.png',
			fullStory: '<p>The professor\'s son did all the actual labor, naturally.</p>',
			typedCaptions: [
				'Pauls demanded a hot sauce that would conquer the world.',
				'While the professor reclined in his study, the son spent his nights in a sweltering basement kitchen.',
				'"Must... finish... for Dad!" the boy whispered, wiping sweat from his brow.'
			],
		},
		// Pauls - Panel 3
		{
			storySlug: 'pauls',
			order: 3,
			imageUrl: '/cats_peeing.png',
			fullStory: '<p>The garden was a wild place at night, home to a fleet of stray cats.</p>',
			typedCaptions: [
				'One fateful evening, the son noticed something... unusual.',
				'The neighborhood cats were marking their territory on the jalapeno patch.',
				'The peppers were being saturated in an indescribable essence.'
			],
		},
		// Pauls - Panel 4
		{
			storySlug: 'pauls',
			order: 4,
			imageUrl: '/pauls_sauce_revelation.png',
			fullStory: '<p>The discovery changed the flavor profile forever.</p>',
			typedCaptions: [
				'The son tasted the new batch. It was shocking. It was revelatory.',
				'The feline influence added a tang that defied all logic.',
				'Yellow Truck Hot Sauce was no longer just a recipe. It was a phenomenon.'
			],
		}
	]);
}
