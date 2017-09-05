import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import MoveIndexExample from '../../components/move-index-example'
import OffsetExample from '../../components/offset-example'
import ReverseExample from '../../components/reverse-example'
import RotateExample from '../../components/rotate-example'
import ScaleExample from '../../components/scale-example'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness transforms">
    <Title>
      Transforms
    </Title>

    <p>
      It is possible to transform shapes during {' '}
      <Link href="/api/definitions#shape">Shape</Link> creation by seting a
      {' '} <Code inline>transform</Code> property on a {' '}
      <Link href="/api/definitions#plain-shape-object">Plain Shape Object</Link>.
    </p>

    <p>
      The <Code inline>transform</Code> property takes the form of an array of
      transforms. These transforms are compounded in the order that they are
      defined.
    </p>

    <p>
      Each array item must itself be an array, where the first item is the
      transform key, and additional items are transform arguments.
    </p>

    <p>
      All transforms are mapped to their namesake functions in {' '}
      <Link href="https://github.com/colinmeinke/points#function-usage">Points</Link>.
    </p>

    <Subtitle id="scale">
      scale
    </Subtitle>

    <p>
      The <Code inline>scale</Code> transform scales a shape. It takes two
      arguments, a scale factor <small>(number)</small> and an anchor point
      {' '} <small>(string)</small>.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const rect = {
  type: 'rect',
  x: 40,
  y: 0,
  width: 20,
  height: 20,
  fill: '#DBF8A1'
}

const transformedRect = {
  ...rect,
  transforms: [[ 'scale', 0.5, 'topLeft' ]],
  fill: '#1F9FFD'
}

render(
  document.querySelector('svg'),
  shape(rect),
  shape(transformedRect)
)
    `}</Code>

    <ScaleExample />

    <Subtitle id="offset">
      offset
    </Subtitle>

    <p>
      The <Code inline>offset</Code> transform offsets a shape. It takes two
      arguments, an x offset <small>(number)</small> and a y offset
      {' '} <small>(number)</small>.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const rect = {
  type: 'rect',
  x: 0,
  y: 0,
  width: 10,
  height: 10,
  fill: '#DBF8A1'
}

const transformedRect = {
  ...rect,
  transforms: [[ 'offset', 90, 10 ]],
  fill: '#4F5448'
}

render(
  document.querySelector('svg'),
  shape(rect),
  shape(transformedRect)
)
    `}</Code>

    <OffsetExample />

    <Subtitle id="rotate">
      rotate
    </Subtitle>

    <p>
      The <Code inline>rotate</Code> transform rotates a shape. It takes a
      single argument, the rotation degrees <small>(number)</small>.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const rect = {
  type: 'rect',
  x: 45,
  y: 5,
  width: 10,
  height: 10,
  fill: '#DBF8A1'
}

const transformedRect = {
  ...rect,
  transforms: [[ 'rotate', 45 ]],
  fill: '#4F5448'
}

render(
  document.querySelector('svg'),
  shape(rect),
  shape(transformedRect)
)
    `}</Code>

    <RotateExample />

    <Subtitle id="moveIndex">
      moveIndex
    </Subtitle>

    <p>
      The <Code inline>moveIndex</Code> transform moves a shape's index point
      (first point).
    </p>

    <p>
      This is very useful when fine tuning a morph between two shapes.
    </p>

    <p>
      It takes a single argument, the number of points to move the index {' '}
      <small>(number)</small>.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const rect = {
  type: 'rect',
  x: 0,
  y: 0,
  width: 20,
  height: 20,
  fill: '#DBF8A1'
}

const transformedRect = {
  ...rect,
  transforms: [
    [ 'offset', 80 ],
    [ 'moveIndex', 2 ]
  ],
  fill: '#4F5448'
}

render(
  document.querySelector('svg'),
  shape(rect),
  shape(transformedRect)
)
    `}</Code>

    <MoveIndexExample />

    <p>
      For the purpose of visualising the <Code inline>moveIndex</Code> {' '}
      transform, in the example above we have first applied an {' '}
      <Code inline>offset</Code> to the shape. Dots have also been added to the
      render to represent each point (the blue dot is the index point).
    </p>

    <Subtitle id="reverse">
      reverse
    </Subtitle>

    <p>
      The <Code inline>reverse</Code> transform reverses the order of a shape's
      points.
    </p>

    <p>
      As with <Link href="#moveIndex">moveIndex</Link> this can also be useful
      when fine tuning a morph between two shapes. These two transforms can
      often be used together with good effect.
    </p>

    <p>
      It takes no additional arguments.
    </p>

    <Code>{`
import { shape, render } from 'wilderness'

const rect = {
  type: 'rect',
  x: 40,
  y: 0,
  width: 20,
  height: 20,
  fill: '#DBF8A1'
}

const transformedRect = {
  ...rect,
  transforms: [
    [ 'offset', 80 ],
    [ 'reverse' ]
  ],
  fill: '#4F5448'
}

render(
  document.querySelector('svg'),
  shape(rect),
  shape(transformedRect)
)
    `}</Code>

    <ReverseExample />

    <p>
      As with the <Code inline>modeIndex</Code> example, for the purpose of
      visualising the <Code inline>reverse</Code> transform, in the example
      above we have first applied an <Code inline>offset</Code> to the shape.
      Arrows have also been added to the render to represent each point and
      the direction of their order.
    </p>

    <ButtonGroup>
      <Link href="/advanced-features/middleware" button>
        Next lesson: Middleware
      </Link>
    </ButtonGroup>
  </Layout>
)
