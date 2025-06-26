import { createClient, groq } from "next-sanity";
import { Page, SiteConfig, NavLink } from "@sanity/types/sanity-schema";
import clientConfig from "@sanity/utils/config/client.config";

export async function getSiteConfig(): Promise<SiteConfig[]> {
    return createClient(clientConfig).fetch(groq`*[_type == "siteConfig"]  | order(orderRank){
        _id, 
        _type,
        title,
        url,
        logo,
        tcnLicenceKey,
        "footer": {
            linkGroups[]{
                groupTitle,
                links[]{
                    displayText,
                    linkType,
                    internalLink->{
                        _type,
                        title,
                        slug
                    },
                    "externalLink":{
                        url
                    }
                }
            }
        }  
    }`);
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(groq`*[_type == "page"] | order(orderRank){
        _id,
        _type,
        _createdAt,
        _updatedAt,
        _rev,
        title,
        slug,
        orderRank,
        content[]{
            ...,
            image{ ..., asset-> },
            backgroundImage{ ..., asset-> },
            callToActions[]{
                link{
                    displayText,
                    linkType,
                    internalLink->{
                        _type,
                        title,
                        slug
                    },
                    "externalLink":{
                        url
                    }
                }
            },
            text[]{
            ...
            }
        }
    }`);
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(groq`*[_type == "page" && slug.current == $slug][0]`, { slug });
}

/**
 * Generate a cleaned slug for internal "location" links.
 */
export function getSlugForLink(link: NavLink): string | null {
    console.log('Generating slug for link:', link);
  if (link.internalLink?.slug?.current.includes('{location}')) {
    const locationSlug = link.displayText
      .toLowerCase()
      .replace('conveyancing in ', '')
      .replace(/ /g, '-')
    return link.internalLink.slug.current.replace('{location}', locationSlug)
  } else {
    return link.internalLink?.slug?.current || null
  }
}