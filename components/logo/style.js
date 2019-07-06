import css from 'styled-jsx/css'
import { border, color, grid } from '../../config/style'

export default css`
  div {
    display: flex;
  }

  svg {
    box-sizing: border-box;
    height: 60px;
    margin-left: ${grid.gutter / 2}px;
    overflow: visible;
    width: 60px;
  }
`
