const baseline = 12

const border = {
  radius: 3
}

const color = {
  primary: {
    main: 'hsl(60,30%,96%)',
    alt: 'hsl(60,30%,90%)',
    contrast: 'hsl(60,2%,15%)'
  },
  secondary: {
    main: 'hsl(60,50%,75%)',
    alt: 'hsl(60,60%,75%)',
    contrast: 'hsl(60,2%,15%)'
  },
  tertiary: {
    main: 'hsl(200,75%,50%)',
    alt: 'hsl(200,85%,50%)',
    contrast: 'hsl(0,0%,100%)'
  }
}

const font = {
  family: {
    body: '"Open Sans", sans-serif',
    code: '"Roboto Mono", monospace',
    header: 'Karla, sans-serif'
  },
  size: {
    small: 14,
    medium: 18,
    large: 24,
    xlarge: 40
  }
}

const grid = {
  baseline,
  column: 80,
  gutter: baseline * 3
}

console.log(grid)

export { border, color, font, grid }
