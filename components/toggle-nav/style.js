import { color, grid } from '../../config/style'

export default `
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    left: ${grid.gutter / 2}px;
    outline: none;
    padding: 0;
    position: absolute;
    top: ${grid.baseline * 2}px;
    width: 24px;
  }

  span {
    background-color: ${color.primary.contrast};
    display: block;
    height: 4px;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  span:not(:first-child) {
    margin-top: 4px;
  }

  button:hover span,
  button:focus span {
    background-color: ${color.tertiary.main};
  }

  button[data-open="true"] span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  button[data-open="true"] span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  button[data-open="true"] span:nth-child(2) {
    opacity: 0;
    transform: scale(0);
  }
`
