import { Component } from 'react'
import Svg from '../svg'

class DomNodeExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, render } = Wilderness

      const svg = document.querySelector('#dom-node-example')
      const circle = svg.querySelector('circle')

      const plainShapeObject = {
        el: circle,
        fill: '#1F9FFD'
      }

      const circleClone = shape(plainShapeObject)

      render(svg, circleClone)
    }
  }

  render () {
    return (
      <Svg id="dom-node-example">
        <circle cx="50" cy="10" r="10" fill="#DBF8A1"></circle>
      </Svg>
    )
  }
}

export default DomNodeExample
