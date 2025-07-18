import { createClient, groq } from "next-sanity";
import clientConfig from "@sanity/utils/config/client.config";
import { getLocationLink } from "@sanity/utils/sanity-utils";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function replaceLocationInContent<T>(content: T, location: string): T {
  // Normalize location: lowercase → split on space or hyphen → title case → join with space
  const titleCaseLocation = location
    .toLowerCase()
    .split(/[\s-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const replace = (value: any): any => {
    if (typeof value === "string") {
      return value.replace(/{location}/g, titleCaseLocation);
    }

    if (Array.isArray(value)) {
      return value.map(replace);
    }

    if (value !== null && typeof value === "object") {
      const replacedObject: any = {};
      for (const key in value) {
        replacedObject[key] = replace(value[key]);
      }
      return replacedObject;
    }

    return value;
  };

  return replace(content);
}

export function slugToAbsUrl(slug: string, baseUrl: string): string {
  return baseUrl + getPathFromSlug(slug)
}

// "/product//" => "/product/"
function removeDoubleSlashes(path: string): string {
  return path.replace(/\/{2,}/g, '/')
}

// "contact/" => "/contact/"
export function getPathFromSlug(slug: string): string {
  return removeDoubleSlashes(`/${slug || ''}`)
}

export const getPageRoutes = async () => {
  const {pageRoutes} = await createClient(clientConfig).fetch(groq`{
    "pageRoutes": *[_type == "page" && showInNavigation ] | order(orderRank) {
      "slug":slug.current,
      "lastModified": _updatedAt
    }
  }`)

  return {pageRoutes};
}

export const getPostRoutes = async () => {
  const {postRoutes} = await createClient(clientConfig).fetch(groq`
    {
        "postRoutes": *[_type == "post"] {
          "slug":slug.current,
            "lastModified": _updatedAt
        }
    }`)

  return {postRoutes};
}

export const getFooterRoutes = async () => {
  const {footerRoutes} = await createClient(clientConfig).fetch(groq`
    {
        "footerRoutes": *[_type == "siteConfig" ][0] {
          "links": linkGroups[][showInSitemap == true].links[]{
            "display": displayText,
            "slug": internalLink->slug.current
          }
        }
    }`)

  return {footerRoutes};
}

export const getRoutes = async () => {
  const {pageRoutes} = await getPageRoutes();
  const {postRoutes} = await getPostRoutes();
  const {footerRoutes} = await getFooterRoutes();



  const allRoutesSlugs = [
    ...pageRoutes,
    ...footerRoutes.links.map((link: { slug: string, display: string }) => ({slug: getLocationLink(link.display, link.slug), lastModified: new Date()})),
    ...postRoutes.map((post: { slug: string, lastModified: string | Date }) => ({
      slug: 'post/' + post.slug,
      lastModified: post.lastModified
    }))
  ];

  return {
    allRoutesSlugs
  };
}