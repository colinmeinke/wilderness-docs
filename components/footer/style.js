import { font, grid } from '../../config/style'

export default `
  footer {
    margin-top: ${grid.baseline * 15}px;
  }

  p {
    font-size: ${font.size.small}px;
    line-height: ${grid.baseline * 2}px;
    margin-top: ${grid.baseline}px;
  }
`
