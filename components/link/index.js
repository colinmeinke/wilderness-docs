import style from './style'
import { withRouter } from 'next/router'

const Link = ({
  button,
  children,
  handleClick,
  handleFocus,
  handleRefresh,
  href,
  nav,
  primary,
  router,
  secondary,
  subnav
}) => {
  const defaultHandleClick = e => {
    if (href.indexOf('http') === -1) {
      e.preventDefault()

      const isHash = href.indexOf('#') === 0

      const url = isHash
        ? `${router.pathname}${href}`
        : href

      if (router.pathname === href && typeof handleRefresh === 'function') {
        handleRefresh()
      }

      router.push(url).then(() => {
        if (!isHash) {
          window.scrollTo(0, 0)
        }
      })
    }
  }

  const click = typeof handleClick === 'function'
    ? handleClick
    : defaultHandleClick

  return (
    <a
      className={[
        button ? 'button' : '',
        primary ? 'primary' : '',
        secondary ? 'secondary' : '',
        nav ? 'nav' : '',
        subnav ? 'subnav' : '',
        router.pathname === href ? 'selected' : ''
      ].filter(v => v).join(' ')}
      href={ href }
      onClick={ click }
      onFocus={ handleFocus }
    >
      { children }
      <style jsx>{ style }</style>
    </a>
  )
}

export default withRouter(Link)
