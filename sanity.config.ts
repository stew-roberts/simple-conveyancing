import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { FaFileCode } from 'react-icons/fa';

import { schemaTypes } from './sanity/schemaTypes';

const config = defineConfig({
  projectId: 'pkyvphtn',
  dataset: 'production',
  title: 'Simple Conveyancing Studio',
  apiVersion: '2024-12-25',
  basePath: '/admin',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S, context) => {
        const pageListItem = orderableDocumentListDeskItem({
          type: 'page',
          title: 'Page',
          icon: FaFileCode,
          S,
          context,
        });

        // Remove `key` to avoid React warning
        const { ...rest } = pageListItem;

        return S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('siteConfig').title('Site Configuration'),
            S.listItem({ ...rest, key }), // ✅ Key passed directly
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('author').title('Authors'),
            S.documentTypeListItem('category').title('Categories'),
          ]);
      },
    }),
    visionTool(),
  ],
});

export default config;