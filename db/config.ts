import { defineDb, defineTable, column } from 'astro:db';

const Stories = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    title: column.text(),
    summary: column.text(),
  }
});

const Panels = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    storySlug: column.text({ references: () => Stories.columns.slug }),
    order: column.number(),
    imageUrl: column.text(),
    fullStory: column.text(),
    typedCaptions: column.json({ optional: true }),
    imagePrompt: column.text({ optional: true }),
  }
});

export default defineDb({
  tables: { Stories, Panels }
});
