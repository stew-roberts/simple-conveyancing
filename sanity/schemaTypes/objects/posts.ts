import { defineType, defineField } from 'sanity';

import { FaList } from 'react-icons/fa';

export default defineType({
  name: 'posts',
  type: 'object',
  title: 'Post List',
  icon: FaList,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title for the blog post list.',
    }),
    defineField({
      name: 'displayTitle',
      type: 'boolean',
      title: 'Display Title in Page?',
      description: 'Choose whether to display the title in the page as well as the root title.',
      initialValue: false
    }),
  ],
  preview: {
    select: {
      title: 'title', // Use the `title` field for the preview title
    },
    prepare() {
      return {
        title: 'Blog Post List',
      };
    },
  },
});