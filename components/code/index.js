import style from './style'

export default ({ children, inherit, inline, link }) => (
  <span
    className={[
      inherit ? 'inherit' : '',
      link ? 'link' : '',
    ].filter(v => v).join(' ')}
  >
    { inline ? <code>{ children }</code> : <pre>{ children }</pre> }
    <style jsx>{ style }</style>
  </span>
)
