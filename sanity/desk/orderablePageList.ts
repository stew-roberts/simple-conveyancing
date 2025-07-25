import { StructureBuilder } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { FaFileCode } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const orderablePageList = (S: StructureBuilder, context: any) => {
  const config = orderableDocumentListDeskItem({
    type: 'page',
    title: 'Page',
    icon: FaFileCode,
    S,
    context,
  });

  // Patch the child component to avoid the React "key" warning
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pane = (config as any)._child;
  const originalComponent = pane?.spec?.options?.component;

  if (typeof originalComponent === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pane.spec.options.component = (props: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { key, ...rest } = props;
      return originalComponent(rest);
    };
  }

  return config;
};