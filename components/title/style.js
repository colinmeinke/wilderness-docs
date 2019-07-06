import css from 'styled-jsx/css'
import { font, grid } from '../../config/style'

export default css`
  h1 {
    font-family: ${font.family.header};
    font-size: ${font.size.xlarge}px;
    font-weight: normal;
    line-height: ${grid.baseline * 5}px;
    margin-top: ${grid.baseline * 5}px;
  }
`
