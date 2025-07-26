import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '@cms/utils/config/client.config';
import { SiteConfigType } from '@cms/types';
import Image from 'next/image';

interface LogoProps {
  siteConfig: SiteConfigType[];
  className?: string; // wrapper classes
  imageClassName?: string; // image-specific styling
  priority?: boolean;
}

const builder = imageUrlBuilder(client);

const Logo: React.FC<LogoProps> = ({
  siteConfig,
  className = 'w-32 h-16', // Default responsive dimensions
  imageClassName = 'object-contain',
  priority = false,
}) => {
  const { logo, alt } = siteConfig[0];
  const logoUrl = logo ? builder.image(logo).url() : '';

  return (
    <div className={`relative ${className}`}>
      {logoUrl ? (
        <Image
          src={logoUrl}
          alt={alt || 'Site Logo'}
          fill
          priority={priority}
          className={imageClassName}
          sizes="(max-width: 768px) 100vw, 200px"
        />
      ) : (
        <span className="text-sm text-gray-500">No logo available</span>
      )}
    </div>
  );
};

export default Logo;