import { FaTags } from 'react-icons/fa';
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: FaTags, // The icon is already applied globally here
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description', // You can display a short description in the subtitle
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? subtitle.substring(0, 50) + '...' : 'No description', // Show a truncated description
        media: FaTags, // Here is where you set the icon
      };
    },
  },
});