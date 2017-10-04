import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Timeline events with Wilderness">
    <Title>
      Timeline events
    </Title>

    <p>
      Wilderness has an event system built in that allows us to hook into
      the <Link href="/api/definitions#timeline">Timeline</Link> lifecycle.
    </p>

    <p>
      One use case for events can be to trigger an action when an animation
      reaches a certain position.
    </p>


    <Code>{`
import { shape, render, timeline, play } from 'wilderness'

const morph = shape(
  { el: document.querySelector('circle') },
  { el: document.querySelector('rect') },
)

const animation = timeline(morph, {
  events: [
    [ 'timeline.finish', () => alert('timeline finished') ]
  ]
})

render(document.querySelector('svg'), animation)

play(animation)
    `}</Code>

    <p>
      Timeline events are defined by passing an <Code inline>events</Code> {' '}
      property to the options argument of {' '}
      <Link href="/api/the-timeline-function">the <Code inline>timeline</Code>
      {' '} function</Link>.
    </p>

    <p>
      The <Code inline>events</Code> property value takes the form of an array
      of events. Each event is itself an array, where the first item is the
      event name, and the second argument is the callback function to run when
      the event occurs.
    </p>

    <Subtitle id="event-names">
      The <Code inline inherit>timeline.start</Code> event
    </Subtitle>

    <p>
      Published when playback hits the start of a Timeline.
    </p>

    <Subtitle>
      The <Code inline inherit>timeline.finish</Code> event
    </Subtitle>

    <p>
      Published when playback hits the end of a Timeline.
    </p>

    <Subtitle>
      The <Code inline inherit>shape.start</Code> event
    </Subtitle>

    <p>
      Published when playback hits the start of a {' '}
      <Link href="/api/definitions#shape">Shape</Link>.
    </p>

    <p>
      The callback function will be passed a single argument &ndash; {' '}
      <Code inline>shapeName</Code>.
    </p>

    <Subtitle>
      The <Code inline inherit>shape.finish</Code> event
    </Subtitle>

    <p>
      Published when playback hits the end of a Shape.
    </p>

    <p>
      The callback function will be passed a single argument &ndash; {' '}
      <Code inline>shapeName</Code>.
    </p>

    <Subtitle>
      The <Code inline inherit>keyframe</Code> event
    </Subtitle>

    <p>
      Published when playback hits a Shape {' '}
      <Link href="/api/definitions#keyframe">Keyframe</Link>.
    </p>

    <p>
      The callback function will be passed two arguments &ndash; {' '}
      <Code inline>shapeName</Code> and <Code inline>keyframeName</Code>.
    </p>

    <Subtitle>
      The <Code inline inherit>frame</Code> event
    </Subtitle>

    <p>
      Published on every tick of an animation.
    </p>

    <ButtonGroup>
      <Link href="/advanced-features/transforms" button>
        Next lesson: Transforms
      </Link>
    </ButtonGroup>
  </Layout>
)
