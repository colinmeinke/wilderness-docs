import Head from '../../components/head'
import Link from 'next/link'
import Nav from '../../components/nav'

export default () => (
  <div>
    <Head title="Animate a shape with Wilderness" />
    <Nav />
    <main>
      <h1>
        Animate a shape
      </h1>

      <p>
        In the previous lesson we learned how
        to <Link href="/getting-started/create-a-shape"><a>create a shape</a></Link> using
        the <code>shape</code> and <code>render</code> functions.
      </p>

      <p>
        Now we are going to learn how to animate a shape using
        the <code>timeline</code> and <code>play</code> functions.
      </p>

      <h2 id="creating-keyframes">
        Creating keyframes
      </h2>

      <p>
        Previously, we created a Shape by passing a single argument (a Plain
        Shape Object) to the <code>shape</code> function.
      </p>

      <p>
        However, the <code>shape</code> function can also take multiple
        arguments.
      </p>

      <p>
        Each Plain Shape Object that we pass as an argument to
        the <code>shape</code> function will create a
        Shape <Link href="/api/definitions#keyframe"><a>Keyframe</a></Link>.
      </p>

      <pre>{`
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
      `}</pre>

      <p>
        In the code above, we have created a Shape and assigned it to the
        variable <code>morph</code>. The Shape has two Keyframes - a yellow
        circle, and a red(ish) square.
      </p>

      <p>
        These two Keyframes are spaced 2000 milliseconds apart, as we have set
        a <code>duration</code> property on <code>keyframe2</code>.
      </p>

      <h2 id="creating-a-timeline">
        Creating a timeline
      </h2>

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
        a <Link href="/api/definitions#timeline"><a>Timeline</a></Link> using
        the <code>timeline</code> function.
      </p>

      <p>
        At its most basic, the <code>timeline</code> function takes a single
        argument - a Shape.
      </p>

      <pre>{`
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
      `}</pre>

      <p>
        Instead of passing the <code>render</code> function our Shape, we pass
        it our Timeline (that we have assigned to the
        variable <code>animation</code>).
      </p>

      <h2 id="#playing-a-timeline">
        Playing a timeline
      </h2>

      <p>
        Once we have created and rendered a Timeline, we can then start playback
        of the Timeline using the <code>play</code> function.
      </p>

      <pre>{`
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
      `}</pre>

      <h2 id="setting-playback-options">
        Setting playback options
      </h2>

      <p>
        Both the <code>timeline</code> and <code>play</code> functions can take
        an optional final argument. This argument is an object containing
        options to control playback of the Timeline.
      </p>

      <p>
        Below, we use this feature to instruct our <code>play</code> function to
        iterate the Timeline infinitely, and to alternate direction every time
        an iteration completes.
      </p>

      <pre>{`
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
      `}</pre>

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

      <Link href="/advanced" prefetch>
        <a>
          Next lesson: Advanced features
        </a>
      </Link>
    </main>
  </div>
)
