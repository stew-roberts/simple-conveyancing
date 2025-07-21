import { defineType, defineField } from 'sanity';
import { FaBullhorn } from 'react-icons/fa';

export default defineType({
  name: 'cta',
  title: 'Call to Action',
  type: 'object',
  icon: FaBullhorn,
  fields: [
    defineField({
      name: 'link',
      title: 'Navigation Link',
      type: 'navigationLink',
      description: 'The location the button will link to. Can be an internal page or external URL.',
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description: 'If checked, the link will open in a new tab.',
      initialValue: false,
    }),
    defineField({
      name: 'verticalAlignment',
      title: 'Vertical Alignment',
      type: 'string',
      description: 'Align the button vertically within its container.',
      options: {
        list: [
          { title: 'Top', value: 'top' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'bottom' },
        ],
        layout: 'radio',
      },
      initialValue: 'center',
    }),
    defineField({
      name: 'horizontalAlignment',
      title: 'Horizontal Alignment',
      type: 'string',
      description: 'Align the button horizontally within its container.',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'center',
    }),
  ],
  preview: {
    select: {
      title: 'link.displayText', // Access the displayText field from the navigationLink reference
      subtitle: 'link.linkType', // Optional: Display the link type (internal or external)
      media: 'icon',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'No link specified',
        subtitle: subtitle ? `Call To Action: ${subtitle}` : 'No type specified',
        media,
      };
    },
  },
});