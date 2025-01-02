import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'embedIframe',
  title: 'Embed Iframe',
  type: 'object',
  fields: [
    defineField({
      name: 'src',
      title: 'Source URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'width',
      title: 'Width',
      type: 'string',
      initialValue: '100%',
    }),
    defineField({
      name: 'height',
      title: 'Height',
      type: 'string',
      initialValue: '400px',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for accessibility.',
    }),
  ],
  preview: {
    select: {
      src: 'src',
    },
    prepare({ src }) {
      return {
        title: 'Iframe Embed',
        subtitle: src ? `Source: ${src}` : 'No source provided',
      };
    },
  },
});