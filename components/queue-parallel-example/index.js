import { Component } from 'react'
import Svg from '../svg'

class QueueParallelExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, timeline, render, play } = Wilderness

      const shape1Keyframe1 = {
        type: 'circle',
        cx: 5,
        cy: 5,
        r: 5,
        fill: '#DBF8A1'
      }

      const shape1Keyframe2 = {
        type: 'rect',
        x: 90,
        y: 0,
        width: 10,
        height: 10,
        fill: '#1F9FFD',
        duration: 1000
      }

      const shape2Keyframe1 = {
        type: 'circle',
        cx: 5,
        cy: 15,
        r: 5,
        fill: '#1F9FFD'
      }

      const shape2Keyframe2 = {
        type: 'rect',
        x: 90,
        y: 10,
        width: 10,
        height: 10,
        fill: '#DBF8A1',
        duration: 1000
      }

      const shape1 = shape(shape1Keyframe1, shape1Keyframe2)
      const shape2 = shape(shape2Keyframe1, shape2Keyframe2)

      const shape1WithOpts = [ shape1, {
        name: 'SHAPE_1'
      } ]

      const shape2WithOpts = [ shape2, {
        queue: { at: 'SHAPE_1', offset: 250 }
      } ]

      const animation = timeline(shape1WithOpts, shape2WithOpts, {
        iterations: Infinity,
        alternate: true
      })

      render(document.querySelector('#queue-parallel-example'), animation)

      play(animation)
    }
  }

  render () {
    return (
      <Svg id="queue-parallel-example" />
    )
  }
}

export default QueueParallelExample
