import { defineType, defineField } from 'sanity';
import { FaSitemap } from 'react-icons/fa'; // Importing a React icon for the sitemap

export default defineType({
  name: 'linkGroup',
  type: 'object',
  title: 'Link Group',
  icon: FaSitemap,
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