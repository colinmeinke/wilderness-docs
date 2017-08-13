import Head from '../../components/head'
import Link from 'next/link'
import Nav from '../../components/nav'

export default () => (
  <div>
    <Head title="Wilderness definitions" />
    <Nav />
    <main>
      <h1>
        Definitions
      </h1>

      <h2 id="plain-shape-object">
        Plain Shape Object
      </h2>

      <p>
        A Plain Shape Object is an object that is made up of core shape
        properties as specified by {' '}
        <Link href="https://github.com/colinmeinke/svg-points#example-shape"><a>SVG
        points</a></Link>. It can additionally hold other useful properties,
        such as <code>fill</code> or <code>duration</code>.
      </p>

      <h2 id="shape">
        Shape
      </h2>

      <p>
        A Shape consists of one or
        more <Link href="#keyframe"><a>Keyframes</a></Link>.
      </p>

      <p>
        It is created by passing one or more {' '}
        <Link href="#plain-shape-object"><a>Plain Shape Objects</a></Link> {' '}
        to <Link href="/api/the-shape-function"><a>the {' '}
        <code>shape</code> function</a></Link>
      </p>

      <p>
        A Shape can be rendered with {' '}
        <Link href="/api/the-render-function"><a>the <code>render</code> {' '}
        function</a></Link> and placed on a timeline with {' '}
        <Link href="/api/the-timeline-function"><a>the {' '}
        <code>timeline</code> function</a></Link>.
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
        <Link href="#shape"><a>Shape</a></Link> it also holds the data to tween
        from the previous Keyframe.
      </p>

      <h2 id="frame">
        Frame
      </h2>

      <p>
        A Frame is a <Link href="#shape"><a>Shape</a></Link> at a specific point
        in time.
      </p>

      <p>
        This will either be identicle to a {' '}
        <Link href="#keyframe"><a>Keyframe</a></Link>, or if in between two
        Keyframes the Frame will be calculated using a tween.
      </p>

      <h2 id="timeline">
        Timeline
      </h2>

      <p>
        A Timeline is a sequence
        of <Link href="#shape"><a>Shapes</a></Link> over time.
      </p>

      <p>
        It is created by passing one or more Shapes to {' '}
        <Link href="/api/the-timeline-function"><a>the {' '}
        <code>timeline</code> function</a></Link>
      </p>

      <p>
        A Timeline can be rendered
        with <Link href="/api/the-render-function"><a>the <code>render</code> function</a></Link>,
        played with
        the <Link href="/api/the-play-function"><a>the <code>play</code> function</a></Link> and
        paused with <Link href="/api/the-pause-function"><a>the <code>pause</code> function</a></Link>.
      </p>
    </main>
  </div>
)
