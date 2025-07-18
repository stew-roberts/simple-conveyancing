import React from "react";
import { SiteConfigType } from "@sanity/types";
import { NavigationLink } from "./NavigationLink";
import Link from "next/link";

type FooterProps = {
  siteConfig: SiteConfigType[];
};

const Footer: React.FC<FooterProps> = ({ siteConfig }) => {
    const footerLinks = siteConfig[0]?.footer.linkGroups || [];
  return (
    <footer className="bg-gray-800 text-white w-full p-24">
      <section id="footer" className="flex justify-between">
          {footerLinks.map((group, index) => (
            <div key={index} className="px-4 mb-4">
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
      <section className="text-center mt-8">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} <Link href="/" className="text-white hover:underline">{siteConfig[0]?.title || "Your Site Name"}</Link>. All rights reserved.
        </p>
      </section>
      <section className="text-center mt-4">
        <p className="text-sm text-gray-400">
          {siteConfig[0]?.footer?.copyrightText || "This content is copyrighted and may not be reproduced without permission."}
        </p>
      </section>
    </footer>
  );
};

export default Footer;