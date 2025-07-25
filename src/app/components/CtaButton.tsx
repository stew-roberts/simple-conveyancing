import React from "react";
import { CallToActionType } from "@cms/types";

type Props = {
  cta: CallToActionType;
};

export const CtaButton: React.FC<Props> = ({ cta }) => {
  if (!cta?.link) return null;

  const { linkType, displayText, internalLink, externalLink } = cta.link;

  const href = linkType === "internal" ? internalLink?.slug?.current : externalLink?.url;

  return (
    <a
      href={href || "#"}
      target={cta.openInNewTab ? "_blank" : "_self"}
      rel={cta.openInNewTab ? "noopener noreferrer" : undefined}
      style={{ padding: "0.5rem 1rem", background: "#007BFF", color: "#fff", borderRadius: "4px" }}
    >
      {displayText || "Learn More"}
    </a>
  );
};