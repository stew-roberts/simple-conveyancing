import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Site Configuration
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Site Title — `string`
   *
   * The title of the website.
   */
  title?: string;

  /**
   * Site URL — `url`
   *
   * The main site URL. Used to create canonical URLs.
   */
  url?: string;

  /**
   * Contact Number — `string`
   *
   * Main contact number for the site.
   */
  telephone?: string;

  /**
   * Contact Email — `string`
   *
   * Main contact email for the site.
   */
  email?: string;

  /**
   * Front Page — `reference`
   *
   * Choose the page to be used as the front page.
   */
  frontpage?: SanityReference<Page>;

  /**
   * Brand Logo — `image`
   *
   * Best choice is to use an SVG where colors are set with currentColor.
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Alternative Text — `string`
   *
   * Important for SEO and accessibility.
   */
  alt?: string;

  /**
   * Include Conveyancing Plugin — `boolean`
   *
   * Enable this to include the Conveyancing Plugin.
   */
  includeConveyancingPlugin?: boolean;

  /**
   * TCN Licence Key — `string`
   *
   * The licence key for the TCN Conveyancing Plugin.
   */
  tcnLicenceKey?: string;

  /**
   * Footer Title — `string`
   *
   * Optional title for the footer (e.g., "Stay Connected").
   */
  footerTitle?: string;

  /**
   * Text Blocks — `array`
   *
   * Add multiple text blocks.
   */
  textGroups?: Array<SanityKeyed<TextOnly>>;

  /**
   * Link Groups — `array`
   *
   * Add multiple groups of footer links.
   */
  linkGroups?: Array<SanityKeyed<LinkGroup>>;

  /**
   * Copyright Text — `string`
   *
   * Optional copyright text to display at the bottom of the footer.
   */
  copyrightText?: string;

  /**
   * Background Options — `array`
   *
   * optional background options for the footer.
   */
  backgroundOptions?: Array<SanityKeyed<BackgroundOptions>>;

  /**
   * Global SEO — `seo`
   *
   * SEO settings for the entire site.
   */
  globalSEO?: Seo;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   * The title of the page
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   * The slug for the page
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Order Rank — `string`
   *
   *
   */
  orderRank?: string;

  /**
   * Page Sections — `array`
   *
   * The sections that make up the page. Choose a section and fill in the fields to add content to the page.
   */
  content?: Array<
    | SanityKeyed<Hero>
    | SanityKeyed<TextOnly>
    | SanityKeyed<ImageOnly>
    | SanityKeyed<TextWithImage>
    | SanityKeyed<Cta>
    | SanityKeyed<FeatureSection>
    | SanityKeyed<Timeline>
    | SanityKeyed<PricingSection>
    | SanityKeyed<Posts>
    | SanityKeyed<ConveyancingQuote>
    | SanityKeyed<Seo>
  >;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Subtitle — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Summary — `text`
   *
   *
   */
  summary?: string;

  /**
   * Body — `portableText`
   *
   *
   */
  body?: PortableText;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Bio — `text`
   *
   *
   */
  bio?: string;

  /**
   * Gravatar URL — `url`
   *
   *
   */
  gravatar?: string;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

export type EmbedIframe = {
  _type: "embedIframe";
  /**
   * Source URL — `url`
   *
   *
   */
  src?: string;

  /**
   * Width — `string`
   *
   *
   */
  width?: string;

  /**
   * Height — `string`
   *
   *
   */
  height?: string;

  /**
   * Title — `string`
   *
   * Optional title for accessibility.
   */
  title?: string;
};

export type Figure = {
  _type: "figure";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Caption — `string`
   *
   * Optional caption for the image.
   */
  caption?: string;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessibility.
   */
  alt?: string;
};

export type Hero = {
  _type: "hero";
  /**
   * Title — `string`
   *
   * The main title for the hero section.
   */
  title?: string;

  /**
   * Strapline — `string`
   *
   * An optional tagline or subtitle for the hero section.
   */
  strapline?: string;

  /**
   * Background Image — `image`
   *
   * The main image for the hero section.
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Calls to Action — `array`
   *
   * Add one or more call-to-action buttons for the hero section.
   */
  callToActions?: Array<SanityKeyed<Cta>>;
};

export type Posts = {
  _type: "posts";
  /**
   * Title — `string`
   *
   * Title for the blog post list.
   */
  title?: string;

  /**
   * Display Title in Page? — `boolean`
   *
   * Choose whether to display the title in the page as well as the root title.
   */
  displayTitle?: boolean;
};

export type PortableText = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<Figure>
  | SanityKeyed<{
      _type: "embed";
      /**
       * Embed URL — `url`
       *
       * Add the URL for the embeddable content (e.g., YouTube, Vimeo, etc.).
       */
      url?: string;
    }>
>;

export type TextWithImage = {
  _type: "textWithImage";
  /**
   * Title — `string`
   *
   * Title for the text with image section.
   */
  title?: string;

  /**
   * Text — `array`
   *
   * Detailed text for the text with image section.
   */
  text?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Image — `image`
   *
   * Image for the text with image section.
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Image Alt Text — `string`
   *
   * Alternative text for the image (for accessibility).
   */
  imageAltText?: string;

  /**
   * Image Alignment — `string`
   *
   * Choose the alignment of the image.
   */
  imageAlignment?: "top" | "left" | "right" | "bottom";

  /**
   * Call to Actions — `array`
   *
   * Add one or more call-to-action buttons for the hero section.
   */
  callToActions?: Array<SanityKeyed<Cta>>;

  /**
   * Background Options — `backgroundOptions`
   *
   * Configure the background for this component.
   */
  backgroundOptions?: BackgroundOptions;
};

export type FeatureItem = {
  _type: "featureItem";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Font Awesome Icon — `string`
   *
   * Enter the Font Awesome icon name (e.g., "faCoffee").
   */
  fontAwesomeIcon?: string;
};

export type FeatureSection = {
  _type: "featureSection";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Feature Items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<FeatureItem>>;
};

export type TimelineItem = {
  _type: "timelineItem";
  /**
   * Title — `string`
   *
   * The title of the event, role, or milestone (e.g., Job title, project name, event name)
   */
  title?: string;

  /**
   * Date Range — `string`
   *
   * The time period for this event, role, or milestone (e.g., 2020–2022)
   */
  dateRange?: string;

  /**
   * Location — `string`
   *
   * Where this event or role took place (optional)
   */
  location?: string;

  /**
   * Description — `text`
   *
   * Details about this event, role, or milestone. You can include responsibilities, achievements, or notes.
   */
  description?: string;
};

export type Timeline = {
  _type: "timeline";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Strapline — `string`
   *
   *
   */
  strapline?: string;

  /**
   * Items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<TimelineItem>>;
};

export type PricingCard = {
  _type: "pricingCard";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Details — `text`
   *
   *
   */
  details?: string;

  /**
   * Points — `text`
   *
   *
   */
  points?: string;

  /**
   * Price — `string`
   *
   *
   */
  price?: string;

  /**
   * Currency — `string`
   *
   *
   */
  currency?: "USD" | "EUR" | "GBP";

  /**
   * Price Suffix — `string`
   *
   *
   */
  priceSuffix?: string;

  /**
   * Call to Action — `cta`
   *
   *
   */
  cta?: Cta;

  /**
   * Is Featured — `boolean`
   *
   *
   */
  isFeatured?: boolean;

  /**
   * Discount (%) — `number`
   *
   * Optional discount percentage (e.g., 10 for 10% off)
   */
  discount?: number;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type PricingSection = {
  _type: "pricingSection";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Pricing Items — `array`
   *
   *
   */
  pricingItems?: Array<SanityKeyed<PricingCard>>;
};

export type BackgroundOptions = {
  _type: "backgroundOptions";
  /**
   * Enable Background Colour — `boolean`
   *
   * Enable a solid background colour for this component.
   */
  enableBackgroundColour?: boolean;

  /**
   * Background Colour — `string`
   *
   * Enter a valid CSS color value (e.g., #ffffff, rgba(0,0,0,0.5)).
   */
  backgroundColour?: string;

  /**
   * Enable Background Image — `boolean`
   *
   * Enable a background image for this component.
   */
  enableBackgroundImage?: boolean;

  /**
   * Background Image — `image`
   *
   *
   */
  backgroundImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Seo = {
  _type: "seo";
  /**
   * Meta Title — `string`
   *
   * The title for the page (max 60 characters).
   */
  metaTitle?: string;

  /**
   * Meta Description — `text`
   *
   * The description for the page (max 160 characters).
   */
  metaDescription?: string;

  /**
   * Keywords — `array`
   *
   * A list of keywords relevant to the page.
   */
  keywords?: Array<SanityKeyed<string>>;

  /**
   * Open Graph Image — `image`
   *
   * Image to display when the page is shared on social media.
   */
  openGraphImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * No Index — `boolean`
   *
   * Enable this option if you want to prevent search engines from indexing this page.
   */
  noIndex?: boolean;
};

export type Cta = {
  _type: "cta";
  /**
   * Navigation Link — `navigationLink`
   *
   * The location the button will link to. Can be an internal page or external URL.
   */
  link?: NavigationLink;

  /**
   * Open in New Tab — `boolean`
   *
   * If checked, the link will open in a new tab.
   */
  openInNewTab?: boolean;

  /**
   * Vertical Alignment — `string`
   *
   * Align the button vertically within its container.
   */
  verticalAlignment?: "top" | "center" | "bottom";

  /**
   * Horizontal Alignment — `string`
   *
   * Align the button horizontally within its container.
   */
  horizontalAlignment?: "left" | "center" | "right";
};

export type TextOnly = {
  _type: "textOnly";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Text — `portableText`
   *
   *
   */
  text?: PortableText;
};

export type ImageOnly = {
  _type: "imageOnly";
  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Image Alt Text — `string`
   *
   * Alternative text for the image (for accessibility).
   */
  altText?: string;
};

export type NavigationLink = {
  _type: "navigationLink";
  /**
   * Display Text — `string`
   *
   * The text to display for the navigation link.
   */
  displayText?: string;

  /**
   * Link Type — `string`
   *
   * Specify if the link is internal or external.
   */
  linkType?: "internal" | "external";

  /**
   * Internal Page — `reference`
   *
   * Select a page for internal links.
   */
  internalLink?: SanityReference<Page>;

  /**
   * External URL — `url`
   *
   * Required for external links. Enter the full URL (e.g., "https://example.com").
   */
  url?: string;

  /**
   * Open in New Tab — `boolean`
   *
   * Should this link open in a new tab?
   */
  openInNewTab?: boolean;

  /**
   * Icon (optional) — `string`
   *
   * Optional icon (Font Awesome class or similar).
   */
  icon?: string;

  /**
   * Sub-links — `array`
   *
   * Add sub-links for this navigation item.
   */
  subLinks?: Array<SanityKeyed<NavigationLink>>;
};

export type LinkGroup = {
  _type: "linkGroup";
  /**
   * Group Title — `string`
   *
   * The title of this group of links.
   */
  groupTitle?: string;

  /**
   * Links — `array`
   *
   * Links in this group.
   */
  links?: Array<SanityKeyed<NavigationLink>>;
};

export type ConveyancingQuote = {
  _type: "conveyancingQuote";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `portableText`
   *
   *
   */
  description?: PortableText;
};

export type Documents = SiteConfig | Page | Post | Author | Category;
