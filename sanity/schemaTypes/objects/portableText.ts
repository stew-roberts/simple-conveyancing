import { defineType } from 'sanity';

export default defineType({
  title: 'Portable Text',
  name: 'portableText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
    },
    { type: 'figure' }, // Reference your updated figure object
    {
      type: 'object',
      name: 'embed',
      title: 'Embed',
      fields: [
        {
          name: 'url',
          title: 'Embed URL',
          type: 'url',
          description: 'Add the URL for the embeddable content (e.g., YouTube, Vimeo, etc.).',
        },
      ],
      preview: {
        select: {
          url: 'url',
        },
        prepare({ url }) {
          return {
            title: 'Embedded Content',
            subtitle: url || 'No URL provided',
          };
        },
      },
    },
  ],
});