import { defineType, defineField } from 'sanity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

export default defineType({
  name: 'imageOnly',
  title: 'Image Only',
  type: 'object',
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
        altText: 'altText', // Selects the image field for preview
    },
    prepare({ altText }) {
      return {
        title: altText ? altText : 'No alt text provided',
        subtitle: 'Image Section',
        media: faImage,
      };
    },
  },
});