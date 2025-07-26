import { LinkGroupType } from './link-group-type'
import { AddressType } from './address-type'

export type SiteConfigType = {
  _id: string;
  _type: string;
  title: string;
  url: string;
  telephone?: string;
  email?: string;
  address: AddressType;
  tcnLicenceKey?: string;
  includeConveyancingPlugin?: boolean;
  alt: string;
  logo: string;
  frontpageSlug?: string;
  footer: {
    linkGroups: LinkGroupType[],
    copyrightText?: string
  };
  globalSEO?: {
    _type: string;
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
};