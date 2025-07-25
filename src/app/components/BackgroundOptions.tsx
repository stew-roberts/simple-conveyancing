import React from "react";
import { BackgroundOptionsType } from "@cms/types";

type Props = {
  backgroundOptions: BackgroundOptionsType;
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
    backgroundImage: enableBackgroundImage && backgroundImage 
      ? `url(${backgroundImage})` 
      : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div style={containerStyle}>{children}</div>;
};

export default BackgroundContainer;