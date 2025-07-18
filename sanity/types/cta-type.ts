import { NavLinkType } from "./navlink-type";
export type CallToActionType = {
  _type: "cta";
  key: number;
  link?: NavLinkType;
  openInNewTab?: boolean;
  verticalAlignment?: "top" | "center" | "bottom";
  horizontalAlignment?: "left" | "center" | "right";
};