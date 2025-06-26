import React from 'react';
import { Hero, SiteConfig, Cta } from '@sanity/types/sanity-schema';
import imageUrlBuilder from '@sanity/image-url';
import clientConfig from "@sanity/utils/config/client.config";
import Logo from './Logo';
import CallToAction from './CallToAction';

interface HeroProps {
  hero: Hero;
  siteConfig: SiteConfig[];
}

const builder = imageUrlBuilder(clientConfig);

const HeroComponent: React.FC<HeroProps> = ({ hero, siteConfig }) => {
  const { title, strapline, backgroundImage } = hero;
  const backgroundImageUrl = backgroundImage?.asset ? builder.image(backgroundImage.asset).url() : '';

  return (
    <section
      className="hero h-96"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
        backgroundSize: 'cover',
      }}
    >
        <div className="flex flex-row w-full h-3/4 items-center justify-center text-white gap-72">
            <Logo siteConfig={siteConfig} />

            <div className="lg:flex lg:flex-col w-96 sm: hidden">
                <h1 className="text-3xl font-normal mb-4">{title}</h1>
                {strapline && <p className="text-xl font-light">{strapline}</p>}
            </div>
        </div>

        <div className="w-full flex flex-row justify-center space-x-4 mt-8">
          {hero.callToActions?.map((cta, index) => (
            <CallToAction
              key={index}
              cta={cta as Cta} 
              className={`px-6 py-2 bg-white hover:bg-gray-200 hover:shadow hover:shadow-gray-200 hover:text-gray-800 rounded-full text-gray-600 ${cta.verticalAlignment} ${cta.horizontalAlignment}`}
            />
          ))}
        </div>
    </section>
  );
};

export default HeroComponent;