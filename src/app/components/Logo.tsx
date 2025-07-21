import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from "@sanity/utils/config/client.config";
import { SiteConfigType } from '@sanity/types';
import Image from 'next/image';

interface LogoProps {
  siteConfig: SiteConfigType[];
}

const builder = imageUrlBuilder(client); // Initialize image URL builder with Sanity client

const Logo: React.FC<LogoProps> = ({ siteConfig }) => {
  const { logo, alt } = siteConfig[0];

  // Check if there's a logo image, and if so, generate the URL
  const logoUrl = logo ? builder.image(logo).url() : '';

  return (
    <div className="logo">
      {logoUrl ? (
        <Image 
            src={logoUrl} 
            alt={alt || 'Site Logo'} 
            width={400} // Set an appropriate width
            height={200} // Set an appropriate height
        />
      ) : (
        <span>No logo available</span> // Fallback in case logo is not provided
      )}
    </div>
  );
};

export default Logo;