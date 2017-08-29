import Link from 'next/link'
import style from './style'

export default ({ button, children, primary, secondary, ...props }) => (
  <Link { ...props }>
    <a
      className={[
        button ? 'button' : '',
        primary ? 'primary' : '',
        secondary ? 'secondary' : ''
      ].filter(v => v).join(' ')}
    >
      { children }
      <style jsx>{ style }</style>
    </a>
  </Link>
)
