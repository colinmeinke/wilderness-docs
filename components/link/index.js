import style from './style'
import { withRouter } from 'next/router'

const Link = ({
  button,
  children,
  handleFocus,
  handleRefresh,
  href,
  nav,
  primary,
  router,
  secondary,
  subnav
}) => {
  const handleClick = e => {
    e.preventDefault()

    const isLocal = href.indexOf('#') === 0

    const url = isLocal
      ? `${router.pathname}${href}`
      : href

    if (router.pathname === href && typeof handleRefresh === 'function') {
      handleRefresh()
    }

    router.push(url).then(() => {
      if (!isLocal) {
        window.scrollTo(0, 0)
      }
    })
  }

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
      onClick={ handleClick }
      onFocus={ handleFocus }
    >
      { children }
      <style jsx>{ style }</style>
    </a>
  )
}

export default withRouter(Link)
