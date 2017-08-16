import { color, font, grid } from '../../config/style'

export default `
  body {
    color: ${color.grey.dark};
    font-family: ${font.family};
    font-size: ${font.size.medium}px;
    line-height: ${grid.baseline * 3}px;
  }

  a {
    color: ${color.primary.main};
  }
`
