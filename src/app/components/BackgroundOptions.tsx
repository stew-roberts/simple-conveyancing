import React from "react";
import { BackgroundOptions } from "@sanity/types/sanity-schema";

type Props = {
  backgroundOptions: BackgroundOptions;
  children: React.ReactNode;
};

const BackgroundContainer: React.FC<Props> = ({ backgroundOptions, children }) => {
  const {
    enableBackgroundColour,
    backgroundColour,
    enableBackgroundImage,
    backgroundImage,
  } = backgroundOptions;

  const containerStyle: React.CSSProperties = {
    backgroundColor: enableBackgroundColour ? backgroundColour || "transparent" : "transparent",
    backgroundImage: enableBackgroundImage && backgroundImage?.asset?.url 
      ? `url(${backgroundImage.asset.url})` 
      : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div style={containerStyle}>{children}</div>;
};

export default BackgroundContainer;