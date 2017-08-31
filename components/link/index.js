import style from './style'
import { withRouter } from 'next/router'

const Link = ({ button, children, href, nav, primary, router, secondary, subnav }) => {
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
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
      href={href}
      onClick={handleClick}
    >
      { children }
      <style jsx>{ style }</style>
    </a>
  )
}

export default withRouter(Link)
