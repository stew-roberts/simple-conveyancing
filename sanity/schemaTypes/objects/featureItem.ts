import { defineType, defineField } from 'sanity';
import { FaTh } from 'react-icons/fa';

export default defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  icon: FaTh,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fontAwesomeIcon',
      type: 'string',
      title: 'Font Awesome Icon',
      description: 'Enter the Font Awesome icon name (e.g., "faCoffee").',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Feature',
        subtitle: subtitle || 'No description provided',
        media,
      };
    },
  },
});