import { color, font, grid } from '../../config/style'

export default `
  a {
    cursor: pointer;
    font-size: inherit;
    line-height: inherit;
  }

  .button {
    background-color: ${color.primary.main};
    border-radius: 2px;
    color: ${color.primary.contrast};
    display: inline-block;
    padding: ${grid.baseline}px ${grid.gutter}px;
    text-decoration: none;
  }
`
