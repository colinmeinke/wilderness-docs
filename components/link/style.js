import { border, breakpoint, color, font, grid } from '../../config/style'

export default `
  a {
    cursor: pointer;
    font-size: inherit;
    line-height: inherit;
    outline: none;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }

  a:not(.button):not(.nav):focus {
    background-color: ${color.tertiary.main} !important;
    color: ${color.tertiary.contrast} !important;
  }

  a:not(.button):not(.nav):hover {
    text-decoration: underline;
  }

  a:not(.button):not(.primary):not(.secondary):not(.nav) {
    color: ${color.tertiary.main};
  }

  a:not(.button):not(.primary):not(.secondary):not(.nav):hover {
    color: ${color.tertiary.alt};
  }

  .primary:not(.button) {
    color: ${color.primary.main};
  }

  .primary:not(.button):focus {
    background-color: ${color.primary.main} !important;
    color: ${color.primary.contrast} !important;
  }

  .primary:not(.button):hover {
    color: ${color.primary.alt};
  }

  .secondary:not(.button) {
    color: ${color.secondary.main};
  }

  .secondary:not(.button):focus {
    background-color: ${color.secondary.main} !important;
    color: ${color.secondary.contrast} !important;
  }

  .secondary:not(.button):hover {
    color: ${color.secondary.alt};
  }

  .button {
    border-radius: ${border.radius}px;
    border-style: solid;
    border-width: 3px;
    display: inline-block;
    margin-top: ${grid.baseline * 3}px;
    padding: ${grid.baseline - 3}px ${grid.gutter}px;
    text-decoration: none;
  }

  .button + .button {
    margin-left: ${grid.gutter / 4}px;
  }

  .button:not(.primary):not(.secondary) {
    background-color: ${color.tertiary.main};
    border-color: ${color.tertiary.main};
    color: ${color.tertiary.contrast};
  }

  .button:not(.primary):not(.secondary):focus {
    background-color: ${color.tertiary.contrast};
    border-color: ${color.tertiary.main};
    color: ${color.tertiary.main};
  }

  .button:not(.primary):not(.secondary):hover {
    background-color: ${color.tertiary.alt};
    border-color: ${color.tertiary.alt};
  }

  .button.primary {
    background-color: ${color.primary.alt};
    border-color: ${color.primary.alt};
    color: ${color.primary.contrast};
  }

  .button.primary:focus {
    background-color: ${color.primary.main};
    border-color: ${color.primary.contrast};
    color: ${color.primary.contrast};
  }

  .button.primary:hover {
    background-color: ${color.primary.main};
    border-color: ${color.primary.main};
  }

  .button.secondary {
    background-color: ${color.secondary.main};
    border-color: ${color.secondary.main};
    color: ${color.secondary.contrast};
  }

  .button.secondary:focus {
    background-color: ${color.secondary.alt};
    border-color: ${color.secondary.contrast};
    color: ${color.secondary.contrast};
  }

  .button.secondary:hover {
    background-color: ${color.secondary.alt};
    border-color: ${color.secondary.alt};
  }

  .nav {
    color: ${color.secondary.main};
    display: block;
    outline: none;
    padding-left: ${grid.gutter}px;
    position: relative;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }

  .nav:focus {
    background-color: ${color.secondary.main} !important;
    color: ${color.secondary.contrast} !important;
  }

  .nav:hover {
    background-color: hsla(0,0%,0%,0.25);
  }

  .nav:not(.subnav):hover {
    color: ${color.secondary.alt};
  }

  .nav.selected {
    background-color: hsla(0,0%,0%,0.25);
  }

  .subnav {
    color: ${color.primary.main};
    padding-left: ${grid.gutter * 1.5}px;
    padding-right: ${grid.gutter}px;
  }

  @media (min-width: ${breakpoint}px) {
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
  }
`
