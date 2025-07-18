import { getPages } from "@sanity/utils/sanity-utils";
import { getPage } from "@sanity/utils/sanity-utils";
import { getSiteConfig } from "@sanity/utils/sanity-utils";
import { Navigation } from "./components/Navigation";

import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import TextOnly from "./components/TextOnly";
import TextWithImage from "./components/TextWithImage";

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
            return <HeroSection key={index} hero={section} siteConfig={siteConfig} />;
          case "textOnly":
            return <TextOnly key={index} title={section.title} text={section.text} />;
          case "textWithImage":
            return <TextWithImage key={index} textWithImage={section} />;
          default:
            return null;
        } 
      })}
      <Footer siteConfig={siteConfig} />
    </div>
  );
}
