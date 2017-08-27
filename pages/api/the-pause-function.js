import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="The Wilderness pause function">
    <Title>
      The <Code inline inherit>pause</Code> function
    </Title>

    <p>
      Stops playback of a {' '}
      <Link href="/api/definitions#timeline">Timeline</Link>.
    </p>

    <Code>{`
      pause(timeline, options)
    `}</Code>

    <Subtitle id="arguments">
      Arguments
    </Subtitle>

    <p>
      <strong>
        <Code inline>timeline</Code>
      </strong>
    </p>

    <p>
      A Timeline.
    </p>

    <p>
      <strong>
        <Code inline>options</Code>
      </strong> {' '}
      <small>(optional)</small>
    </p>

    <p>
      An object holding playback options, where:
    </p>

    <ul>
      <li>
        <Code inline>alternate</Code> <small>(optional)</small> defines if the next iteration should
        reverse current direction?
      </li>
      <li>
        <Code inline>duration</Code> <small>(optional)</small> is the number of milliseconds that
        each iteration lasts.
      </li>
      <li>
        <Code inline>initialIterations</Code> <small>(optional)</small> is the starting number of
        iterations.
      </li>
      <li>
        <Code inline>iterations</Code> <small>(optional)</small> is the number of playback
        interations (additional to initialIterations).
      </li>
      <li>
        <Code inline>reverse</Code> <small>(optional)</small> defines if the the first iteration
        should start in a reverse direction?
      </li>
      <li>
        <Code inline>started</Code> <small>(optional)</small> is the UNIX timestamp of playback
        start.
      </li>
    </ul>

    <Subtitle id="return-value">
      Return value
    </Subtitle>

    <p>
      None.
    </p>
  </Layout>
)
