import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision';
import { orderablePageList } from './sanity/desk/orderablePageList'

import { schemaTypes } from './sanity/schemaTypes'

const config = defineConfig({
    projectId: 'pkyvphtn',
    dataset: 'production',
    title: 'Simple Conveyancing Studio',
    apiVersion: '2024-12-25',
    basePath: '/admin',
    schema: {
        types: schemaTypes,
    },
    plugins: [structureTool({
        structure: (S, context) =>
          S.list()
            .title('Content')
            .items([
                S.documentTypeListItem('siteConfig').title('Site Configuration'),
                orderablePageList(S, context),
                S.documentTypeListItem('post').title('Posts'),
                S.documentTypeListItem('author').title('Authors'),
                S.documentTypeListItem('category').title('Categories'),
              //...S.documentTypeListItems().filter((item) => item.getId() !== 'page'),
            ]),
      }),
      visionTool()],
    
});

export default config;