import { LinkGroupType } from './link-group-type'
import { AddressType } from './address-type'
export type SiteConfigType = {
  _id: string
  _type: 'siteConfig'
  title: string
  url: string
  email: string
  address: AddressType
  tcnLicenceKey?: string
  logo: string
  alt: string
  footer: {
    linkGroups: LinkGroupType[],
    copyrightText?: string
  }
}