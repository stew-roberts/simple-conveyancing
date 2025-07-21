import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      title: 'Caption',
      name: 'caption',
      type: 'string',
      description: 'Optional caption for the image.',
      fieldset: 'imageDetails', // Place behind a collapsed fieldset for clarity
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessibility.',
      fieldset: 'imageDetails', // Place behind a collapsed fieldset for clarity
    }),
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
  fieldsets: [
    {
      name: 'imageDetails',
      title: 'Image Details',
      options: {
        collapsible: true, // Collapsed by default
        collapsed: true,
      },
    },
  ],
});