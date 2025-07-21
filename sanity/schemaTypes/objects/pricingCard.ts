import { defineType, defineField } from 'sanity';
import { FaBullhorn } from 'react-icons/fa';

export default defineType({
  name: 'pricingCard',
  title: 'Pricing Card',
  type: 'object',
  icon: FaBullhorn,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'details',
      type: 'text',
      title: 'Details',
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'points',
      type: 'text',
      title: 'Points',
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (Rule) => Rule.regex(/^\d+(\.\d{1,2})?$/, {
        name: 'price',
        invert: false,
      }).error('Invalid price format, use digits like 10 or 10.99'),
    }),
    defineField({
      name: 'currency',
      type: 'string',
      title: 'Currency',
      options: {
        list: [
          { title: 'USD', value: 'USD' },
          { title: 'EUR', value: 'EUR' },
          { title: 'GBP', value: 'GBP' },
        ],
      },
    }),
    defineField({
      name: 'priceSuffix',
      type: 'string',
      title: 'Price Suffix',
      validation: (Rule) => Rule.max(10),
    }),
    defineField({
      name: 'cta',
      type: 'cta',  // Reference the existing CTA object
      title: 'Call to Action',
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      title: 'Is Featured',
    }),
    defineField({
      name: 'discount',
      type: 'number',
      title: 'Discount (%)',
      description: 'Optional discount percentage (e.g., 10 for 10% off)',
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
  ],
});