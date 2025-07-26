import { notFound } from "next/navigation";
import { getPages, getPage, getPosts, getSiteConfig } from "@cms/utils/sanity-utils";
import { Navigation } from "@components/Navigation";
import { ConveyancingQuoteType, HeroType, TextOnlyType, TextWithImageType, TimelineType } from "@cms/types";
import Footer from "@components/Footer";
import HeroSection from "@components/Hero";
import TextOnly from "@components/TextOnly";
import TextWithImage from "@components/TextWithImage";
import ConveyancingQuoteDisplay from "@components/ConveyancingQuoteDisplay";
import Contact from "@components/Contact";
import Timeline from "@components/Timeline";
import PostList from "@components/PostList";
import { ContactFormType } from "@cms/types/contact-form-type";

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
  const { slug } = await params; // ✅ Fixed this line

  const siteConfig = await getSiteConfig();
  const pages = await getPages();
  const page = await getPage(slug);
  const posts = await getPosts();

  if (!page) {
    notFound();
  }

  return (
    <div>
      <Navigation pages={pages} siteConfig={siteConfig} />
      {page?.content?.map((section, index) => {
        switch (section._type) {
          case "hero":
            return <HeroSection key={index} hero={section as HeroType} siteConfig={siteConfig} />;
          case "textOnly":
            const textOnly = section as TextOnlyType;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return <TextOnly key={index} title={textOnly.title} text={textOnly.text as any} />;
          case "textWithImage":
            return <TextWithImage key={index} textWithImage={section as TextWithImageType} />;
          case "contactForm":
            const contactForm = section as ContactFormType;
            return (
              <Contact
                key={index}
                title={contactForm.title}
                text={contactForm.text}
                address={siteConfig[0].address}
                email={siteConfig[0].email}
              />
            );
          case "conveyancingQuote":
            const tcnconfig = {
              licence: siteConfig[0]?.tcnLicenceKey || "",
              siteName: siteConfig[0]?.title || "Default Site Name",
            };
            return <ConveyancingQuoteDisplay key={index} quote={section as ConveyancingQuoteType} tcnConfig={tcnconfig} />;
          case "timeline":
            const timeline = section as TimelineType;
            return (
              <Timeline
                key={index}
                _type="timeline"
                items={timeline.items}
                title={timeline.title}
                strapline={timeline.strapline}
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
