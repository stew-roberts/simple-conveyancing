import { defineType, defineField } from 'sanity';
import { FaTh } from 'react-icons/fa';

export default defineType({
  name: 'featureSection',
  title: 'Feature Section',
  type: 'object',
  icon: FaTh,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().max(100).warning('Keep the title short and descriptive.'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Feature Items',
      of: [{ type: 'featureItem' }],
      validation: (Rule) => Rule.required().min(1).warning('Add at least one feature item.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon', 
    },
    prepare({ title, media }) {
      return {
        title: title || 'Untitled Feature Section',
        subtitle: 'Feature Section',
        media,
      };
    },
  },
});