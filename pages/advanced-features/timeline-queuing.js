import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import QueueParallelExample from '../../components/queue-parallel-example'
import QueueSequenceExample from '../../components/queue-sequence-example'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Timeline queuing with Wilderness">
    <Title>
      Timeline queuing
    </Title>

    <p>
      Often we need to animate more that one {' '}
      <Link href="/api/definitions#shape">Shape</Link>.
    </p>

    <p>
      Fortunately for us, the Wilderness {' '}
      <Link href="/api/definitions#timeline">Timeline</Link> allows for complex
      queuing of Shapes in either sequence (one after the other) or in parallel
      (alongside each other).
    </p>

    <p>
      By default, when we pass more than one Shape to a Timeline, they will
      queue in sequence.
    </p>

    <Code>{`
import { shape, timeline, render, play } from 'wilderness'

const shape1Keyframe1 = {
  type: 'circle',
  cx: 5,
  cy: 10,
  r: 5,
  fill: '#DBF8A1'
}

const shape1Keyframe2 = {
  type: 'rect',
  x: 40,
  y: 5,
  width: 10,
  height: 10,
  fill: '#1F9FFD'
}

const shape2Keyframe1 = {
  type: 'rect',
  x: 50,
  y: 5,
  width: 10,
  height: 10,
  fill: '#1F9FFD'
}

const shape2Keyframe2 = {
  type: 'circle',
  cx: 95,
  cy: 10,
  r: 5,
  fill: '#DBF8A1'
}

const shape1 = shape(shape1Keyframe1, shape1Keyframe2)
const shape2 = shape(shape2Keyframe1, shape2Keyframe2)

const animation = timeline(shape1, shape2, {
  duration: 2000,
  iterations: Infinity,
  alternate: true
})

render(document.querySelector('svg'), animation)

play(animation)
    `}</Code>

    <QueueSequenceExample />

    <Subtitle>
      Fine grain queue control
    </Subtitle>

    <p>
      As well as Shapes, <Link href="/api/the-timeline-function">the {' '}
      <Code inline>timeline</Code> function</Link> can also accept arrays as
      arguments. When passing an array argument to the {' '}
      <Code inline>timeline</Code> function the first item should be a Shape,
      and the second an options object.
    </p>

    <Code>{`
timeline(
  [ shape1, { name: 'SHAPE_1' } ],
  [ shape2, { name: 'SHAPE_2', queue: { after: 'SHAPE_1', offset: -200 } } ]
)
    `}</Code>

    <p>
      This options object has two properties that can help with fine grain
      queue control &ndash; <Code inline>name</Code> (a string or a number) and
      {' '} <Code inline>queue</Code> (an object).
    </p>

    <p>
      The <Code inline>name</Code> property creates a unique reference to a
      Shape.
    </p>

    <p>
      This unique <Code inline>name</Code> value can be referenced from another
      Shape's <Code inline>queue.at</Code> or <Code inline>queue.after</Code>
      {' '} properties.
    </p>

    <p>
      The mutually exclusive <Code inline>at</Code> and {' '}
      <Code inline>after</Code> properties queue a Shape in parallel or sequence
      respectively.
    </p>

    <p>
      If neither the <Code inline>at</Code> nor <Code inline>after</Code> {' '}
      property is defined, the <Code inline>after</Code> property will be set to
      reference the previous Shape in the Timeline. This is the reason why by
      default Wilderness queues a Timeline in sequence.
    </p>

    <p>
      The final <Code inline>queue</Code> property to understand is {' '}
      <Code inline>offset</Code>. This simply offsets the Shape from its
      position in the Timeline by the defined number of milliseconds.
    </p>

    <Code>{`
import { shape, timeline, render, play } from 'wilderness'

const shape1Keyframe1 = {
  type: 'circle',
  cx: 5,
  cy: 5,
  r: 5,
  fill: '#DBF8A1'
}

const shape1Keyframe2 = {
  type: 'rect',
  x: 90,
  y: 0,
  width: 10,
  height: 10,
  fill: '#1F9FFD',
  duration: 1000
}

const shape2Keyframe1 = {
  type: 'circle',
  cx: 5,
  cy: 15,
  r: 5,
  fill: '#1F9FFD'
}

const shape2Keyframe2 = {
  type: 'rect',
  x: 90,
  y: 10,
  width: 10,
  height: 10,
  fill: '#DBF8A1',
  duration: 1000
}

const shape1 = shape(shape1Keyframe1, shape1Keyframe2)
const shape2 = shape(shape2Keyframe1, shape2Keyframe2)

const shape1WithOpts = [ shape1, {
  name: 'SHAPE_1'
} ]

const shape2WithOpts = [ shape2, {
  queue: { at: 'SHAPE_1', offset: 250 }
} ]

const animation = timeline(shape1WithOpts, shape2WithOpts, {
  iterations: Infinity,
  alternate: true
})

render(document.querySelector('svg'), animation)

play(animation)
    `}</Code>

    <QueueParallelExample />

    <p>
      Something to note is that when we are working with fine grain queue
      control we should be setting our <Code inline>duration</Code> {' '}
      properties at the <Link href="/api/definitions#keyframe">Keyframe</Link>
      {' '} level (on our {' '}
      <Link href="/api/definitions#plain-shape-object">Plain Shape
      Objects</Link>). The reason for this is that all queue calculations are
      made before playback options are applied to the timeline.
    </p>

    <p>
      Take a look at the <Link href="/api/the-timeline-function">Timeline API
      reference</Link> for further detail.
    </p>

    <ButtonGroup>
      <Link href="/advanced-features/updating-timeline-playback" button>
        Next lesson: Updating timeline playback
      </Link>
    </ButtonGroup>
  </Layout>
)
