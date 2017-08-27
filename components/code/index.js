import style from './style'

export default ({ children, inherit, inline }) => (
  <span className={ inherit ? 'inherit' : '' }>
    { inline ? <code>{ children }</code> : <pre>{ children }</pre> }
    <style jsx>{ style }</style>
  </span>
)
