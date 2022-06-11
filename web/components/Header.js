import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import HamburgerIcon from './icons/Hamburger'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'

class Header extends Component {
  state = {showNav: false}

  static propTypes = {
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
      }),
      logo: PropTypes.string,
    }),
  }

  componentDidMount() {
    const {router} = this.props
    router.events.on('routeChangeComplete', this.hideMenu)
  }

  componentWillUnmount() {
    const {router} = this.props
    router.events.off('routeChangeComplete', this.hideMenu)
  }

  hideMenu = () => {
    this.setState({showNav: false})
  }

  handleMenuToggle = () => {
    const {showNav} = this.state
    this.setState({
      showNav: !showNav,
    })
  }

  renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null
    }

    if (logo.asset.extension === 'svg') {
      return <SVG src={logo.asset.url} className="" />
    }

    return <img src={logo.asset.url} alt={logo.title} className="" />
  }

  render() {
    const {title = 'Missing title', navItems, router, logo} = this.props
    return (
      <header>
        <div className="w-3/5 mx-auto flex justify-between px-1 py-1">
          <h1 className="flex flex-col w-52">
            <Link href={'/'}>
              <a title={title}>{this.renderLogo(logo)}</a>
            </Link>
          </h1>
          <div className="flex items-center text-sm text-gray-500">
          <nav>
          <div className="container mx-auto">
            <ul className="inline-flex text-gray-800 text-xs">
              {navItems &&
                navItems.map((item) => {
                  const {slug, title, _id} = item
                  const isActive = slugParamToPath(router.query.slug) === slug.current
                  
                  return (
                    <li key={_id} className="mx-3 my-3 mr-6 pr-10">
                      <Link href={getPathFromSlug(slug.current)}>
                        <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive} className="text-xl text-gray-800 hover:text-rose-500 hover:border-b-2 hover: border-rose-500">
                          {title}
                        </a>
                      </Link>
                    </li>
                  )
                })}
            </ul>
            <button className="md:hidden" onClick={this.handleMenuToggle}>
              <HamburgerIcon className="" />
            </button>
            </div>
          </nav>
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Header)
