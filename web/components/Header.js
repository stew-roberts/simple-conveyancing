import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'next/router'
import SVG from 'react-inlinesvg'
import Navbar from './sections/Navbar'

class Header extends Component {

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
    const {title = 'Missing title', navItems, logo} = this.props
    return (
      <>
      <Navbar logo={logo} title={title} navItems={navItems} />
      </>
    )
  }
}
export default withRouter(Header)