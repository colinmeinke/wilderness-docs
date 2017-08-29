import { color, font, grid } from '../../config/style'

export default `
  nav {
    background-color: ${color.primary.contrast};
    box-shadow: -5px 0 5px hsla(0,0%,0%,0.2) inset;
    box-sizing: border-box;
    flex-shrink: 0;
    max-width: ${grid.column * 3 + grid.gutter * 3}px;
    padding-bottom: ${grid.baseline * 3}px;
    padding-top: ${grid.baseline * 3}px;
    width: 33%;
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
  }

  li {
    font-size: ${font.size.small}px;
    line-height: ${grid.baseline * 3}px;
  }

  a {
    color: ${color.secondary.main};
    display: block;
    padding-left: ${grid.gutter}px;
    position: relative;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }

  a:not(.button):hover,
  a:not(.button):focus {
    background-color: hsla(0,0%,0%,0.25);
    color: ${color.secondary.alt};
  }

  ul ul a {
    color: ${color.primary.main};
    padding-left: ${grid.gutter * 1.5}px;
    padding-right: ${grid.gutter}px;
  }

  .selected {
    background-color: hsla(0,0%,0%,0.25);
  }

  .selected::after {
    border-bottom: ${grid.baseline * 0.5}px solid transparent;
    border-left: ${grid.baseline / 3}px solid transparent;
    border-right: ${grid.baseline / 3}px solid white;
    border-top: ${grid.baseline * 0.5}px solid transparent;
    content: '';
    margin-top: -${grid.baseline * 0.5}px;
    position: absolute;
    right: 0;
    top: 50%;
  }
`
