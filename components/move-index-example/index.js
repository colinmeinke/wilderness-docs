import { Component } from 'react'
import Svg from '../svg'

class MoveIndexExample extends Component {
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
          [ 'moveIndex', 2 ]
        ],
        fill: '#4F5448'
      }

      const pointsToDots = s => s.keyframes[ 0 ].frameShape.points.map(({ x, y }, i) => shape({
        type: 'circle',
        cx: x,
        cy: y,
        r: 1.2,
        fill: i === 0 ? '#1F9FFD' : '#34372F'
      }))

      const shape1 = shape(rect)
      const shape2 = shape(transformedRect)

      const shape1Points = pointsToDots(shape1).reverse()
      const shape2Points = pointsToDots(shape2).reverse()

      render(
        document.querySelector('#move-index-example'),
        shape1,
        shape2,
        ...shape1Points,
        ...shape2Points
      )
    }
  }

  render () {
    return (
      <Svg id="move-index-example" />
    )
  }
}

export default MoveIndexExample
