import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import Link from 'next/link'
import SVG from 'react-inlinesvg'
import {getPathFromSlug} from '../../utils/urls'
import {FaBars, FaTimes} from 'react-icons/fa'



const Navbar = (props) => {
    /* set consts */
    const {logo, title, navItems} = props
    const navbarClass = 'duration-300 fixed w-full flex justify-between p-2 pl-20 lg:px-20 text-white align-center';
    const navbarScrollClass = 'duration-300 fixed w-full z-[999999] flex justify-between p-2 pl-20 lg:px-20 text-white bg-gradient-to-r from-pink-700 to-indigo-800 opacity-90 drop-shadow-[0_10px_10px_rgba(0,0,0,0.45)]';
    const [colour, setColour] = useState(false);
    const [nav, setNav] = useState(false);

    /* Handle Events */
    const handleClick = () => setNav(!nav);
    const changeColour = () => {
        if (window.scrollY >= 100) {
          setColour(true);
        } else {
          setColour(false);
        }
    }

    const renderLogo = (logo) => {
        if (!logo || !logo.asset) {
          return null
        }
    
        if (logo.asset.extension === 'svg') {
          return <SVG src={logo.asset.url} className="" />
        }
    
        return <img src={logo.asset.url} alt={logo.title} className="" />
    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeColour);
    }
        return (
            <header className={ colour ? navbarScrollClass : navbarClass}>
                <h1 className="w-48">
                    <Link href={'/'}>
                        <a title={title}>{renderLogo(logo)}</a>
                    </Link>
                </h1>
                {/* Main Menu - medium and above */}
                <ul className='hidden lg:flex lg:items-center'>
                {navItems &&
                  navItems.map((item) => {
                    const {slug, title, _id} = item
                    return (
                      <li key={_id} className=" flex justify-center uppercase text-center text-sm font-bold ">
                        <Link href={getPathFromSlug(slug.current)}>
                          <a className="flex hover:bg-white hover:text-pink-700 px-8 py-2 hover:py-2 hover:px-8 hover:rounded-full">
                            {title}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                <button className="lg:hidden z-10" onClick={handleClick}>
                    { nav ? (<FaTimes className='h-10 w-10' />) : (<FaBars className='h-10 w-10' />) }
                </button>

                {/* Mobile Menu */}
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-pink-700 to-indigo-800 opacity-100 flex flex-col justify-center items-center'}>
                <li className="p-8">{renderLogo(logo)}</li>
                {navItems &&
                  navItems.map((item) => {
                    const {slug, title, _id} = item
                    return (
                      <li key={_id} className="mx-3 my-3 mr-6 flex justify-center uppercase text-center text-md font-bold ">
                        <Link href={getPathFromSlug(slug.current)}>
                          <a className="flex hover:bg-white hover:text-pink-700 px-8 py-2 hover:py-2 hover:px-8 hover:rounded-full" onClick={handleClick}>
                            {title}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
            </header>
        )
}

Navbar.propTypes = {
    router: PropTypes.shape({
      pathname: PropTypes.string,
      query: PropTypes.shape({
        slug: PropTypes.string,
      }),
      events: PropTypes.any,
    }),
    title: PropTypes.string,
    navItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    logo: PropTypes.shape({
      asset: PropTypes.shape({
        url: PropTypes.string,
        extension: PropTypes.string,
      }),
      logo: PropTypes.string,
      title: PropTypes.string,
    }),
}

export default withRouter(Navbar)