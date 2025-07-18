import { NavLinkType } from "./navlink-type"

export type LinkGroupType = {
  _type: 'linkGroup'
  groupTitle: string
  showInSitemap: boolean
  links: NavLinkType[]
}