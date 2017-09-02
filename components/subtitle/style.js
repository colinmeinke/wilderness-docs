import { font, grid } from '../../config/style'

export default `
  h2 {
    font-family: ${font.family.header};
    font-size: ${font.size.large}px;
    font-weight: normal;
    line-height: ${grid.baseline * 4}px;
  }

  h2:not(:first-child) {
    margin-top: ${grid.baseline * 5}px;
  }
`
