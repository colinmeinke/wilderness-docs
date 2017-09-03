import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'
import DomNodeExample from '../../components/dom-node-example'

export default () => (
  <Layout title="Create a shape from an existing DOM node in Wilderness">
    <Title>
      Create a shape from an existing DOM node
    </Title>

    <p>
      Often, in the real world, we don't want to code our SVG shapes by hand.
    </p>

    <p>
      Luckily for us, Wilderness can create {' '}
      <Link href="/api/definitions#shape">Shapes</Link> from existing DOM nodes.
    </p>

    <p>
      Let's assume that in our HTML we have an SVG with a circle defined.
    </p>

    <Code>{`
<svg width="100" height="20" viewBox="0 0 100 20">
  <circle cx="50" cy="10" r="10" fill="#DBF8A1"></circle>
</svg>
    `}</Code>

    <p>
      When creating a Shape, we can automatically generate attributes by passing
      a DOM node to the <Code inline>el</Code> property of a {' '}
      <Link href="/api/definitions#plain-shape-object">Plain Shape Object</Link>.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const svg = document.querySelector('svg')
const circle = svg.querySelector('circle')

const plainShapeObject = {
  el: circle,
  fill: '#1F9FFD'
}

const circleClone = shape(plainShapeObject)

render(svg, circleClone)
    `}</Code>

    <DomNodeExample />

    <p>
      If we pass additional properties to a Plain Shape Object, as we have with
      the <Code inline>fill</Code> property in the example above, these will
      add to or overwrite the properties automatically generated from the DOM
      node.
    </p>

    <p>
      The example above is equivilent to the following hand-coded example.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const plainShapeObject = {
  type: 'circle',
  cx: 50,
  cy: 10,
  r: 10,
  fill: '#DBF8A1',
  fill: '#1F9FFD'
}

const circle = shape(plainShapeObject)

render(document.querySelector('svg'), circle)
    `}</Code>

    <Subtitle>
      Replace an existing DOM node
    </Subtitle>

    <p>
      Another thing that can be useful is to replace an existing DOM node with a
      Shape.
    </p>

    <p>
      <Link href="/api/the-shape-function">The <Code inline link>shape</Code>
      {' '} function</Link> takes a final argument of options. One of these
      options is the <Code inline>replace</Code> property. As you might guess,
      this allows us to define a DOM node that the Shape will replace when
      rendered.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const svg = document.querySelector('svg')
const circle = svg.querySelector('circle')

const plainShapeObject = {
  el: circle,
  fill: '#1F9FFD'
}

const circleClone = shape(plainShapeObject. { replace: circle })

render(svg, circleClone)
    `}</Code>

    <p>
      This time, our cloned circle will replace the existing DOM node when
      rendered, instead of being appended alongside it.
    </p>
  </Layout>
)
