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

  code {
    padding-left: ${grid.gutter / 8}px;
    padding-right: ${grid.gutter / 8}px;
  }

  pre {
    margin-top: ${grid.baseline}px;
    padding-left: ${grid.gutter / 2}px;
    padding-right: ${grid.gutter / 2}px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  @media (min-width: ${breakpoint}px) {
    pre {
      padding-left: ${grid.gutter}px;
      padding-right: ${grid.gutter}px;
    }
  }
`