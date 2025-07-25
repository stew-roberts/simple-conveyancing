const internalLink = {
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'route' }],
    },
  ],
};

export default internalLink;