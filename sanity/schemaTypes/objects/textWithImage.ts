import { defineType, defineField } from 'sanity';

import { FaIndent } from 'react-icons/fa';

export default defineType({
  name: 'textWithImage',
  title: 'Text with Image',
  type: 'object',
  icon: FaIndent,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the text with image section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed text for the text with image section.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image for the text with image section.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageAltText',
      title: 'Image Alt Text',
      type: 'string',
      description: 'Alternative text for the image (for accessibility).',
    }),
    defineField({
      name: 'imageAlignment',
      title: 'Image Alignment',
      type: 'string',
      description: 'Choose the alignment of the image.',
      options: {
        list: [
          { title: 'Top', value: 'top' },
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Bottom', value: 'bottom' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'callToActions',
      title: 'Call to Actions',
      type: 'array',
      of: [{ type: 'cta' }], // Reference the CTA schema
      description: 'Add one or more call-to-action buttons for the hero section.',
    }),
    defineField({
      name: 'backgroundOptions',
      title: 'Background Options',
      type: 'backgroundOptions', // Reference the Background Options object
      description: 'Configure the background for this component.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Text with Image',
        subtitle: 'Image and rich text section',
      };
    },
  },
});