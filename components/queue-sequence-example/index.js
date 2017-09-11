import { Component } from 'react'
import Svg from '../svg'

class QueueSequenceExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, timeline, render, play } = Wilderness

      const shape1Keyframe1 = {
        type: 'circle',
        cx: 5,
        cy: 10,
        r: 5,
        fill: '#DBF8A1'
      }

      const shape1Keyframe2 = {
        type: 'rect',
        x: 40,
        y: 5,
        width: 10,
        height: 10,
        fill: '#1F9FFD'
      }

      const shape2Keyframe1 = {
        type: 'rect',
        x: 50,
        y: 5,
        width: 10,
        height: 10,
        fill: '#1F9FFD'
      }

      const shape2Keyframe2 = {
        type: 'circle',
        cx: 95,
        cy: 10,
        r: 5,
        fill: '#DBF8A1'
      }

      const shape1 = shape(shape1Keyframe1, shape1Keyframe2)
      const shape2 = shape(shape2Keyframe1, shape2Keyframe2)

      const animation = timeline(shape1, shape2, {
        duration: 2000,
        iterations: Infinity,
        alternate: true
      })

      render(document.querySelector('#queue-sequence-example'), animation)

      play(animation)
    }
  }

  render () {
    return (
      <Svg id="queue-sequence-example" />
    )
  }
}

export default QueueSequenceExample
