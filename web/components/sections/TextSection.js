import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'

function TextSection(props) {
  const {heading, text} = props
  return (
    <div className="container mx-auto px-5">
      <section>
        
        <h2 className="block mt-4 mb-4">{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        {heading === "Instant Online Conveyancing Quote" ? <div id="conveyancing-quotes"></div> : null}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
