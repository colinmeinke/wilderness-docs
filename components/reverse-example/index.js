import { Component } from 'react'
import Svg from '../svg'

class ReverseExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, render } = Wilderness

      const rect = {
        type: 'rect',
        x: 0,
        y: 0,
        width: 20,
        height: 20,
        fill: '#DBF8A1'
      }

      const transformedRect = {
        ...rect,
        transforms: [
          [ 'offset', 80 ],
          [ 'reverse' ]
        ],
        fill: '#4F5448'
      }

      const arrowDirection = (i, reverse) => {
        switch (i) {
          case 0:
          case 4:
            return reverse ? 'down' : 'right'
          case 1:
            return reverse ?  'right' : 'down'
          case 2:
            return reverse ? 'up' : 'left'
          case 3:
            return reverse ? 'left' : 'up'
        }
      }

      const arrowPath = ({ x, y, direction }) => {
        switch (direction) {
          case 'right':
            return `M${x - 0.5} ${y - 1.25}l2.5 1.25l-2.5 1.25z`
          case 'left':
            return `M${x + 0.5} ${y - 1.25}l-2.5 1.25l2.5 1.25z`
          case 'down':
            return `M${x - 1.25} ${y - 0.5}l1.25 2.5l1.25 -2.5z`
          case 'up':
            return `M${x - 1.25} ${y + 0.5}l1.25 -2.5l1.25 2.5z`
        }
      }

      const pointsToArrows = (s, reverse) => s.keyframes[ 0 ].frameShape.points.map(({ x, y }, i) => shape({
        type: 'path',
        d: arrowPath({ x, y, direction: arrowDirection(i, reverse) }),
        fill: `#1F9FFD`
      }))

      const shape1 = shape(rect)
      const shape2 = shape(transformedRect)

      const shape1Arrows = pointsToArrows(shape1, false)
      const shape2Arrows = pointsToArrows(shape2, true)

      render(
        document.querySelector('#reverse-example'),
        shape1,
        shape2,
        ...shape1Arrows,
        ...shape2Arrows
      )
    }
  }

  render () {
    return (
      <Svg id="reverse-example" />
    )
  }
}

export default ReverseExample
