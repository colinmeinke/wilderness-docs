import { Component } from 'react'
import Svg from '../svg'

class MorphWithOptsExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, timeline, render, play } = Wilderness

      const keyframe1 = {
        type: 'circle',
        cx: 10,
        cy: 10,
        r: 10,
        fill: '#DBF8A1'
      }

      const keyframe2 = {
        type: 'rect',
        x: 80,
        y: 0,
        width: 20,
        height: 20,
        fill: '#1F9FFD',
        duration: 2000
      }

      const morph = shape(keyframe1, keyframe2)

      const animation = timeline(morph)

      const playbackOptions = {
        alternate: true,
        iterations: Infinity
      }

      render(document.querySelector('#morph-with-opts-example'), animation)

      play(animation, playbackOptions)
    }
  }

  render () {
    return (
      <Svg id="morph-with-opts-example" />
    )
  }
}

export default MorphWithOptsExample
