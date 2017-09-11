import { breakpoint } from '../../config/style'
import { Component } from 'react'
import Footer from '../footer'
import Head from 'next/head'
import Nav from '../nav'
import style, { globalStyle } from './style'
import ToggleNav from '../toggle-nav'
import { withRouter } from 'next/router'

class Layout extends Component {
  constructor (props) {
    super(props)

    this.state = {
      navOpen: typeof props.router.query.nav !== 'undefined' || (props.isServer
        ? false
        : window.navOpen === true &&
          window.matchMedia(`(min-width: ${breakpoint}px)`).matches
      )
    }

    this.state.navOpen

    this.toggleNav = this.toggleNav.bind(this)
    this.focusNav = this.focusNav.bind(this)
    this.hideNav = this.hideNav.bind(this)
    this.hideNavSmallScreens = this.hideNavSmallScreens.bind(this)
  }

  toggleNav (e) {
    e.preventDefault()

    const navOpen = !this.state.navOpen

    this.setState({ navOpen })

    if (!this.props.isServer) {
      window.navOpen = navOpen
    }
  }

  focusNav () {
    this.setState({ navOpen: true })

    if (!this.props.isServer) {
      window.navOpen = true
    }
  }

  hideNav () {
    this.setState({ navOpen: false })
  }

  hideNavSmallScreens () {
    this.setState({
      navOpen: window.navOpen === true &&
        window.matchMedia(`(min-width: ${breakpoint}px)`).matches
    })
  }

  render () {
    return (
      <div data-open={ this.state.navOpen }>
        <Head>
          <title>{ this.props.title }</title>
          <meta
            name="description"
            content="An SVG animation API"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400|Karla:400|Roboto+Mono:400"
            rel="stylesheet"
          />
        </Head>
        <div className="container">
          <div className="wrapper">
            <Nav
              open={ this.state.navOpen }
              handleFocus={ this.focusNav }
              handleRefresh={ this.hideNavSmallScreens }
              handleSwipe={ this.hideNav }
            />
            <main>
              <ToggleNav
                handleClick={ this.toggleNav }
                open={ this.state.navOpen }
              />
              { this.props.children }
              <Footer />
            </main>
          </div>
        </div>
        <style jsx>{ style }</style>
        <style jsx global>{ globalStyle }</style>
        <script src="/static/wilderness.production.js"></script>
      </div>
    )
  }
}

Layout.defaultProps = {
  title: 'Wilderness',
  isServer: typeof window === 'undefined'
}

export default withRouter(Layout)
