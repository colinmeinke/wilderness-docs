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

const animation = timeline(morph)

animation.event.subscribe('timeline.finish', () => {
  alert('timeline finished')
})

render(document.querySelector('svg'), animation)

play(animation)
    `}</Code>

    <p>
      In the example above we subscribe to the {' '}
      <Code inline>timeline.finish</Code> event.
    </p>

    <p>
      We do this by calling the <Code inline>subscribe</Code> function of the
      {' '} <Code inline>event</Code> object that is exposed by a Timeline.
    </p>

    <p>
      The <Code inline>subscribe</Code> function takes two arguments, an event
      name, and a callback function.
    </p>

    <Subtitle>
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
      Published when playback hits the start of a Shape.
    </p>

    <p>
      The callback function will passed an object that includes a single
      property &ndash; <Code inline>shapeName</Code>.
    </p>

    <Subtitle>
      The <Code inline inherit>shape.finish</Code> event
    </Subtitle>

    <p>
      Published when playback hits the end of a Shape.
    </p>

    <p>
      The callback function will passed an object that includes a single
      property &ndash; <Code inline>shapeName</Code>.
    </p>

    <Subtitle>
      The <Code inline inherit>keyframe</Code> event
    </Subtitle>

    <p>
      Published when playback hits a Shape Keyframe.
    </p>

    <p>
      The callback function will passed an object that includes two properties
      &ndash; <Code inline>shapeName</Code> and {' '}
      <Code inline>keyframeName</Code>.
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
