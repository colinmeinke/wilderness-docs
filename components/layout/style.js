import { color, font, grid } from '../../config/style'

const globalStyle = `
  body {
    color: ${color.primary.contrast};
    font-family: ${font.family.body};
    font-size: ${font.size.medium}px;
    line-height: ${grid.baseline * 3}px;
    margin: 0;
  }

  h1,
  h2,
  h3,
  p,
  pre,
  hr,
  ul {
    margin-bottom: 0;
    margin-top: 0;
  }

  h1 + p,
  p + p,
  hr + p {
    margin-top: ${grid.baseline * 2}px;
  }

  span + p,
  h2 + p,
  h2 + ul {
    margin-top: ${grid.baseline}px;
  }

  hr {
    border-top: 1px solid ${color.primary.main};
    margin-top: ${grid.baseline * 3}px;
  }

  small {
    font-size: ${font.size.small}px;
    opacity: 0.75;
  }
`

export { globalStyle }

export default `
  .container {
    display: flex;
    min-height: 100vh;
  }

  main {
    box-sizing: border-box;
    max-width: ${grid.column * 7 + grid.gutter * 8}px;
    padding: ${grid.baseline * 2}px ${grid.gutter}px
  }
`
