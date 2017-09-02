import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import MorphExample from '../../components/morph-example'
import MorphRenderExample from '../../components/morph-render-example'
import MorphWithOptsExample from '../../components/morph-with-opts-example'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Animate a shape with Wilderness">
    <Title>
      Animate a shape
    </Title>

    <p>
      In the previous lesson we learned how to {' '}
      <Link href="/getting-started/create-a-shape">create a shape</Link> {' '}
      using the <Code inline>shape</Code> and <Code inline>render</Code> {' '}
      functions.
    </p>

    <p>
      Now we are going to learn how to animate a shape using the {' '}
      <Code inline>timeline</Code> and <Code inline>play</Code> functions.
    </p>

    <Subtitle id="creating-keyframes">
      Creating keyframes
    </Subtitle>

    <p>
      Previously, we created a Shape by passing a single argument (a Plain
      Shape Object) to the <Code inline>shape</Code> function.
    </p>

    <p>
      However, the <Code inline>shape</Code> function can also take multiple
      arguments.
    </p>

    <p>
      Each Plain Shape Object that we pass as an argument to the {' '}
      <Code inline>shape</Code> function will create a {' '}
      <Link href="/api/definitions#keyframe">Keyframe</Link>.
    </p>

    <Code>{`
import { shape } from 'wilderness'

const keyframe1 = {
  type: 'circle',
  cx: 10,
  cy: 10,
  r: 10,
  fill: '#DBF8A1'
}

const keyframe2 = {
  type: 'rect',
  x: 80,
  y: 0,
  width: 20,
  height: 20,
  fill: '#1F9FFD',
  duration: 2000
}

const morph = shape(keyframe1, keyframe2)
    `}</Code>

    <p>
      In the code above, we have created a Shape and assigned it to the
      variable <Code inline>morph</Code>. The Shape has two Keyframes &ndash; a
      green circle, and a blue square.
    </p>

    <p>
      Later, when we we add <Code inline>morph</Code> to a {' '}
      <Link href="/api/definitions#timeline">Timeline</Link> and start playback,
      the Shape will animate from a circle (Keyframe 1), to a rectangle
      (Keyframe 2).
    </p>

    <p>
      These two Keyframes are spaced 2000 milliseconds apart, as we have set
      a <Code inline>duration</Code> property on Keyframe 1.
    </p>

    <Subtitle id="creating-a-timeline">
      Creating a timeline
    </Subtitle>

    <p>
      If we went ahead and rendered our Shape at this point, without first
      adding it to a Timeline, it would be rendered as a static shape at its
      first Keyframe.
    </p>

    <p>
      However, our aim is to create a dynamic shape that animates over time. In
      Wilderness can achive this by creating a Timeline using the {' '}
      <Code inline>timeline</Code> function.
    </p>

    <p>
      At its most basic, the <Code inline>timeline</Code> function takes a single
      argument &ndash; a Shape.
    </p>

    <Code>{`
import { shape, render, timeline } from 'wilderness'

const keyframe1 = {
  type: 'circle',
  cx: 10,
  cy: 10,
  r: 10,
  fill: '#DBF8A1'
}

const keyframe2 = {
  type: 'rect',
  x: 80,
  y: 0,
  width: 20,
  height: 20,
  fill: '#1F9FFD',
  duration: 2000
}

const morph = shape(keyframe1, keyframe2)

const animation = timeline(morph)

render(document.querySelectorAll('svg'), animation)
    `}</Code>

    <MorphRenderExample />

    <p>
      This time, instead of passing a Shape to the <Code inline>render</Code>
      {' '} function, we pass it our newly created Timeline (that we have
      assigned to the variable <Code inline>animation</Code>).
    </p>

    <Subtitle id="#playing-a-timeline">
      Playing a timeline
    </Subtitle>

    <p>
      Once we have created and rendered a Timeline, we can then start playback
      of the Timeline using the <Code inline>play</Code> function.
    </p>

    <Code>{`
import { shape, render, timeline, play } from 'wilderness'

const keyframe1 = {
  type: 'circle',
  cx: 10,
  cy: 10,
  r: 10,
  fill: '#DBF8A1'
}

const keyframe2 = {
  type: 'rect',
  x: 80,
  y: 0,
  width: 20,
  height: 20,
  fill: '#1F9FFD',
  duration: 2000
}

const morph = shape(keyframe1, keyframe2)

const animation = timeline(morph)

render(document.querySelectorAll('svg'), animation)

play(animation)
    `}</Code>

    <MorphExample />

    <Subtitle id="setting-playback-options">
      Setting playback options
    </Subtitle>

    <p>
      Both the <Code inline>timeline</Code> and <Code inline>play</Code> functions can take
      an optional final argument. This argument is an object containing
      options to control playback of the Timeline.
    </p>

    <p>
      Below, we use this feature to instruct our <Code inline>play</Code> function to
      iterate the Timeline infinitely, and to alternate playback direction every
      time an iteration completes.
    </p>

    <Code>{`
import { shape, render, timeline, play } from 'wilderness'

const keyframe1 = {
  type: 'circle',
  cx: 10,
  cy: 10,
  r: 10,
  fill: '#DBF8A1'
}

const keyframe2 = {
  type: 'rect',
  x: 80,
  y: 0,
  width: 20,
  height: 20,
  fill: '#1F9FFD',
  duration: 2000
}

const morph = shape(keyframe1, keyframe2)

const animation = timeline(morph)

const playbackOptions = {
  alternate: true,
  iterations: Infinity
}

render(document.querySelectorAll('svg'), animation)

play(animation, playbackOptions)
    `}</Code>

    <MorphWithOptsExample />

    <hr />

    <p>
      With just a few lines of code we have created our first animation with
      Wilderness.
    </p>

    <p>
      That's the basics covered! I think we can all be pretty proud of
      ourselves! Take some time to experiment with what you've learned.
    </p>

    <p>
      When you're ready to continue, we will learn just how powerful Wilderness
      is, by exploring some of its advanced features.
    </p>

    <ButtonGroup>
      <Link href="/advanced-features" prefetch button>
        Next lesson: Advanced features
      </Link>
    </ButtonGroup>
  </Layout>
)
