export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628134e0a4e5ca5cc8e3bf74',
                  title: 'Sanity Studio',
                  name: 'simple-conveyancing-studio',
                  apiId: '84be0a78-04ef-45bd-9bb0-ae0a59cee0de'
                },
                {
                  buildHookId: '628134e0d59750581964f62f',
                  title: 'Landing pages Website',
                  name: 'simple-conveyancing',
                  apiId: '0369062a-502d-4625-8ce5-4cb5394175ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stew-roberts/simple-conveyancing',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://simple-conveyancing.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
