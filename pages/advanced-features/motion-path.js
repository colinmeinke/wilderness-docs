import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import MotionPathExample from '../../components/motion-path-example'
import Title from '../../components/title'

export default () => (
  <Layout title="Motion path with Wildeness">
    <Title>
      Motion path
    </Title>

    <p>
      In the previous lesson we learned about {' '}
      <Link href="/advanced-features/forces">Forces</Link>.
    </p>

    <p>
      As we discussed, one of the main use cases for Forces is to apply a
      motion path to a <Link href="/api/definitions#shape">Shape</Link>.
    </p>

    <p>
      Helpfully, Wilderness provides a <Code inline>motionPath</Code> function
      that can create a Force for us.
    </p>

    <p>
      The <Code inline>motionPath</Code> function takes one argument, a {' '}
      <Link href="/api/definitions#plain-shape-object">Plain Shape
      Object</Link>, and returns a Force function.
    </p>

    <p>
      Let's get stuck staight into the code.
    </p>

    <Code>{`
const { motionPath, shape, timeline, render, play } = Wilderness

const plainShapeObject = {
  type: 'circle',
  cx: 5,
  cy: 5,
  r: 5,
  fill: '#DBF8A1'
}

const motionPathPlainShapeObject = {
  type: 'path',
  d: 'M0,0l22.5,10l22.5,-10l22.5,10l22.5,-10'
}

const keyframe1 = plainShapeObject

const keyframe2 = {
  ...plainShapeObject,
  forces: [ motionPath(motionPathPlainShapeObject) ]
}

const circleOnMotionPath = shape(keyframe1, keyframe2)

const animation = timeline(circleOnMotionPath, {
  duration: 2000,
  iterations: Infinity,
  alternate: true
})

render(document.querySelector('svg'), animation)

play(animation)
    `}</Code>

    <MotionPathExample />

    <p>
      For the purposes of visualising the motion path, in the render above we
      have added a line to show the trajectory of the motion path.
    </p>

    <p>
      As the Plain Shape Object that we pass to the {' '}
      <Code inline>motionPath</Code> function is relative to the effected Shape.
      The first point should almost always be at {' '}
      <Code inline>{`{ x: 0, y: 0 }`}</Code>. Anything other than this will
      offset the Shape's first {' '}
      <Link href="/api/definitions#keyframe">Keyframe</Link>.
    </p>

    <p>
      There are three special properties that can be set on the Plain Shape
      Object we pass to the <Code inline>motionPath</Code> function &ndash;
      {' '} <Code inline>accuracy</Code>, <Code inline>easing</Code> and {' '}
      <Code inline>rotate</Code>. For more detail, take a look at the {' '}
      <Link href="/api/the-motionpath-function">API documentation</Link>.
    </p>

    <ButtonGroup>
      <Link href="/advanced-features/development-v-production" button>
        Next lesson: Development v production
      </Link>
    </ButtonGroup>
  </Layout>
)
