import { getPages, getPage, getSiteConfig } from "@cms/utils/sanity-utils";
import { replaceLocationInContent } from "@cms/utils/helpers";
import { Navigation } from "@components/Navigation";
import Footer from "@components/Footer";
import HeroSection from "@components/Hero";
import TextOnly from "@components/TextOnly";
import TextWithImage from "@components/TextWithImage";
import ConveyancingQuoteDisplay from "@components/ConveyancingQuoteDisplay";
import { ConveyancingQuoteType, HeroType, TextOnlyType, TextWithImageType } from "@cms/types";

export default async function Page({
    params,
  }: {
    params: Promise<{ location: string }>
  }) {
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
            const hero = section as HeroType;
            return <HeroSection key={index} hero={hero} siteConfig={siteConfig} />;
          case "textOnly":
            const textOnly = section as TextOnlyType;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return <TextOnly key={index} title={textOnly.title} text={textOnly.text as any} />;
          case "textWithImage":
            const textWithImage = section as TextWithImageType;
            return <TextWithImage key={index} textWithImage={textWithImage} />;
          case "conveyancingQuote":
            const tcnconfig = {
              licence: siteConfig[0]?.tcnLicenceKey || "",
              siteName: siteConfig[0]?.title || "Default Site Name",
            }
            const quote = section as ConveyancingQuoteType;
            return <ConveyancingQuoteDisplay key={index} quote={quote} tcnConfig={tcnconfig} />;
          default:
            return null;
        }
      })}
      <Footer siteConfig={siteConfig} />
    </div>
  );
}