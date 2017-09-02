import { Component } from 'react'
import Link from '../link'
import Svg from '../svg'

class MorphExample extends Component {
  constructor (props) {
    super(props)
    this.restart = this.restart.bind(this)
  }

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

      this.animation = timeline(morph)

      render(document.querySelector('#morph-example'), this.animation)

      play(this.animation)
    }
  }

  restart (e) {
    e.preventDefault()
    const { play } = Wilderness
    play(this.animation, { initialIterations: 0, iterations: 1 })
  }

  render () {
    return (
      <div>
        <Svg id="morph-example" />
        <Link
          href="/getting-started/animate-a-shape#morph-example"
          handleClick={ this.restart }
          button
          primary
        >
          Restart
        </Link>
      </div>
    )
  }
}

export default MorphExample
