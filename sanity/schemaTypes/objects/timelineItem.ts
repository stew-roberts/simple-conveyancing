import { defineType, defineField } from 'sanity';
import { FaCircle } from 'react-icons/fa';

export default defineType({
  name: 'timelineItem',
  title: 'Timeline Item',
  type: 'object',
  icon: FaCircle,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the event, role, or milestone (e.g., Job title, project name, event name)',
    }),
    defineField({
      name: 'dateRange',
      type: 'string',
      title: 'Date Range',
      description: 'The time period for this event, role, or milestone (e.g., 2020–2022)',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where this event or role took place (optional)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Details about this event, role, or milestone. You can include responsibilities, achievements, or notes.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'dateRange',
      media: 'icon',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Item',
        subtitle: subtitle || 'No date range provided',
        media,
      };
    },
  },
});