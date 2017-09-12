import { Component } from 'react'
import style from './style'

class Logo extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, render } = Wilderness

      const plainShapeObject = {
        type: 'g',
        shapes: [
          {
            type: 'path',
            d: 'M8,12v1l8,-4v-1z',
            fill: 'hsl(80,55%,30%)'
          },
          {
            type: 'path',
            d: 'M0,8v1l8,4v-1z',
            fill: 'hsl(80,65%,55%)'
          },
          {
            type: 'path',
            d: 'M0,8l8,4l8,-4l-8-4z',
            fill: 'hsl(80,75%,80%)'
          },
          {
            type: 'path',
            d: 'M5,9l0.75,0.375l0.75,-0.375l-0.75,-3z',
            fill: 'hsl(80,60%,45%)'
          },
          {
            type: 'path',
            d: 'M4,8l0.5,0.25l0.5,-0.25l-0.5,-1.5z',
            fill: 'hsl(80,60%,30%)'
          },
          {
            type: 'path',
            d: 'M11,8l0.5,0.25l0.5,-0.25l-0.5,-1.5z',
            fill: 'hsl(80,50%,30%)'
          },
          {
            type: 'path',
            d: 'M9,5.5l0.5,0.25l0.5,-0.25l-0.5,-1.5z',
            fill: 'hsl(80,50%,45%)'
          }
        ]
      }

      const logo = shape(plainShapeObject)

      render(document.querySelector('#logo'), logo)
    }
  }

  render () {
    return (
      <div>
        <strong>Wilderness</strong>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          preserveAspectRatio="xMidYMid meet"
          id="logo"
        >
        </svg>
        <style jsx>{ style }</style>
      </div>
    )
  }
}

export default Logo
