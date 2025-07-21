import { defineType, defineField } from 'sanity';

import { FaAlignLeft } from 'react-icons/fa';

export default defineType({
  name: 'textOnly',
  type: 'object',
  title: 'Text',
  icon: FaAlignLeft,
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
        title: title ? title : 'No text provided',
        subtitle: 'Text Section',
        media,
      };
    },
  },
});