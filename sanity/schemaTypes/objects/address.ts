// ./schemas/objects/address.ts

import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    defineField({
      name: 'line1',
      title: 'Address Line 1',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'line2',
      title: 'Address Line 2',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City / Town',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'county',
      title: 'County',
      type: 'string',
    }),
    defineField({
      name: 'postcode',
      title: 'Postcode',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'geo',
      title: 'Geolocation',
      type: 'geopoint',
      description: 'Optional map pin for visual placement or location services.',
    }),
    defineField({
      name: 'mapLink',
      title: 'Google Maps Link',
      type: 'url',
      description: 'Optional link to view this address on Google Maps',
    }),
  ],
  preview: {
    select: {
      title: 'line1',
      subtitle: 'city',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `📍 ${subtitle}` : undefined,
      }
    },
  },
})