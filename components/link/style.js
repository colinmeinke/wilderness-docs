import { border, color, font, grid } from '../../config/style'

export default `
  a {
    cursor: pointer;
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }

  a:not(.button):not(.nav):hover,
  a:not(.button):not(.nav):focus {
    text-decoration: underline;
  }

  a:not(.button):not(.primary):not(.secondary):not(.nav) {
    color: ${color.tertiary.main};
  }

  a:not(.button):not(.primary):not(.secondary):not(.nav):hover,
  a:not(.button):not(.primary):not(.secondary):not(.nav):focus {
    color: ${color.tertiary.alt};
  }

  .primary:not(.button) {
    color: ${color.primary.main};
  }

  .primary:not(.button):hover,
  .primary:not(.button):focus {
    color: ${color.primary.alt};
  }

  .secondary:not(.button) {
    color: ${color.secondary.main};
  }

  .secondary:not(.button):hover,
  .secondary:not(.button):focus {
    color: ${color.secondary.alt};
  }

  .button {
    border-radius: ${border.radius}px;
    display: inline-block;
    margin-top: ${grid.baseline * 3}px;
    padding: ${grid.baseline}px ${grid.gutter}px;
    text-decoration: none;
  }

  .button + .button {
    margin-left: ${grid.gutter / 4}px;
  }

  .button:not(.primary):not(.secondary) {
    background-color: ${color.tertiary.main};
    color: ${color.tertiary.contrast};
  }

  .button:not(.primary):not(.secondary):hover,
  .button:not(.primary):not(.secondary):focus {
    background-color: ${color.tertiary.alt}
  }

  .button.primary {
    background-color: ${color.primary.alt};
    color: ${color.primary.contrast};
  }

  .button.primary:hover,
  .button.primary:focus {
    background-color: ${color.primary.main}
  }

  .button.secondary {
    background-color: ${color.secondary.main};
    color: ${color.secondary.contrast};
  }

  .button.secondary:hover,
  .button.secondary:focus {
    background-color: ${color.secondary.alt}
  }

  .nav {
    color: ${color.secondary.main};
    display: block;
    padding-left: ${grid.gutter}px;
    position: relative;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }

  .nav:hover,
  .nav:focus {
    background-color: hsla(0,0%,0%,0.25);
  }

  .nav:not(.subnav):hover,
  .nav:not(.subnav):focus {
    color: ${color.secondary.alt};
  }

  .nav.selected {
    background-color: hsla(0,0%,0%,0.25);
  }

  .nav.selected::after {
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

  .subnav {
    color: ${color.primary.main};
    padding-left: ${grid.gutter * 1.5}px;
    padding-right: ${grid.gutter}px;
  }
`
