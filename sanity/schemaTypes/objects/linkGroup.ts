import { defineType, defineField } from 'sanity';
import React from 'react';

// Import Font Awesome icon
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

export default defineType({
  name: 'linkGroup',
  type: 'object',
  title: 'Link Group',
  icon: faSitemap,
  fields: [
    defineField({
      name: 'groupTitle',
      type: 'string',
      title: 'Group Title',
      description: 'The title of this group of links.',
    }),
    defineField({
      name: 'showInSitemap',
      type: 'boolean',
      title: 'Show Link Group in Sitemap',
      description: 'Whether this link group should be included in the sitemap.',
      initialValue: true,
    }),
    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      description: 'Links in this group.',
      of: [{ type: 'navigationLink' }], 
    }),
  ],
  preview: {
    select: {
      title: 'groupTitle',
      media: 'icon',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Unnamed Group',
        subtitle: 'Group of Links',
        media,
      };
    },
  },
});