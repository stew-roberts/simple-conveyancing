import { createClient, groq } from "next-sanity";
import { Page, SiteConfigType, NavLinkType, PostsType } from "@cms/types";
import clientConfig from "@cms/utils/config/client.config";

export async function getSiteConfig(): Promise<SiteConfigType[]> {
    return createClient(clientConfig).fetch(groq`*[_type == "siteConfig"]  | order(orderRank){
        _id, 
        _type,
        title,
        url,
        telephone,
        email,
        address,
        tcnLicenceKey,
        includeConveyancingPlugin,
        alt,
        "logo": logo.asset->url,
        "frontpageSlug": frontpage->slug.current,
        "footer": {
        footerTitle,
        copyrightText,
        backgroundOptions[],
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
            "externalLink": {
                url
            }
            }
        },
        textGroups[] // Assuming these are inline objects, not references
        },
        globalSEO {
            _type,
            metaTitle,
            metaDescription,
            keywords[],
            "ogImage": openGraphImage.asset->url
        },
    }`);
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && showInNavigation] | order(orderRank){
            _id,
            _type,
            title,
            slug,
            orderRank
        }
    `);
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _type,
        title,
        slug,
        orderRank,
        content[]{
            _type == "hero" => {
                _type,
                _key,
                title,
                strapline,
                backgroundImage {
                    ...,
                    asset->
                },
                callToActions[]{
                    _type,
                    horizontalAlignment,
                    verticalAlignment,
                    openInNewTab,
                    link{
                    _type,
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
            },
            _type == "conveyancingQuote" => {
                ...
            },
            _type == "contactForm" => {
                ...
            },
            _type == "textOnly" => {
                _type,
                _key,
                title,
                text
            },
            _type == "imageOnly" => {
                _type,
                _key,
                "image": image.asset->url,
                imageAltText
            },
            _type == "textWithImage" => {
                _type,
                _key,
                title,
                text,
                "image": image.asset->url,
                imageAlignment,
                imageAltText,
                callToAction {
                    displayText,
                    url,
                    linkType,
                    openInNewTab
                }
            },
            _type == "callToAction" => {
                _type,
                _key,
                displayText,
                url,
                linkType,
                openInNewTab,
                icon,
                alignment,
                verticalAlignment,
                buttonStyle,
                additionalStyling
            },
            _type == "internalLink" => {
                _type,
                _key,
                title,
                slug
            },
            _type == "navLink" => {
                _type,
                _key,
                displayText,
                internalLink->{
                    _type,
                    title,
                    slug
                },
                externalLink {
                    url
                },
                showInFooter
            },
            _type == "timeline" => {
              ...
            },
            _type == "backgroundOptions" => {
                _type,
                backgroundColor,
                backgroundImage {
                    ...,
                    asset->
                }
            },
            _type == "posts" => {
                _type,
                posts[]->{
                    _type,
                    _id,
                    title,
                    slug,
                    summary,
                    "image": image.asset->url,
                    categories[]-> {
                        title
                    },
                    author->{
                        name
                    }
                }
            },
            _type == "siteConfig" => {
                _type,
                _id,
                title,
                url,
                tcnLicenceKey,
                footer {
                    copyrightText,
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
                            externalLink {
                                url
                            }
                        }
                    }
                }
            }
        }
        
    }`, { slug });
}

export async function getPosts(): Promise<PostsType[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "post"] | order(_createdAt desc){
            _type,
            _id,
            title, 
            subtitle,
            "slug": slug.current,
            summary,
            "image": image.asset->url,
            body,
            categories[]-> {
                title
            },
            author->{
                name
            }
        }
    `);
}

export async function getPost(slug: string): Promise<PostsType> {
    return createClient(clientConfig).fetch(groq`*[_type == "post"&& slug.current == $slug][0] {
        _type,
        _id,
        _createdAt,
        title, 
        subtitle,
        "slug": slug.current,
        summary,
        "image": image.asset->url,
        body,
        categories[]-> {
            title
        },
        author->{
            name
        }
        }`, { slug });
}

/**
 * Generate a cleaned slug for internal "location" links.
 */
export function getSlugForLink(link: NavLinkType): string | null {
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

/**
 * get a simple link for the sitemap.
 */
export function getLocationLink(display: string, slug: string): string | null {
    const locationSlug = display
      .toLowerCase()
      .replace('conveyancing in ', '')
      .replace(/ /g, '-')
    return slug.replace('{location}', locationSlug)
}