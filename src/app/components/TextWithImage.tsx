import React from "react";
import { PortableText } from "@portabletext/react";
import { TextWithImageType } from "@sanity/types";
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
            <div className="flex items-center justify-between gap-4">
                {["top"].includes(imageAlignment) && textWithImage.image && (
                    <Image src={image} alt={imageAltText!} className="w-full" width={600} height={400} />
                )}
                {["left"].includes(imageAlignment) && textWithImage.image && (
                    <Image src={image} alt={imageAltText!} className="w-1/2 flex justify-center" width={600} height={400} />
                )}
                <div className={isImageAlignedHorizontally ? "w-1/2 p-6" : "w-full"}>
                {title && <h2 className="text-5xl font-normal mb-4">{title}</h2>}
                {text && <PortableText value={text} />}
                {callToActions && callToActions?.length > 0 && (
                    <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
                    {callToActions.map((cta, index) => (
                        <CtaButton key={index} cta={cta} />
                    ))}
                    </div>
                )}
                </div>

                {["right"].includes(imageAlignment) && textWithImage.image && (
                    <Image src={image} alt={imageAltText!} className="w-1/2 flex justify-center" width={600} height={400} />
                )}
                {["bottom"].includes(imageAlignment) && textWithImage.image && (
                    <Image src={image} alt={imageAltText!} className="w-full" width={600} height={400} />
                )}
            </div>
        </BackgroundContainer>
    </section>
  );
};

export default TextWithImageComponent;