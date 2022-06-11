import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'

function TextSection(props) {
  const {heading, text} = props

  return (
    <div className="w-3/5 mx-auto">
      <section>
        
        <h2 className="block mt-4 mb-4 text-2xl">{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
