import React from "react";
import { SiteConfig } from "@sanity/types/sanity-schema";
import { NavigationLink } from "./NavigationLink";

type FooterProps = {
  siteConfig: SiteConfig[];
};

const Footer: React.FC<FooterProps> = ({ siteConfig }) => {
    const footerLinks = siteConfig[0]?.footer.linkGroups || [];
  return (
    <section id="footer" className="bg-gray-800 text-white py-6 flex flex-row items-center">
        {footerLinks.map((group, index) => (
          <div key={index} className="container mx-auto px-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">{group?.groupTitle}</h3>
            <ul className="list-none p-0">  
                {group?.links?.map((link, linkIndex) => (
                    <li key={linkIndex} className="mb-1">
                      <NavigationLink link={link} className="text-white hover:underline" />
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </section>
  );
};

export default Footer;