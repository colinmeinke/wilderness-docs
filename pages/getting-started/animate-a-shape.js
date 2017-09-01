import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Animate a shape with Wilderness">
    <Title>
      Animate a shape
    </Title>

    <p>
      In the previous lesson we learned how
      to <Link href="/getting-started/create-a-shape">create a shape</Link>
      {' '} using the <Code inline>shape</Code> and <Code inline>render</Code> functions.
    </p>

    <p>
      Now we are going to learn how to animate a shape using
      the <Code inline>timeline</Code> and <Code inline>play</Code> functions.
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
      Each Plain Shape Object that we pass as an argument to
      the <Code inline>shape</Code> function will create a
      Shape <Link href="/api/definitions#keyframe">Keyframe</Link>.
    </p>

    <Code>{`
import { shape } from 'wilderness'

const keyframe1 = {
  type: 'circle',
  cx: 50,
  cy: 50,
  r: 20,
  fill: 'yellow'
}

const keyframe2 = {
  type: 'rect',
  x: 30,
  y: 30,
  width: 40,
  height: 40,
  fill: 'rgb(238,85,68)',
  duration: 2000
}

const morph = shape(keyframe1, keyframe2)
    `}</Code>

    <p>
      In the code above, we have created a Shape and assigned it to the
      variable <Code inline>morph</Code>. The Shape has two Keyframes - a yellow
      circle, and a red(ish) square.
    </p>

    <p>
      These two Keyframes are spaced 2000 milliseconds apart, as we have set
      a <Code inline>duration</Code> property on <Code inline>keyframe2</Code>.
    </p>

    <Subtitle id="creating-a-timeline">
      Creating a timeline
    </Subtitle>

    <p>
      If we went ahead and rendered our Shape at this point, it would be
      rendered as a static shape at its first Keyframe.
    </p>

    <p>
      That isn't what we want, as we are attempting to create a dynamic Shape
      that morphs over time.
    </p>

    <p>
      First we need to create
      a <Link href="/api/definitions#timeline">Timeline</Link> using the {' '}
      <Code inline>timeline</Code> function.
    </p>

    <p>
      At its most basic, the <Code inline>timeline</Code> function takes a single
      argument - a Shape.
    </p>

    <Code>{`
import { shape, render, timeline } from 'wilderness'

const keyframe1 = {
  type: 'circle',
  cx: 50,
  cy: 50,
  r: 20,
  fill: 'yellow'
}

const keyframe2 = {
  type: 'rect',
  x: 30,
  y: 30,
  width: 40,
  height: 40,
  fill: 'rgb(238,85,68)',
  duration: 2000
}

const morph = shape(keyframe1, keyframe2)

const animation = timeline(morph)

render(document.querySelectorAll('svg'), animation)
    `}</Code>

    <p>
      Instead of passing the <Code inline>render</Code> function our Shape, we pass
      it our Timeline (that we have assigned to the
      variable <Code inline>animation</Code>).
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
  cx: 50,
  cy: 50,
  r: 20,
  fill: 'yellow'
}

const keyframe2 = {
  type: 'rect',
  x: 30,
  y: 30,
  width: 40,
  height: 40,
  fill: 'rgb(238,85,68)',
  duration: 2000
}

const morph = shape(keyframe1, keyframe2)

const animation = timeline(morph)

render(document.querySelectorAll('svg'), animation)

play(animation)
    `}</Code>

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
      iterate the Timeline infinitely, and to alternate direction every time
      an iteration completes.
    </p>

    <Code>{`
import { shape, render, timeline, play } from 'wilderness'

const keyframe1 = {
  type: 'circle',
  cx: 50,
  cy: 50,
  r: 20,
  fill: 'yellow'
}

const keyframe2 = {
  type: 'rect',
  x: 30,
  y: 30,
  width: 40,
  height: 40,
  fill: 'rgb(238,85,68)',
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

    <hr />

    <p>
      With just a few simple lines of code we have created our first animation
      with Wilderness. I think we can all be pretty proud of ourselves!
    </p>

    <p>
      Take some time to experiment with what you've learned. When you're ready
      to learn some of the more advanced concepts in Wilderness, we will take
      a look at Timeline queuing.
    </p>

    <Link href="/advanced" prefetch button>
      Next lesson: Advanced features
    </Link>
  </Layout>
)
