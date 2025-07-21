import { getPages, getPage, getSiteConfig } from "@sanity/utils/sanity-utils";
import { replaceLocationInContent } from "@sanity/utils/helpers";
import { Navigation } from "@components/Navigation";
import Footer from "@components/Footer";
import HeroSection from "@components/Hero";
import TextOnly from "@components/TextOnly";
import TextWithImage from "@components/TextWithImage";
import ConveyancingQuoteDisplay from "@components/ConveyancingQuoteDisplay";

type Props = {
  params: { location: string };
};

export default async function Page({ params }: Props) {
  const { location } = await params;
  const siteConfig = await getSiteConfig();
  const pages = await getPages();
  const rawPage = await getPage(`conveyancing/{location}`);

  const page = {
    ...rawPage,
    content: replaceLocationInContent(rawPage.content, location),
  };

  return (
    <div>
      <Navigation pages={pages} siteConfig={siteConfig} />
      {page && page.content?.map((section, index) => {
        switch (section._type) {
          case "hero":
            return <HeroSection key={index} hero={section} siteConfig={siteConfig} />;
          case "textOnly":
            return <TextOnly key={index} title={section.title} text={section.text} />;
          case "textWithImage":
            return <TextWithImage key={index} textWithImage={section} />;
          case "conveyancingQuote":
            const tcnconfig = {
              licence: siteConfig[0]?.tcnLicenceKey || "",
              siteName: siteConfig[0]?.title || "Default Site Name",
            }
            return <ConveyancingQuoteDisplay key={index} quote={section} tcnConfig={tcnconfig} />;
          default:
            return null;
        }
      })}
      <Footer siteConfig={siteConfig} />
    </div>
  );
}