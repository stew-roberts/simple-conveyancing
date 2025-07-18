import { InternalLinkType } from './internal-link-type'

export type NavLinkType = {
  _type: 'navLink'
  displayText: string
  linkType: 'internal' | 'external'
  internalLink?: InternalLinkType
  externalLink?: {
    url: string
  }
}