import { getPages } from "@sanity/utils/sanity-utils";
import { getPost } from "@sanity/utils/sanity-utils";
import { getSiteConfig } from "@sanity/utils/sanity-utils";
import { Navigation } from "@components/Navigation";
import { PortableText } from "next-sanity";
import Logo from "@components/Logo";
import Footer from "@components/Footer";
import Tag from "@components/Tag";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const siteConfig = await getSiteConfig();
  const pages = await getPages();
  const post = await getPost(slug);
  const postedDate = new Date(post._createdAt);

  return (
    <div>
      <Navigation pages={pages} siteConfig={siteConfig} />

        <section
        className="hero h-96 bg-linear-65 from-purple-500 to-pink-500"
        style={{
            backgroundImage: post.image ? `url(${post.image})` : 'none',
            backgroundSize: 'cover',
        }}
        >
            <div className="flex flex-row w-full h-3/4 items-center justify-between px-48 text-white gap-72">
                <Logo siteConfig={siteConfig} />
                <div className="lg:flex lg:flex-col w-96 sm: hidden">
                    <h1 className="text-3xl font-normal mb-4">{post.title}</h1>
                    {post.subtitle && <p className="text-xl font-light">{post.subtitle}</p>}
                </div>
            </div>
        </section>

        <div className="container mx-auto px-4 py-6">
            <p>Posted by: {post.author.name}</p>
            <p>Date: {postedDate.toDateString()}</p>
            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            {post.subtitle && <p className="text-lg mb-4">{post.subtitle}</p>}
            {post.body && (
                <PortableText value={post.body} />
            )}
        </div>

        <div className="w-full flex border-gray-300 m-12 container justify-center">
            {post.categories.map((category, index) => (
                <div key={index} className="m-2">
                    {category && <Tag title={category.title} />}
                </div>
            ))}
        </div>

      <Footer siteConfig={siteConfig} />
    </div>
  );
}