import { defineType, defineField } from 'sanity';
import { FaTags } from 'react-icons/fa';

export default defineType({
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'object',
  icon: FaTags,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'pricingItems',
      type: 'array',
      title: 'Pricing Items',
      of: [{ type: 'pricingCard' }],
      validation: (Rule) => Rule.required().min(1).error('At least one pricing card is required'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled Pricing Section',
        subtitle: subtitle || 'No description provided',
        media,
      };
    },
  },
});