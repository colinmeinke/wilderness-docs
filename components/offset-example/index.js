import { Component } from 'react'
import Svg from '../svg'

class OffsetExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, render } = Wilderness

      const rect = {
        type: 'rect',
        x: 0,
        y: 0,
        width: 10,
        height: 10,
        fill: '#DBF8A1'
      }

      const transformedRect = {
        ...rect,
        transforms: [[ 'offset', 90, 10 ]],
        fill: '#4F5448'
      }

      render(
        document.querySelector('#offset-example'),
        shape(rect),
        shape(transformedRect)
      )
    }
  }

  render () {
    return (
      <Svg id="offset-example" />
    )
  }
}

export default OffsetExample
