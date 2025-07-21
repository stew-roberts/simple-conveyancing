import { defineType, defineField } from 'sanity';

import { FaRegRectangleList } from "react-icons/fa6";

export default defineType({
  name: 'conveyancingQuote',
  type: 'object',
  title: 'Convencing Quote',
  icon: FaRegRectangleList,
  fields: [
    defineField({
        name: 'title',
        type: 'string',
        title: 'Title',
    }),
    defineField({
        name: 'description',
        type: 'portableText',
        title: 'Description',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon'
    },
    prepare({ title, media }) {
      return {
        title: title ? title : 'No text provided',
        subtitle: 'TCN Conveyancing Quote engine',
        media,
      };
    },
  },
});