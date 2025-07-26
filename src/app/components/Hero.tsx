import React from 'react';
import { HeroType, SiteConfigType, CallToActionType } from '@cms/types';
import imageUrlBuilder from '@sanity/image-url';
import clientConfig from '@cms/utils/config/client.config';
import Logo from './Logo';
import CallToAction from './CallToAction';

interface HeroProps {
  hero: HeroType;
  siteConfig: SiteConfigType[];
}

const builder = imageUrlBuilder(clientConfig);

const HeroComponent: React.FC<HeroProps> = ({ hero, siteConfig }) => {
  const { title, strapline, backgroundImage, callToActions } = hero;
  const backgroundImageUrl = backgroundImage ? builder.image(backgroundImage).url() : '';

  return (
    <section
      className="hero bg-linear-65 from-purple-500 to-pink-500 bg-cover bg-center"
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : 'none',
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-48 py-12 text-white gap-12">
        <Logo
          siteConfig={siteConfig}
          className="w-40 h-20 sm:w-56 sm:h-28 lg:w-96 lg:h-96"
          imageClassName="object-contain"
        />

        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h1>
          {strapline && <p className="text-lg sm:text-xl font-light">{strapline}</p>}
        </div>
      </div>

      {callToActions?.length > 0 && (
        <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 px-4 pb-12">
          {callToActions.map((cta, index) => (
            <CallToAction
              key={index}
              cta={cta as CallToActionType}
              className={`text-base sm:text-lg lg:text-xl font-bold px-6 py-3 bg-white hover:bg-gray-200 hover:shadow hover:text-gray-800 rounded-full text-gray-600 ${cta.verticalAlignment} ${cta.horizontalAlignment}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroComponent;