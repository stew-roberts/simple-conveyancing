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
  const {backgroundImage, tagline, ctas} = props

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`,
      }
    : {}

  return (
    <div style={style} className="h-96">
      <div>
        <div className="sm:w-fuil md:w-3/5 mx-auto px-4 py-20 text-white">
          <div className="backdrop-blur-2xl overflow-auto p-12">
            {/* <h1 className="text-2xl font-bold tracking-wide block">{heading}</h1> */}
            <div className="tracking-wide">{tagline && <SimpleBlockContent blocks={tagline} />}</div>
          
        
            {/* <h1>{heading}</h1>
            <div>{tagline && <SimpleBlockContent blocks={tagline} />}</div> */}
            {ctas && (
              <div>
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
