import { Component } from 'react'
import Svg from '../svg'

class ScaleExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, render } = Wilderness

      const rect = {
        type: 'rect',
        x: 40,
        y: 0,
        width: 20,
        height: 20,
        fill: '#DBF8A1'
      }

      const transformedRect = {
        ...rect,
        transforms: [[ 'scale', 0.5, 'topLeft' ]],
        fill: '#4F5448'
      }

      render(
        document.querySelector('#scale-example'),
        shape(rect),
        shape(transformedRect)
      )
    }
  }

  render () {
    return (
      <Svg id="scale-example" />
    )
  }
}

export default ScaleExample
