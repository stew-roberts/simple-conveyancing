import { BackgroundOptionsType } from "./background-options-type";
import { CallToActionType } from "./cta-type";
import { HeroType } from "./hero-type";
import { InternalLinkType } from "./internal-link-type";
import { NavLinkType } from "./navlink-type";
import { TextWithImageType } from "./text-with-image-type";
import { ImageOnlyType } from "./image-only-type";
import { SiteConfigType } from "./site-config-type";
import { TextOnlyType } from "./text-only-type";
import { ConveyancingQuoteType } from "./conveyancing-quote-type";
import { ContactFormType } from "./contact-form-type";
import { TimelineItemType, TimelineType } from "./timeline-type";
import { PostsType } from "./post-type";

export interface Page {
  _id: string;
  _type: "page";
  title?: string;
  slug: { _type: "slug"; current: string };
  orderRank?: string;
  content?: Array<
    | HeroType
    | TextOnlyType
    | ImageOnlyType
    | TextWithImageType
    | CallToActionType
    | InternalLinkType
    | NavLinkType
    | BackgroundOptionsType
    | SiteConfigType
    | ConveyancingQuoteType
    | ContactFormType
    | TimelineType
    | TimelineItemType
    | PostsType
  >;
}