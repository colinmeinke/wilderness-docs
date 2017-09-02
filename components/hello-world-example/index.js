import { Component } from 'react'
import style from './style'
import Svg from '../svg'

class HelloWorldExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, timeline, render, play } = Wilderness
      const svg = document.querySelector('#hello-world-example')
      const circle = svg.querySelector('circle')
      const rect = svg.querySelector('rect')

      const morph = shape(
        { el: circle, style: 'display: block' },
        { el: rect, style: 'display: block' }
      )

      const animation = timeline(morph, {
        duration: 2000,
        iterations: Infinity,
        alternate: true
      })

      render(svg, animation)

      play(animation)
    }
  }

  render () {
    return (
      <Svg id="hello-world-example">
        <circle cx="10" cy="10" r="10" fill="#DBF8A1"></circle>
        <rect x="80" y="0" width="20" height="20" fill="#1F9FFD"></rect>
        <style jsx>{ style }</style>
      </Svg>
    )
  }
}

export default HelloWorldExample
