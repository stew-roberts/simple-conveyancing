import { defineType, defineField } from 'sanity';
import { FaFillDrip } from 'react-icons/fa';

export default defineType({
  name: 'backgroundOptions',
  title: 'Background Options',
  type: 'object',
  icon: FaFillDrip,
  fields: [
    defineField({
      name: 'enableBackgroundColour',
      title: 'Enable Background Colour',
      type: 'boolean',
      description: 'Enable a solid background colour for this component.',
    }),
    defineField({
      name: 'backgroundColour',
      title: 'Background Colour',
      type: 'string',
      description: 'Enter a valid CSS color value (e.g., #ffffff, rgba(0,0,0,0.5)).',
      hidden: ({ parent }) => !parent?.enableBackgroundColour,
    }),
    defineField({
      name: 'enableBackgroundImage',
      title: 'Enable Background Image',
      type: 'boolean',
      description: 'Enable a background image for this component.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => !parent?.enableBackgroundImage,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon'
    },
    prepare({media}) {
      return {
        title: 'Background Options',
        subtitle: 'Customizable background settings',
        media,
      };
    },
  },
});