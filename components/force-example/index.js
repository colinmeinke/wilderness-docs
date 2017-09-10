import { Component } from 'react'
import Svg from '../svg'

class ForceExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, timeline, render, play } = Wilderness

      const randomlyAdjustPoint = point => ({
        ...point,
        x: point.x + Math.floor(Math.random() * 10) - 5,
        y: point.y + Math.floor(Math.random() * 10) - 5
      })

      const shakeForce = ({ points, attributes, childFrameShapes }, framePosition) => ({
        points: points.map(randomlyAdjustPoint),
        attributes,
        childFrameShapes
      })

      const plainShapeObject = {
        type: 'rect',
        x: 5,
        y: 5,
        width: 10,
        height: 10,
        fill: '#1F9FFD'
      }

      const keyframe1 = plainShapeObject

      const keyframe2 = {
        ...plainShapeObject,
        transforms: [[ 'offset', 80 ]],
        forces: [ shakeForce ]
      }

      const shakyRect = shape(keyframe1, keyframe2)

      const animation = timeline(shakyRect, {
        duration: 2000,
        iterations: Infinity,
        alternate: true
      })

      render(document.querySelector('#force-example'), animation)

      play(animation)
    }
  }

  render () {
    return (
      <Svg id="force-example" />
    )
  }
}

export default ForceExample
