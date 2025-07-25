import { defineType, defineField } from 'sanity';
import { FaImage } from 'react-icons/fa'; // This is a React component

export default defineType({
  name: 'imageOnly',
  title: 'Image Only',
  type: 'object',
  icon: FaImage,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true, // Enables hotspot feature
      },
    }),
    defineField({
      name: 'altText',
      type: 'string',
      title: 'Image Alt Text',
      description: 'Alternative text for the image (for accessibility).',
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
        subtitle: 'Image Only',
      };
    },
  },
});