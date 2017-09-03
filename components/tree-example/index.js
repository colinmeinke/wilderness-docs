import { Component } from 'react'
import Svg from '../svg'

class TreeExample extends Component {
  componentDidMount () {
    if (typeof window !== 'undefined') {
      const { shape, render } = Wilderness

      const plainShapeObject = {
        type: 'g',
        shapes: [
          {
            type: 'polygon',
            points: '48 10 48 27 50 28 52 27 52 10 50 11',
            fill: 'hsl(40,20%,25%)'
          },
          {
            type: 'polygon',
            points: '48 10 48 27 50 28 50 11',
            fill: 'hsl(40,20%,15%)'
          },
          {
            type: 'polygon',
            points: '50 0 60 5 60 15 50 20 40 15 40 5',
            fill: 'hsl(90,50%,60%)'
          },
          {
            type: 'polygon',
            points: '60 5 60 15 50 20 50 10',
            fill: 'hsl(90,50%,45%)'
          },
          {
            type: 'polygon',
            points: '50 10 50 20 40 15 40 5',
            fill: 'hsl(90,50%,35%)'
          }
        ]
      }

      const tree = shape(plainShapeObject)

      render(document.querySelector('#tree-example'), tree)
    }
  }

  render () {
    return (
      <Svg height="28" id="tree-example" />
    )
  }
}

export default TreeExample
