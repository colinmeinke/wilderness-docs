import { color, font, grid } from '../../config/style'

export default `
  nav {
    background-color: ${color.primary.contrast};
    box-shadow: -5px 0 5px hsla(0,0%,0%,0.2) inset;
    box-sizing: border-box;
    flex-shrink: 0;
    max-width: ${grid.column * 3 + grid.gutter * 3}px;
    padding: ${grid.baseline}px ${grid.gutter}px;
    width: 33%;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }

  ul ul {
    padding-left: ${grid.gutter / 2}px;
  }

  li {
    font-size: ${font.size.small}px;
    line-height: ${grid.baseline * 3}px;
  }
`
