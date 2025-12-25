import { db, Stories, Panels } from 'astro:db';
import fs from 'fs';
import path from 'path';

export default async function exportToSeed() {
    console.log('--- 📝 Exporting Database to db/seed.ts ---');

    try {
        const stories = await db.select().from(Stories);
        const allPanels = await db.select().from(Panels);

        let content = `import { db, Stories, Panels } from 'astro:db';

export default async function seed() {
	await db.delete(Panels);
	await db.delete(Stories);

	await db.insert(Stories).values([
`;

        stories.forEach((story, index) => {
            content += `		{
			slug: '${story.slug}',
			title: ${JSON.stringify(story.title)},
			summary: ${JSON.stringify(story.summary)},
		}${index < stories.length - 1 ? ',' : ''}\n`;
        });

        content += `	]);

	await db.insert(Panels).values([
`;

        // Sort panels by story and then by order
        allPanels.sort((a, b) => {
            if (a.storySlug !== b.storySlug) return a.storySlug.localeCompare(b.storySlug);
            return a.order - b.order;
        });

        allPanels.forEach((panel, index) => {
            content += `		// ${panel.storySlug} - Panel ${panel.order}
		{
			storySlug: '${panel.storySlug}',
			order: ${panel.order},
			imageUrl: '${panel.imageUrl}',
			fullStory: ${JSON.stringify(panel.fullStory)},
			typedCaptions: ${JSON.stringify(panel.typedCaptions, null, '\t\t\t\t').replace(/\n/g, '\n\t\t\t')},
`;
            if (panel.imagePrompt) {
                content += `			imagePrompt: ${JSON.stringify(panel.imagePrompt)},
`;
            }
            content += `		}${index < allPanels.length - 1 ? ',' : ''}\n`;
        });

        content += `	]);
}
`;

        const seedPath = path.join(process.cwd(), 'db', 'seed.ts');
        fs.writeFileSync(seedPath, content);
        console.log(`✅ Successfully updated ${seedPath} with current database content.`);

    } catch (error) {
        console.error('❌ Error exporting database:', error.message);
    }
}
