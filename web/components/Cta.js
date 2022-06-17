import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

function cta(props) {
  const {title, route, link} = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a className="block border-2 border-white px-12 py-1 mt-8 rounded-full text-center uppercase hover:bg-white hover:text-pink-700">{title}</a>
      </Link>
    )
  }

  if (link) {
    return (
      <a className="block border-2 border-white px-12 py-1 mt-8 rounded-full text-center uppercase hover:bg-white hover:text-pink-700" href={link}>
        {title}
      </a>
    )
  }

  return <a className="">{title}</a>
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
}

export default cta
