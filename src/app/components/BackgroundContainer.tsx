import React from "react";
import { BackgroundOptionsType } from "@sanity/types";
import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "@sanity/utils/config/client.config";

type Props = {
  children: React.ReactNode;
  backgroundOptions?: BackgroundOptionsType;
};

const builder = imageUrlBuilder(clientConfig);

export const BackgroundContainer: React.FC<Props> = ({ children, backgroundOptions }) => {
    
  const {
    enableBackgroundColour,
    backgroundColour,
    enableBackgroundImage,
    backgroundImage,
  } = backgroundOptions || {};

  const backgroundStyles: React.CSSProperties = {
    backgroundColor: enableBackgroundColour && backgroundColour ? backgroundColour : undefined,
    backgroundImage:
      enableBackgroundImage && backgroundImage
        ? `url(${builder.image(backgroundImage).url()})`
        : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return <div style={{ ...backgroundStyles, padding: "1rem" }}>{children}</div>;
};