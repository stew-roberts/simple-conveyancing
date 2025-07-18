import { PortableTextBlock } from "next-sanity";
import { CallToActionType } from "./cta-type";
import { BackgroundOptionsType } from "./background-options-type";


export type TextWithImageType = {
  _type: "textWithImage";
  title?: string;
  text?: PortableTextBlock;
  image: string;
  imageAltText?: string;
  imageAlignment?: "top" | "left" | "right" | "bottom";
  callToActions?: CallToActionType[];
  backgroundOptions?: BackgroundOptionsType;
};