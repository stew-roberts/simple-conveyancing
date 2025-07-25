import { getSiteConfig } from "@cms/utils/sanity-utils";
import { getRoutes } from "@cms/utils/helpers"

export default async function sitemap() {
	const siteConfig = await getSiteConfig();
	const routes = await getRoutes()
	const baseUrl = siteConfig[0].url

	const urls = routes.allRoutesSlugs.map(
		({ slug, lastModified }: { slug: string; lastModified: string | Date }) => ({
			url: `${baseUrl}${slug}`,
			lastModified
		})
	)

	return urls
}
