import React from 'react'
import Link from 'next/link'
import { getSlugForLink } from "@cms/utils/sanity-utils";
import { NavLinkType } from '@cms/types';

export const NavigationLink: React.FC<{link: NavLinkType, className?: string}> = ({link, className}) => {
  const { displayText, linkType, internalLink, externalLink } = link;

  // For internal links
  if (linkType === 'internal' && internalLink) {
    const customSlug = getSlugForLink({ displayText, linkType, internalLink, externalLink } as NavLinkType)
    const slug = customSlug ?? internalLink.slug?.current ?? ''
    if (!slug) return null

    return (
      <Link href={`/${slug}`} className={className} >
        {displayText}
      </Link>
    )
  }

  // For external links
  if (linkType === 'external' && externalLink?.url) {
    return (
      <a
        href={externalLink.url}
        target="_blank"
      >
        {displayText}
      </a>
    )
  }

  // No usable link
  return null
}