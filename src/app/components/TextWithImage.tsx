import React from "react";
import { PortableText } from "@portabletext/react";
import { TextWithImageType } from "@cms/types";
import { BackgroundContainer } from "./BackgroundContainer";
import { CtaButton } from "./CtaButton";
import Image from "next/image";

type Props = {
  textWithImage: TextWithImageType;
};

const TextWithImageComponent: React.FC<Props> = ({ textWithImage }) => {
  const {
    title,
    text,
    imageAltText,
    imageAlignment = "left",
    callToActions,
    backgroundOptions,
  } = textWithImage;

  const image = textWithImage.image;
  const isImageAlignedHorizontally = ["left", "right"].includes(imageAlignment);

  return (
    <section className="container mx-auto px-4 py-6">
      <BackgroundContainer backgroundOptions={backgroundOptions}>
        <div
          className={`flex flex-col gap-6 ${
            isImageAlignedHorizontally ? "lg:flex-row lg:items-center" : ""
          }`}
        >
          {["top"].includes(imageAlignment) && image && (
            <div className="w-full">
              <Image
                src={image}
                alt={imageAltText || ""}
                className="w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          )}

          {["left"].includes(imageAlignment) && image && (
            <div className="w-full lg:w-1/2">
              <Image
                src={image}
                alt={imageAltText || ""}
                className="w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          )}

          <div className={`w-full ${isImageAlignedHorizontally ? "lg:w-1/2" : ""} p-4`}>
            {title && <h2 className="text-4xl font-normal mb-4">{title}</h2>}
            {text && <PortableText value={text} />}
            {callToActions && callToActions.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {callToActions.map((cta, index) => (
                  <CtaButton key={index} cta={cta} />
                ))}
              </div>
            )}
          </div>

          {["right"].includes(imageAlignment) && image && (
            <div className="w-full lg:w-1/2">
              <Image
                src={image}
                alt={imageAltText || ""}
                className="w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          )}

          {["bottom"].includes(imageAlignment) && image && (
            <div className="w-full">
              <Image
                src={image}
                alt={imageAltText || ""}
                className="w-full h-auto"
                width={600}
                height={400}
              />
            </div>
          )}
        </div>
      </BackgroundContainer>
    </section>
  );
};

export default TextWithImageComponent;