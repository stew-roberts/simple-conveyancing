import React from "react";
import { BackgroundOptions } from "@sanity/types/sanity-schema";
import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "@sanity/utils/config/client.config";

type Props = {
  children: React.ReactNode;
  backgroundOptions?: BackgroundOptions;
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
      enableBackgroundImage && backgroundImage?.asset
        ? `url(${builder.image(backgroundImage.asset).url()})`
        : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return <div style={{ ...backgroundStyles, padding: "1rem" }}>{children}</div>;
};