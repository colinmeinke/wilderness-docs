import { border, color, grid } from '../../config/style'

export default `
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
