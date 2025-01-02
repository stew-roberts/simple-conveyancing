import { defineType, defineField } from 'sanity';
import { FaUserEdit } from 'react-icons/fa';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: FaUserEdit,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'bio',
      type: 'text',
      title: 'Bio',
    }),
    defineField({
      name: 'gravatar',
      type: 'url',
      title: 'Gravatar URL',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'icon',
    },
    prepare({ title, media }) {
      return {
        title: title || 'No Name',
        media,
      };
    },
  },
});