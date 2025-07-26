import { getPages } from "@cms/utils/sanity-utils";
import { getPage } from "@cms/utils/sanity-utils";
import { getSiteConfig } from "@cms/utils/sanity-utils";
import { Navigation } from "./components/Navigation";

import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import TextOnly from "./components/TextOnly";
import TextWithImage from "./components/TextWithImage";
import { HeroType, TextOnlyType, TextWithImageType } from "@cms/types";

export default async function Home() {
  const siteConfig = await getSiteConfig();
  const pages = await getPages();
  const page = await getPage("home");

  return (
    <div>
      <Navigation pages={pages} siteConfig={siteConfig} />
      {page.content?.map((section, index) => {
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
          default:
            return null;
        } 
      })}
      <Footer siteConfig={siteConfig} />
    </div>
  );
}
