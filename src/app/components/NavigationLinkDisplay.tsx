import React from "react";
import Link from "next/link"; // Assuming Next.js for internal links

export type NavigationLink = {
  _type: "navigationLink";
  displayText?: string;
  linkType?: "internal" | "external";
  internalLink?: { _ref: string, _type: string }; // Replace with actual `Page` type if available
  url?: string;
  openInNewTab?: boolean;
  icon?: string;
  subLinks?: Array<NavigationLink>;
};

type Props = {
  link: NavigationLink;
};

const NavigationLinkDisplay: React.FC<Props> = ({ link }) => {
  if (!link) return null;

  const {
    displayText,
    linkType,
    internalLink,
    url,
    openInNewTab,
    icon,
    subLinks,
  } = link;

  const renderLink = () => {
    if (linkType === "internal" && internalLink?.slug?.current) {
      return (
        <Link href={`/${internalLink.slug.current}`}>
          <a target={openInNewTab ? "_blank" : "_self"} rel={openInNewTab ? "noopener noreferrer" : undefined}>
            {icon && <i className={icon}></i>}
            {displayText}
          </a>
        </Link>
      );
    } else if (linkType === "external" && url) {
      return (
        <a href={url} target={openInNewTab ? "_blank" : "_self"} rel="noopener noreferrer">
          {icon && <i className={icon}></i>}
          {displayText}
        </a>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="navigation-link">
      <div className="link-item">{renderLink()}</div>
      {subLinks && subLinks.length > 0 && (
        <ul className="sub-links">
          {subLinks.map((subLink, index) => (
            <li key={index}>
              <NavigationLinkDisplay link={subLink} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavigationLinkDisplay;