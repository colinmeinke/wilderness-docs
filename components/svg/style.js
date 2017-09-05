import { border, color, grid } from '../../config/style'

export default `
  svg {
    border: 1px solid ${color.primary.alt};
    border-radius: ${border.radius}px;
    box-sizing: border-box;
    height: auto;
    margin-top: ${grid.baseline * 2}px;
    overflow: visible;
    padding: ${grid.baseline * 2 - 1}px ${grid.gutter}px;
    width: 100%;
  }
`
