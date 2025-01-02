import { defineType, defineField } from 'sanity';
import { FaLink } from 'react-icons/fa';

export default defineType({
  name: 'navigationLink',
  type: 'object',
  title: 'Navigation Link',
  icon: FaLink,
  fields: [
    defineField({
      name: 'displayText',
      type: 'string',
      title: 'Display Text',
      description: 'The text to display for the navigation link.',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'linkType',
      type: 'string',
      title: 'Link Type',
      description: 'Specify if the link is internal or external.',
      options: {
        list: [
          { title: 'Internal', value: 'internal' },
          { title: 'External', value: 'external' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internalLink',
      type: 'reference',
      title: 'Internal Page',
      description: 'Select a page for internal links.',
      to: [{ type: 'page' }], // Assuming "page" is your document type for pages
      hidden: ({ parent }) => parent?.linkType !== 'internal',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.linkType === 'internal' && !value) {
            return 'Internal page is required for internal links.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'External URL',
      description: 'Required for external links. Enter the full URL (e.g., "https://example.com").',
      hidden: ({ parent }) => parent?.linkType !== 'external',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.parent?.linkType === 'external' && !value) {
            return 'External URL is required for external links.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'openInNewTab',
      type: 'boolean',
      title: 'Open in New Tab',
      description: 'Should this link open in a new tab?',
      initialValue: false,
    }),
    defineField({
      name: 'icon',
      type: 'string',
      title: 'Icon (optional)',
      description: 'Optional icon (Font Awesome class or similar).',
    }),
    defineField({
      name: 'subLinks',
      type: 'array',
      title: 'Sub-links',
      description: 'Add sub-links for this navigation item.',
      of: [{ type: 'navigationLink' }],
    }),
  ],
  preview: {
    select: {
      title: 'displayText',
      subtitle: 'linkType',
      media: 'icon', // Placeholder for Font Awesome or other icon system
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Navigation Link',
        subtitle: subtitle === 'internal' ? 'Internal Link' : 'External Link',
      };
    },
  },
});