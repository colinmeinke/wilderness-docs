import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Title from '../../components/title'

export default () => (
  <Layout title="Updating timeline playback with Wilderness">
    <Title>
      Updating timeline playback
    </Title>

    <p>
      Just as the <Link href="/api/the-timeline-function">the {' '}
      <Code inline>timeline</Code> function</Link> can accept an object of
      playback options as its final argument, so can the {' '}
      <Link href="/api/the-play-function">the <Code inline>play</Code> {' '}
      function</Link> and <Link href="/api/the-pause-function">the {' '}
      <Code inline>pause</Code> function</Link>.
    </p>

    <p>
      Passing playback options to the <Code inline>play</Code> and {' '}
      <Code inline>pause</Code> functions is how we can restart, reverse or seek
      to a specific part of an animation.
    </p>

    <p>
      For example, this is how you would seek to 80% completion of a Timeline
      (assigned to the variable <Code inline>animation</Code>).
    </p>

    <Code>{`
import { play } from 'wilderness'

play(animation, {
  initialIterations: 0.8
  iterations: 0.2
})
    `}</Code>

    <ButtonGroup>
      <Link href="/advanced-features/timeline-events" button>
        Next lesson: Timeline events
      </Link>
    </ButtonGroup>
  </Layout>
)
