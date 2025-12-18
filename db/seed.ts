import { db, Stories } from 'astro:db';

export default async function seed() {
	await db.insert(Stories).values([
		{
			slug: 'gonkerlives',
			title: 'Gonker Lives',
			summary: 'The legend of the survivor.',
			fullStory: '<p>Deep in the archives, the files were found. Gonker was never gone. He was just waiting for the right signal.</p>',
			comicImageUrl: '/yellowtruck.jpg',
			typedCaptions: ['Signal received.', ' The yellow truck arrives.', 'Gonker steps out.'],
		},
		{
			slug: 'cornhole',
			title: 'Operation Cornhole',
			summary: 'The mission that changed everything.',
			fullStory: '<p>It wasn\'t just a game. It was a test of skill, precision, and hot sauce tolerance.</p>',
			comicImageUrl: '/yellowtruck.jpg',
			typedCaptions: ['The target is set.', 'Bags in hand.', 'A perfect slide.'],
		}
	]);
}
