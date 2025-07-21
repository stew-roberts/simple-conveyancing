import { CallToActionType } from "./cta-type";

export type HeroType = {
  _type: "hero";
  title: string;
  strapline: string;
  backgroundImage?: string;
  callToActions: CallToActionType[];
};
