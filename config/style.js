const baseline = 12

const border = {
  radius: 3
}

const color = {
  primary: {
    main: 'hsl(80,30%,96%)',
    alt: 'hsl(80,30%,90%)',
    contrast: 'hsl(80,8%,20%)'
  },
  secondary: {
    main: 'hsl(80,75%,80%)',
    alt: 'hsl(80,85%,80%)',
    contrast: 'hsl(80,8%,20%)'
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

export { border, color, font, grid }
