import { Component } from 'react'
import Svg from '../svg'

class CircleExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, render } = Wilderness

      const plainShapeObject = {
        type: 'circle',
        cx: 50,
        cy: 10,
        r: 10,
        fill: '#DBF8A1'
      }

      const circle = shape(plainShapeObject)

      render(document.querySelector('#circle-example'), circle)
    }
  }

  render () {
    return (
      <Svg id="circle-example" />
    )
  }
}

export default CircleExample
