import { defineDb, defineTable, column } from 'astro:db';

const Stories = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    title: column.text(),
    summary: column.text(),
    fullStory: column.text(),
    comicImageUrl: column.text(),
    typedCaptions: column.json(),
  }
});

export default defineDb({
  tables: { Stories }
});
