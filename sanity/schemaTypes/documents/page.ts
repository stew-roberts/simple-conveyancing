import { defineType, defineField } from 'sanity';
import { FaImage, FaBullhorn, FaFileCode, FaImages, FaAlignLeft, FaIndent, FaGoogle, FaListUl, FaTh, FaEnvelope } from 'react-icons/fa';
import { FaTimeline, FaMoneyBill1, FaRegRectangleList } from 'react-icons/fa6';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: FaFileCode,  // Default icon for the page document
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'The title of the page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'The slug for the page',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'showInNavigation',
      title: 'Show in Navigation',
      type: 'boolean',
      description: 'If checked, this page will show in the navigation menu.',
      initialValue: true,
    }),
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'string',
      hidden: true, // Hides the field in the editor since it's managed by the plugin
      initialValue: '@orderable',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Page Sections',
      description: 'The sections that make up the page. Choose a section and fill in the fields to add content to the page.',
      of: [
        {
          type: 'hero',
          title: 'Hero',
          icon: FaImages,  // Icon for the hero section
        },
        {
          type: 'textOnly',
          title: 'Text Only',
          icon: FaAlignLeft,  // Icon for the text-only section
        },
        {
          type: 'imageOnly',
          title: 'Image Only',
          icon: FaImage,  // Icon for the image-only section
        },
        {
          type: 'textWithImage',
          title: 'Text with Image',
          icon: FaIndent,  // Icon for the text-with-image section
        },
        {
          type: 'cta',
          title: 'Call to Action',
          icon: FaBullhorn,  // Icon for the CTA section
        },
        {
          type: 'featureSection',
          title: 'Featured or highlighted items',
          icon: FaTh,  // Icon for the Feature section
        },
        {
          type: 'timeline',
          title: 'Timeline with Events',
          icon: FaTimeline,  // Icon for the Timeline section
        },
        {
          type: 'pricingSection',
          title: 'Pricing with Cards',
          icon: FaMoneyBill1,  // Icon for the Timeline section
        },
        {
          type: 'posts',
          title: 'Posts',
          icon: FaListUl,  // Icon for the posts section
        },
        {
          type: 'conveyancingQuote',
          title: 'Conveyancing Quote',
          icon: FaRegRectangleList,  // Icon for the posts section
        },
        {
          type: 'seo',
          title: 'SEO data',
          icon: FaGoogle,  // Icon for the SEO section
        },
        {
          type: 'contactForm',
          title: 'Contact Form',
          icon: FaEnvelope,  // Icon for the Contact Form
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled Page',
      };
    },
  },
});