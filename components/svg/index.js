import style from './style'

export default ({ children, height = 20, id, width = 100 }) => (
  <svg
    width={ width }
    height={ height }
    viewBox={ `0 0 ${width} ${height}` }
    preserveAspectRatio="xMidYMid meet"
    id={ id }
  >
    { children }
    <style jsx>{ style }</style>
  </svg>
)
