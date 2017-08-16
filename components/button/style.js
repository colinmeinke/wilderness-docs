import { color, font, grid } from '../../config/style'

export default `
  button {
    background-color: ${color.primary.main};
    border: none;
    border-radius: 2px;
    color: ${color.primary.contrast};
    cursor: pointer;
    padding: ${grid.baseline}px ${grid.gutter}px;
  }
`
