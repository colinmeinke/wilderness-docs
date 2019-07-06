import css from 'styled-jsx/css'
import { breakpoint, grid } from '../../config/style'

export default css`
  .container {
    overflow: hidden;
  }

  .wrapper {
    display: flex;
    min-height: 100vh;
    transition: transform 0.3s ease-in-out;
  }

  div[data-open="false"] .wrapper {
    transform: translateX(-50%);
  }

  main {
    box-sizing: border-box;
    padding: ${grid.baseline * 2}px ${grid.gutter}px ${grid.baseline * 6}px;
    position: relative;
    width: 100%;
  }

  @media (max-width: ${breakpoint - 1}px) {
    .wrapper {
      width: 200%;
    }
  }

  @media (min-width: ${breakpoint}px) {
    div[data-open="false"] .wrapper {
      transform: translateX(-${grid.column * 3 + grid.gutter * 3}px);
    }

    main {
      max-width: ${grid.column * 7 + grid.gutter * 8}px;
    }
  }
`
