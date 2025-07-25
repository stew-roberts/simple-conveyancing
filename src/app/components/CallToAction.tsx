import React from "react";
import { NavigationLink } from "./NavigationLink";
import { CallToActionType} from "@cms/types";

type Props = {
  cta: CallToActionType;
  className?: string;
};

const CtaButton: React.FC<Props> = ({ cta, className }) => {
  if (!cta?.link) return null;

  // Generate alignment styles
  const containerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: cta.horizontalAlignment,
    alignItems: cta.verticalAlignment,
    height: "100%", // Ensures vertical alignment in container
    width: "100%",  // Ensures horizontal alignment in container
  };

  return (
    <div style={containerStyles}>
      <NavigationLink link={cta.link} className={className} />
    </div>
  );
};

export default CtaButton;