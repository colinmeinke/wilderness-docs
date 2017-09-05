import { Component } from 'react'
import Svg from '../svg'

class RotateExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, render } = Wilderness

      const rect = {
        type: 'rect',
        x: 45,
        y: 5,
        width: 10,
        height: 10,
        fill: '#DBF8A1'
      }

      const transformedRect = {
        ...rect,
        transforms: [[ 'rotate', 45 ]],
        fill: '#4F5448'
      }

      render(
        document.querySelector('#rotate-example'),
        shape(rect),
        shape(transformedRect)
      )
    }
  }

  render () {
    return (
      <Svg id="rotate-example" />
    )
  }
}

export default RotateExample
