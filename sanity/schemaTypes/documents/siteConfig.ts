import { defineType, defineField } from 'sanity';
import { FaSlidersH, FaSitemap, FaAlignLeft, FaFillDrip } from 'react-icons/fa';

export default defineType({
  name: 'siteConfig',
  type: 'document',
  title: 'Site Configuration',
  icon: FaSlidersH,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'brand', title: 'Brand' },
    { name: 'conveyancing', title: 'Conveyancing' },
    { name: 'footer', title: 'Footer' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // General Settings
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site Title',
      description: 'The title of the website.',
      validation: (Rule) => Rule.required().max(100),
      group: 'general',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Site URL',
      description: 'The main site URL. Used to create canonical URLs.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).required(),
      group: 'general',
    }),
    defineField({
      name: 'telephone',
      type: 'string',
      title: 'Contact Number',
      description: 'Main contact number for the site.',
      group: 'general',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Contact Email',
      description: 'Main contact email for the site.',
      group: 'general',
    }),
        defineField({
      name: 'address',
      type: 'address',
      title: 'Address',
      description: 'The main address for the site. This is used in the footer and for SEO purposes.',
      group: 'general',
    }),
    defineField({
      name: 'frontpage',
      type: 'reference',
      title: 'Front Page',
      description: 'Choose the page to be used as the front page.',
      to: [{ type: 'page' }],
      group: 'general',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Brand Logo',
      description: 'Best choice is to use an SVG where colors are set with currentColor.',
      options: {
        hotspot: true,
      },
      group: 'brand',
    }),
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alternative Text',
      description: 'Important for SEO and accessibility.',
      validation: (Rule) => Rule.required(),
      group: 'brand',
    }),
    defineField({
      name: 'includeConveyancingPlugin',
      title: 'Include Conveyancing Plugin',
      type: 'boolean',
      description: 'Enable this to include the Conveyancing Plugin.',
      initialValue: false,
      group: 'conveyancing',
    }),
    defineField({
      name: 'tcnLicenceKey',
      title: 'TCN Licence Key',
      type: 'string',
      description: 'The licence key for the TCN Conveyancing Plugin.',
      hidden: ({ parent }) => !parent?.includeConveyancingPlugin,
      group: 'conveyancing',
    }),

    // Footer Settings
    defineField({
      name: 'footerTitle',
      type: 'string',
      title: 'Footer Title',
      description: 'Optional title for the footer (e.g., "Stay Connected").',
      validation: (Rule) => Rule.max(100),
      group: 'footer',
    }),
    defineField({
      name: 'textGroups',
      type: 'array',
      title: 'Text Blocks',
      description: 'Add multiple text blocks.',
      of: [
        { type: 'textOnly', title: 'Text Section', icon: FaAlignLeft }, // Reference the text object
      ],
      group: 'footer',
    }),
    defineField({
      name: 'linkGroups',
      type: 'array',
      title: 'Link Groups',
      description: 'Add multiple groups of footer links.',
      of: [
        { type: 'linkGroup', title: 'Links Group', icon: FaSitemap, }, // Reference the Link Group object
      ],
      group: 'footer',
    }),
    defineField({
      name: 'copyrightText',
      type: 'string',
      title: 'Copyright Text',
      description: 'Optional copyright text to display at the bottom of the footer.',
      validation: (Rule) => Rule.max(200),
      group: 'footer',
    }),
    defineField({
      name: 'backgroundOptions',
      type: 'array',
      title: 'Background Options',
      description: 'optional background options for the footer.',
      of: [
        { type: 'backgroundOptions', title: 'Background Options', icon: FaFillDrip, }, // Reference the Backgrounds object
      ],
      group: 'footer',
    }),
    defineField({
      name: 'globalSEO',
      type: 'seo',
      title: 'Global SEO',
      description: 'SEO settings for the entire site.',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Site Configuration',
        subtitle: 'Global site settings including footer',
        media,
      };
    },
  },
});