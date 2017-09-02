import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Create a shape with Wilderness">
    <Title>
      Create a shape
    </Title>

    <Subtitle id="basic-shapes">
      Basic shapes
    </Subtitle>

    <p>
      In this lesson we're going to use Wilderness to hand-code an SVG circle,
      and then render it to an HTML page.
    </p>

    <p>
      Firstly, we need a way to define shapes &ndash; their type, dimensions and
      color. This is done with a basic javascript object, which in Wilderness
      we call a <Link href="/api/definitions#plain-shape-object">Plain Shape
      Object</Link>.
    </p>

    <Code>{`
const plainShapeObject = {
  type: 'circle',
  cx: 50,
  cy: 50,
  r: 20,
  fill: 'yellow'
}
    `}</Code>

    <p>
      The code above defines a yellow circle. However, as it's only a javascript
      object, it isn't of much use on its own.
    </p>

    <p>
      This is where the <Code inline>shape</Code> function comes in.
    </p>

    <p>
      The job of the <Code inline>shape</Code> function is to create a {' '}
      <Link href="/api/definitions#shape">Shape</Link>. A Shape can be rendered,
      placed on a timeline, and animated.
    </p>

    <p>
      At its most basic, the <Code inline>shape</Code> function takes a Plain
      Shape Object as a single argument.
    </p>

    <Code>{`
import { shape } from 'wilderness'

const plainShapeObject = {
  type: 'circle',
  cx: 50,
  cy: 50,
  r: 20,
  fill: 'yellow'
}

const circle = shape(plainShapeObject)
    `}</Code>

    <p>
      We've now created our first Shape, and assigned it to a variable named
      {' '} <Code inline>circle</Code>. Pretty simple so far, right?
    </p>

    <p>
      This Shape can be rendered to an HTML page using the {' '}
      <Code inline>render</Code> function.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const plainShapeObject = {
  type: 'circle',
  cx: 50,
  cy: 50,
  r: 20,
  fill: 'yellow'
}

const circle = shape(plainShapeObject)

render(document.querySelector('svg'), circle)
    `}</Code>

    <p>
      Voila! We have created our first SVG shape, and added it to the DOM, with
      Wilderness.
    </p>

    <p>
      You will notice that the <Code inline>render</Code> function's first
      argument is a DOM node. This is the parent node to which we wish to append
      our circle.
    </p>

    <p>
      If we want to render multiple Shapes, we simply add additional arguments
      to the <Code inline>render</Code> function.
    </p>

    <Code>{`
render(document.querySelector('svg'), shape1, shape2, shape3)
    `}</Code>

    <Subtitle id="group-shapes">
      Group shapes
    </Subtitle>

    <p>
      The process to create group shapes is identical to that of a single shape.
      The only difference is that our Plain Shape Object should follow the {' '}
      <Link href="https://github.com/colinmeinke/svg-points#g">SVG points
      specification for group shapes</Link>.
    </p>

    <p>
      Let's create a tree!
    </p>

    <Code>{`
const plainShapeObject = {
  type: 'g',
  shapes: [
    {
      type: 'polygon',
      points: '20 23 24 25 28 23 28 61 24 63 20 61',
      fill: '#594E3F'
    },
    {
      type: 'polygon',
      points: '20 23 24 25 24 63 20 61',
      fill: '#423A2F'
    },
    {
      type: 'polygon',
      points: '0 37 0 13 24 1 48 13 48 37 24 49',
      fill: '#58A45A'
    },
    {
      type: 'polygon',
      points: '0 13 24 1 48 13 24 25',
      fill: '#60B363'
    },
    {
      type: 'polygon',
      points: '0 13 24 25 24 49 0 37',
      fill: '#4D8F4F'
    }
  ]
}

const tree = shape(plainShapeObject)

render(document.querySelectorAll('svg'), tree)
    `}</Code>

    <hr />

    <p>
      We've learned how to create and render an SVG shape with Wilderness.
      Next up let's learn how to animate a shape!
    </p>

    <ButtonGroup>
      <Link href="/getting-started/animate-a-shape" prefetch button>
        Next lesson: Animate a shape
      </Link>
    </ButtonGroup>
  </Layout>
)
