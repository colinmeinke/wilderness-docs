import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import ForceExample from '../../components/force-example'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness forces">
    <Title>
      Forces
    </Title>

    <p>
      Like <Link href="/advanced-features/middleware">Middleware</Link>, Forces
      allow us to define custom functions that apply to a tween.
    </p>

    <p>
      If you remember from our Middleware lesson, Middleware is applied at the
      {' '} <Link href="/api/definitions#timeline">Timeline</Link> level and
      converts non-tweenable values (stings etc.) to tweenable values (numbers).
    </p>

    <p>
      Forces differ in that they are applied at the {' '}
      <Link href="/api/definitions#shape">Shape</Link> level. Their role is to
      adjust the value of a Shape's points and/or attributes post-tween.
    </p>

    <p>
      Why might we want to adjust a Shape's values?
    </p>

    <p>
      The main use case for a Force is to apply an "external force" to a Shape.
      An external force could be a motion path, rotation or physics.
    </p>

    <p>
      Let's take the case of a motion path. Normally, when we animate a Shape
      from position A to position B, the movement between the two positions will
      occur in a straight line. To move the Shape along a motion path instead,
      we can use a Force. This Force would offset the Shape depending on its
      position in the tween.
    </p>

    <Subtitle>
      Create a force
    </Subtitle>

    <p>
      A Force is just a function that is called on each tick of a tween. The
      function receives two arguments.
    </p>

    <ol>
      <li>
        A Frame Shape &ndash; the data required to render a Shape. A Frame Shape
        is calculated by tweening between two {' '}
        <Link href="/api/definitions#keyframe">Keyframes</Link>. It takes the
        form of an object that can contain three properties.
        <ol>
          <li>
            <Code inline>points</Code> &ndash; shape data as defined by {' '}
            <Link href="https://github.com/colinmeinke/points">Points</Link>.
          </li>
          <li>
            <Code inline>attributes</Code> &ndash; an object of additional Shape
            attributes (eg. <Code inline>fill</Code>).
          </li>
          <li>
            <Code inline>childFrameShape</Code> &ndash; an array of child Frame
            Shapes.
          </li>
        </ol>
      </li>
      <li>
        A Frame Position &ndash; a number (between 0 and 1 inc.) representing
        the Shape's current progress between two Keyframes.
      </li>
    </ol>

    <p>
      A Force must return a Frame Shape.
    </p>

    <p>
      As an example, let's create a Force called {' '}
      <Code inline>shakeForce</Code>, that randomly adjusts the {' '}
      <Code inline>x</Code> and <Code inline>y</Code> value of each point in a
      Shape.
    </p>

    <Code>{`
import { shape, timeline, render, play } from 'wilderness'

const randomlyAdjustPoint = point => ({
  ...point,
  x: point.x + Math.floor(Math.random() * 10) - 5,
  y: point.y + Math.floor(Math.random() * 10) - 5
})

const shakeForce = ({ points, attributes, childFrameShapes }, framePosition) => ({
  points: points.map(randomlyAdjustPoint),
  attributes,
  childFrameShapes
})

const plainShapeObject = {
  type: 'rect',
  x: 5,
  y: 5,
  width: 10,
  height: 10,
  fill: '#1F9FFD'
}

const keyframe1 = plainShapeObject

const keyframe2 = {
  ...plainShapeObject,
  transforms: [[ 'offset', 80 ]],
  forces: [ shakeForce ]
}

const shakyRect = shape(keyframe1, keyframe2)

const animation = timeline(shakyRect, {
  duration: 2000,
  iterations: Infinity,
  alternate: true
})

render(document.querySelector('svg'), animation)

play(animation)
    `}</Code>

    <ForceExample />

    <p>
      Wowzers. What a shaky little guy.
    </p>

    <p>
      Notice in the example above that we add Forces to a Shape by defining a
      {' '} <Code inline>forces</Code> array on the Keyframe we are tweening to.
    </p>

    <Subtitle>
      Force helpers
    </Subtitle>

    <p>
      Wilderness has a couple of Force function helpers built in.
    </p>

    <ul>
      <li>
        ⚡️ <Link href="/advanced-features/motion-path">Motion path</Link>.
      </li>
      <li>
        🎡 Rotate (coming soon).
      </li>
    </ul>

    <ButtonGroup>
      <Link href="/advanced-features/motion-path" button>
        Next lesson: Motion path
      </Link>
    </ButtonGroup>
  </Layout>
)
