import { defineType, defineField } from 'sanity';
import { FaTimeline } from 'react-icons/fa6';

export default defineType({
  name: 'timeline',
  title: 'Timeline',
  type: 'object',
  icon: FaTimeline,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'strapline',
      type: 'string',
      title: 'Strapline',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'timelineItem' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'strapline',
      media: 'icon',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Timeline',
        subtitle: subtitle || 'No strapline set',
        media,
      };
    },
  },
});