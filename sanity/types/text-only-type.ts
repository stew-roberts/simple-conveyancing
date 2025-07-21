import { PortableTextBlock } from "sanity";

export type TextOnlyType = {
  _type: "textOnly";
  title: string;
  text: PortableTextBlock[];
};