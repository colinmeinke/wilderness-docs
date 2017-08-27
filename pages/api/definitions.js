import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness definitions">
    <Title>
      Definitions
    </Title>

    <Subtitle id="plain-shape-object">
      Plain Shape Object
    </Subtitle>

    <p>
      A Plain Shape Object is an object that is made up of core shape
      properties as specified by {' '}
      <Link href="https://github.com/colinmeinke/svg-points#example-shape">SVG
      points</Link>. It can additionally hold other useful properties,
      such as <Code inline>fill</Code> or <Code inline>duration</Code>.
    </p>

    <Subtitle id="shape">
      Shape
    </Subtitle>

    <p>
      A Shape consists of one or
      more <Link href="#keyframe">Keyframes</Link>.
    </p>

    <p>
      It is created by passing one or more {' '}
      <Link href="#plain-shape-object">Plain Shape Objects</Link> to {' '}
      <Link href="/api/the-shape-function"> the {' '} <Code inline>shape</Code>
      function</Link>
    </p>

    <p>
      A Shape can be rendered with {' '}
      <Link href="/api/the-render-function">the <Code inline>render</Code> {' '}
      function</Link> and placed on a timeline with {' '}
      <Link href="/api/the-timeline-function">the <Code inline>timeline</Code> {' '}
      function</Link>.
    </p>

    <Subtitle id="keyframe">
      Keyframe
    </Subtitle>

    <p>
      A Keyframe holds the type, dimension  and color data required to render
      a shape.
    </p>

    <p>
      If the Keyframe is not the first of a {' '}
      <Link href="#shape">Shape</Link> it also holds the data to tween
      from the previous Keyframe.
    </p>

    <Subtitle id="frame">
      Frame
    </Subtitle>

    <p>
      A Frame is a <Link href="#shape">Shape</Link> at a specific point in time.
    </p>

    <p>
      This will either be identicle to a {' '}
      <Link href="#keyframe">Keyframe</Link>, or if in between two Keyframes the
      Frame will be calculated using a tween.
    </p>

    <Subtitle id="timeline">
      Timeline
    </Subtitle>

    <p>
      A Timeline is a sequence of <Link href="#shape">Shapes</Link> over time.
    </p>

    <p>
      It is created by passing one or more Shapes to {' '}
      <Link href="/api/the-timeline-function">the <Code inline>timeline</Code> {' '}
      function</Link>
    </p>

    <p>
      A Timeline can be rendered
      with <Link href="/api/the-render-function">the <Code inline>render</Code> {' '}
      function</Link>, played with the <Link href="/api/the-play-function">the
      {' '} <Code inline>play</Code> function</Link> and paused with {' '}
      <Link href="/api/the-pause-function">the <Code inline>pause</Code> {' '}
      function</Link>.
    </p>
  </Layout>
)
