import { defineType, defineField } from 'sanity';

import { FaGoogle } from 'react-icons/fa';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) =>
        Rule.max(60).warning('Meta titles should ideally be under 60 characters.'),
      description: 'The title for the page (max 60 characters).',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(160).warning('Meta descriptions should ideally be under 160 characters.'),
      description: 'The description for the page (max 160 characters).',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'A list of keywords relevant to the page.',
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image to display when the page is shared on social media.',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description:
        'Enable this option if you want to prevent search engines from indexing this page.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'SEO Settings',
        subtitle: 'Configure meta tags and social sharing settings',
        media: FaGoogle,
      };
    },
  },
});