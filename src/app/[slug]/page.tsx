import { getPages, getPage, getPosts, getSiteConfig } from "@sanity/utils/sanity-utils";
import { Navigation } from "@components/Navigation";
import Footer from "@components/Footer";
import HeroSection from "@components/Hero";
import TextOnly from "@components/TextOnly";
import TextWithImage from "@components/TextWithImage";
import ConveyancingQuoteDisplay from "@components/ConveyancingQuoteDisplay";
import Contact from "@components/Contact";
import Timeline from "@components/Timeline";
import PostList from "@components/PostList";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const { slug } = params; // ✅ Fixed this line

  const siteConfig = await getSiteConfig();
  const pages = await getPages();
  const page = await getPage(slug);
  const posts = await getPosts();

  return (
    <div>
      <Navigation pages={pages} siteConfig={siteConfig} />
      {page.content?.map((section, index) => {
        switch (section._type) {
          case "hero":
            return <HeroSection key={index} hero={section} siteConfig={siteConfig} />;
          case "textOnly":
            return <TextOnly key={index} title={section.title} text={section.text} />;
          case "textWithImage":
            return <TextWithImage key={index} textWithImage={section} />;
          case "contactForm":
            return (
              <Contact
                key={index}
                title={section.title}
                text={section.text}
                address={siteConfig[0].address}
                email={siteConfig[0].email}
              />
            );
          case "conveyancingQuote":
            const tcnconfig = {
              licence: siteConfig[0]?.tcnLicenceKey || "",
              siteName: siteConfig[0]?.title || "Default Site Name",
            };
            return <ConveyancingQuoteDisplay key={index} quote={section} tcnConfig={tcnconfig} />;
          case "timeline":
            return (
              <Timeline
                _type="timeline"
                key={index}
                items={section.items}
                title={section.title}
                strapline={section.strapline}
              />
            );
          case "posts":
            return <PostList key={index} posts={posts} />;
          default:
            return null;
        }
      })}
      <Footer siteConfig={siteConfig} />
    </div>
  );
}
