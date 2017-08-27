import { border, color, font, grid } from '../../config/style'

export default `
  a {
    cursor: pointer;
    font-size: inherit;
    line-height: inherit;
    text-decoration: none;
    transition: all 0.15s ease-in-out;
  }

  a:not(.button):hover,
  a:not(.button):focus {
    text-decoration: underline;
  }

  a:not(.button):not(.primary):not(.secondary) {
    color: ${color.tertiary.main};
  }

  a:not(.button):not(.primary):not(.secondary):hover,
  a:not(.button):not(.primary):not(.secondary):focus {
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

  .button:not(.primary):not(.secondary) {
    background-color: ${color.tertiary.main};
    color: ${color.tertiary.contrast};
  }

  .button:not(.primary):not(.secondary):hover,
  .button:not(.primary):not(.secondary):focus {
    background-color: ${color.tertiary.alt}
  }

  .button.primary {
    background-color: ${color.primary.main};
    color: ${color.primary.contrast};
  }

  .button.primary:hover,
  .button.primary:focus {
    background-color: ${color.primary.alt}
  }

  .button.secondary {
    background-color: ${color.secondary.main};
    color: ${color.secondary.contrast};
  }

  .button.secondary:hover,
  .button.secondary:focus {
    background-color: ${color.secondary.alt}
  }
`
