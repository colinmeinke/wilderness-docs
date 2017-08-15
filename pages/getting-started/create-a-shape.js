import Layout from '../../components/layout'
import Link from 'next/link'

export default () => (
  <Layout title="Create a shape with Wilderness">
    <h1>
      Create a shape
    </h1>

    <h2 id="basic-shapes">
      Basic shapes
    </h2>

    <p>
      In this lesson we're going to use Wilderness to hand-code an SVG circle,
      and then render it to an HTML page.
    </p>

    <p>
      Firstly, we need a way to define shapes - their type, dimensions and
      color. This is done with a basic javascript object, which in Wilderness
      we call a <Link href="/api/definitions#plain-shape-object"><a>Plain
      Shape Object</a></Link>.
    </p>

    <pre>{`
      const plainShapeObject = {
        type: 'circle',
        cx: 50,
        cy: 50,
        r: 20,
        fill: 'yellow'
      }
    `}</pre>

    <p>
      The code above defines a yellow circle. However, as it's only a
      javascript object, it isn't of much use on its own.
    </p>

    <p>
      This is where the <code>shape</code> function comes in.
    </p>

    <p>
      The job of the <code>shape</code> function is to create
      a <Link href="/api/definitions#shape"><a>Shape</a></Link>. A Shape can
      be rendered, placed on a timeline, and animated.
    </p>

    <p>
      At its most basic, the <code>shape</code> function takes a Plain Shape
      Object as a single argument.
    </p>

    <pre>{`
      import { shape } from 'wilderness'

      const plainShapeObject = {
        type: 'circle',
        cx: 50,
        cy: 50,
        r: 20,
        fill: 'yellow'
      }

      const circle = shape(plainShapeObject)
    `}</pre>

    <p>
      We've now created our first Shape, and assigned it to a variable
      named <code>circle</code>. Pretty simple so far, right?
    </p>

    <p>
      This Shape can be rendered to an HTML page using
      the <code>render</code> function.
    </p>

    <pre>{`
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
    `}</pre>

    <p>
      Voila! We have created our first SVG shape, and added it to the DOM,
      with Wilderness.
    </p>

    <p>
      You will notice that the <code>render</code> function's first argument
      is a DOM node. This is the parent node to which we wish to append our
      circle.
    </p>

    <p>
      If we wanted to render multiple Shapes, we simply add additional
      arguments to the <code>render</code> function.
    </p>

    <pre>{`
      render(document.querySelector('svg'), shape1, shape2, shape3)
    `}</pre>

    <h2 id="group-shapes">
      Group shapes
    </h2>

    <p>
      The process to create group shapes is identical to that of a single
      shape. The only difference is that our Plain Shape Object should follow
      the <Link href="https://github.com/colinmeinke/svg-points#g"><a>SVG
      points specification for group shapes</a></Link>.
    </p>

    <p>
      Let's create a tree!
    </p>

    <pre>{`
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
    `}</pre>

    <hr />

    <p>
      We've learned how to create and render an SVG shape with Wilderness.
      Next up let's learn how to animate a shape!
    </p>

    <Link href="/getting-started/animate-a-shape" prefetch>
      <a>
        Next lesson: Animate a shape
      </a>
    </Link>
  </Layout>
)
