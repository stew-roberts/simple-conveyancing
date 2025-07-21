import { defineType, defineField } from 'sanity';

import { FaImages } from 'react-icons/fa';

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: FaImages,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title for the hero section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'strapline',
      title: 'Strapline',
      type: 'string',
      description: 'An optional tagline or subtitle for the hero section.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'The main image for the hero section.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'callToActions',
      title: 'Calls to Action',
      type: 'array',
      of: [{ type: 'cta' }], // Reference the CTA schema
      description: 'Add one or more call-to-action buttons for the hero section.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare({ title }) {
      return {
        title: title,
        subtitle: 'Hero Section',
      };
    },
  },
});