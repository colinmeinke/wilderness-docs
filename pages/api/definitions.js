import Layout from '../../components/layout'
import Link from '../../components/link'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness definitions">
    <Title>
      Definitions
    </Title>

    <h2 id="plain-shape-object">
      Plain Shape Object
    </h2>

    <p>
      A Plain Shape Object is an object that is made up of core shape
      properties as specified by {' '}
      <Link href="https://github.com/colinmeinke/svg-points#example-shape">SVG
      points</Link>. It can additionally hold other useful properties,
      such as <code>fill</code> or <code>duration</code>.
    </p>

    <h2 id="shape">
      Shape
    </h2>

    <p>
      A Shape consists of one or
      more <Link href="#keyframe">Keyframes</Link>.
    </p>

    <p>
      It is created by passing one or more {' '}
      <Link href="#plain-shape-object">Plain Shape Objects</Link> to {' '}
      <Link href="/api/the-shape-function"> the {' '} <code>shape</code>
      function</Link>
    </p>

    <p>
      A Shape can be rendered with {' '}
      <Link href="/api/the-render-function">the <code>render</code> {' '}
      function</Link> and placed on a timeline with {' '}
      <Link href="/api/the-timeline-function">the <code>timeline</code> {' '}
      function</Link>.
    </p>

    <h2 id="keyframe">
      Keyframe
    </h2>

    <p>
      A Keyframe holds the type, dimension  and color data required to render
      a shape.
    </p>

    <p>
      If the Keyframe is not the first of a {' '}
      <Link href="#shape">Shape</Link> it also holds the data to tween
      from the previous Keyframe.
    </p>

    <h2 id="frame">
      Frame
    </h2>

    <p>
      A Frame is a <Link href="#shape">Shape</Link> at a specific point in time.
    </p>

    <p>
      This will either be identicle to a {' '}
      <Link href="#keyframe">Keyframe</Link>, or if in between two Keyframes the
      Frame will be calculated using a tween.
    </p>

    <h2 id="timeline">
      Timeline
    </h2>

    <p>
      A Timeline is a sequence of <Link href="#shape">Shapes</Link> over time.
    </p>

    <p>
      It is created by passing one or more Shapes to {' '}
      <Link href="/api/the-timeline-function">the <code>timeline</code> {' '}
      function</Link>
    </p>

    <p>
      A Timeline can be rendered
      with <Link href="/api/the-render-function">the <code>render</code> {' '}
      function</Link>, played with the <Link href="/api/the-play-function">the
      {' '} <code>play</code> function</Link> and paused with {' '}
      <Link href="/api/the-pause-function">the <code>pause</code> {' '}
      function</Link>.
    </p>
  </Layout>
)
