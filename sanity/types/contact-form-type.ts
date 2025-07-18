import { PortableTextBlock } from "next-sanity";

export type ContactFormType = {
  _type: "contactForm";
  title: string;
  text: PortableTextBlock[]; 
};