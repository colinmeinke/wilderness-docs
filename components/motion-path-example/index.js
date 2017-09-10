import { Component } from 'react'
import Svg from '../svg'

class MotionPathExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { motionPath, shape, timeline, render, play } = Wilderness

      const plainShapeObject = {
        type: 'circle',
        cx: 5,
        cy: 5,
        r: 5,
        fill: '#DBF8A1'
      }

      const motionPathPlainShapeObject = {
        type: 'path',
        d: 'M0,0l22.5,10l22.5,-10l22.5,10l22.5,-10'
      }

      const keyframe1 = plainShapeObject

      const keyframe2 = {
        ...plainShapeObject,
        forces: [ motionPath(motionPathPlainShapeObject) ]
      }

      const circleOnMotionPath = shape(keyframe1, keyframe2)

      const animation = timeline(circleOnMotionPath, {
        duration: 2000,
        iterations: Infinity,
        alternate: true
      })

      render(
        document.querySelector('#motion-path-example'),
        animation,
        shape({
          ...motionPathPlainShapeObject,
          fill: 'none',
          stroke: '#E8EEDE',
          'stroke-width': 2,
          'vector-effect': 'non-scaling-stroke',
          transforms: [[ 'offset', 5, 5 ]]
        })
      )

      play(animation)
    }
  }

  render () {
    return (
      <Svg id="motion-path-example"></Svg>
    )
  }
}

export default MotionPathExample
