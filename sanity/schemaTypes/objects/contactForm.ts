import { defineType, defineField } from 'sanity';

import { FaEnvelope } from 'react-icons/fa';

export default defineType({
  name: 'contactForm',
  type: 'object',
  title: 'Contact Form',
  icon: FaEnvelope,
  fields: [
    defineField({
        name: 'title',
        type: 'string',
        title: 'Title',
    }),
    defineField({
        name: 'text',
        type: 'portableText',
        title: 'Text',
    }),
  ],
  preview: {
    select: {
      title: 'title', // Use the `text` field for the preview
      media: 'icon'
    },
    prepare({ title, media }) {
      return {
        title: title ? title : 'No data provided',
        subtitle: 'Contact Form',
        media,
      };
    },
  },
});