import Link from 'next/link'
import style from './style'

export default ({ button, children, ...props }) => (
  <Link { ...props }>
    <a className={ button ? 'button' : '' }>
      { children }
      <style jsx>{ style }</style>
    </a>
  </Link>
)
