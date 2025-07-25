import React from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "@cms/utils/config/client.config";

import type { SanityImageAsset, SanityReference } from "sanity-codegen";


const builder = imageUrlBuilder(clientConfig);

type SanityImageProps = {
  image: SanityReference<SanityImageAsset>;
  alt?: string;
  layout?: "intrinsic" | "responsive" | "fill" | "fixed"; // Next.js Image layout options
  objectFit?: "cover" | "contain" | "fill"; // Styling for object-fit
  width?: number; // Optional image width
  height?: number; // Optional image height
  className?: string; // Optional CSS classes
};

export const SanityImage: React.FC<SanityImageProps> = ({
  image,
  alt = "",
  layout = "intrinsic",
  objectFit = "cover",
  width,
  height,
  className,
}) => {
  if (!image) {
    console.warn("SanityImage: No image source provided.");
    return null;
  }

  // Generate the image URL
  const url = builder.image(image).url();

  if (!url) {
    console.warn("SanityImage: Unable to generate image URL.");
    return null;
  }

  return (
    <div className={className} style={{ position: "relative" }}>
      <Image
        src={url}
        alt={alt}
        layout={layout}
        width={width}
        height={height}
        objectFit={objectFit}
      />
    </div>
  );
};