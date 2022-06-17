import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function Hero(props) {
  const {backgroundImage, heading, tagline, ctas} = props

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).height(800).url()}")`,
      }
    : {}

  return (
    // bg-gradient-to-r from-pink-700 to-indigo-800
    <div>
      <div style={style} className="bg-fixed bg-cover">
        <div className="sm:w-full md:w-3/5 mx-auto h-[30em] flex items-center justify-center text-white">
          <div className="overflow-auto p-12">
            <h1 className="text-2xl font-bold tracking-wide block">{heading}</h1>
            <div className="tracking-wide">{tagline && <SimpleBlockContent blocks={tagline} />}</div>
          
        
            {/* <h1>{heading}</h1>
            <div>{tagline && <SimpleBlockContent blocks={tagline} />}</div> */}
            {ctas && (
              <div className="h-auto flex justify-center">
                {ctas.map((cta) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </div>
            )}
        </div>
        
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
