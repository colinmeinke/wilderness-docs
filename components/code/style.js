import { border, breakpoint, color, font, grid } from '../../config/style'

export default `
  code,
  pre {
    border: 1px solid ${color.primary.alt};
    border-radius: ${border.radius}px;
    background-color: ${color.primary.main};
    font-family: ${font.family.code};
    font-weight: normal;
  }

  span:not(.inherit) code,
  span:not(.inherit) pre {
    font-size: ${font.size.small}px;
    line-height: ${grid.baseline * 2}px;
  }

  .inherit code,
  .inherit pre {
    font-size: inherit;
    line-height: inherit;
  }

  .link code {
    background-color: ${color.tertiary.main} !important;
    border-color: ${color.tertiary.main} !important;
    color: ${color.tertiary.contrast} !important;
  }

  code {
    padding-left: ${grid.gutter / 8}px;
    padding-right: ${grid.gutter / 8}px;
  }

  pre {
    margin-top: ${grid.baseline * 2}px;
    padding-left: ${grid.gutter / 2}px;
    padding-right: ${grid.gutter / 2}px;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  @media (min-width: ${breakpoint}px) {
    pre {
      padding-left: ${grid.gutter}px;
      padding-right: ${grid.gutter}px;
    }
  }
`
