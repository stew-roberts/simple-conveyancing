// Schema types
import page from './documents/page';
import siteConfig from './documents/siteConfig';
import author from './documents/author';
import category from './documents/category';
import post from './documents/post';

// Object types
import cta from './objects/cta';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import portableText from './objects/portableText';
import timelineItem from './objects/timelineItem';
import featureItem from './objects/featureItem';
import pricingCard from './objects/pricingCard';
import seo from './objects/seo';
import backgroundOptions from './objects/backgroundOptions';
import textOnly from './objects/textOnly';
import navigationLink from './objects/navigationLink';
import linkGroup from './objects/linkGroup';
import imageOnly from './objects/imageOnly';
import conveyancingQuote from './objects/conveyancingQuote';

// Page sections
import hero from './objects/hero';
import textWithImage from './objects/textWithImage'
import posts from './objects/posts';
import featureSection from './objects/featureSection';
import timeline from './objects/timeline';
import pricingSection from './objects/pricingSection';


export const schemaTypes = [
    siteConfig,
    embedHTML,
    figure,
    hero,
    page,
    post,
    author,
    category,
    posts,
    portableText,
    textWithImage,
    featureItem,
    featureSection,
    timelineItem,
    timeline,
    pricingCard,
    pricingSection,
    backgroundOptions,
    seo,
    cta,
    textOnly,
    imageOnly,
    navigationLink,
    linkGroup,
    conveyancingQuote,
];

