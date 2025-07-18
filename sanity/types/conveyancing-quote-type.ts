import { PortableTextBlock } from "next-sanity";

export type ConveyancingQuoteType = {
  _type: "conveyancingQuote";
  tcnLicenseKey: string
  title: string;
  description: PortableTextBlock[]; 
};