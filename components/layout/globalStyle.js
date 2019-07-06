import css from 'styled-jsx/css'
import { breakpoint, color, font, grid } from '../../config/style'

const style = css.global`
  body {
    color: ${color.primary.contrast};
    font-family: ${font.family.body};
    font-size: ${font.size.medium}px;
    line-height: ${grid.baseline * 3}px;
    margin: 0;
  }

  h1,
  h2,
  h3,
  p,
  pre,
  hr,
  ul {
    margin-bottom: 0;
    margin-top: 0;
  }

  h1 + p,
  p + p,
  hr + p,
  ul + p,
  h1 + h2 {
    margin-top: ${grid.baseline * 2}px;
  }

  p + h2,
  ul + h2,
  ol + h2,
  div + h2,
  span + h2,
  svg + h2 {
    margin-top: ${grid.baseline * 5}px;
  }

  span + p,
  h2 + p,
  h2 + ul,
  p + ul {
    margin-top: ${grid.baseline}px;
  }

  hr {
    border-top: 1px solid ${color.primary.main};
    margin-top: ${grid.baseline * 3}px;
  }

  small {
    font-size: ${font.size.small}px;
    opacity: 0.75;
  }
`

export default style