import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="The Wilderness timeline function">
    <Title>
      The <Code inline inherit>timeline</Code> function
    </Title>

    <p>
      Creates a <Link href="/api/definitions#timeline">Timeline</Link> when
      passed one or more <Link href="/api/definitions#shape">Shape</Link> or
      array.
    </p>

    <Code>{`
      timeline(shapeOrArray1, shapeOrArray2, ..., options)
    `}</Code>

    <Subtitle id="arguments">
      Arguments
    </Subtitle>

    <p>
      <strong>
        <Code inline>shapeOrArray1, shapeOrArray2, ...</Code>
      </strong>
    </p>

    <p>
      A list of one or more Shape or array.
    </p>

    <p>
      If passed an array instead of a Shape it should take the following form.
    </p>

    <Code>{`
      [ shape, options ]
    `}</Code>

    <p>
      Where:
    </p>

    <ul>
      <li><Code inline>shape</Code> is a Shape.</li>
      <li><Code inline>options</Code> is an object, where:
        <ul>
          <li><Code inline>name</Code> <small>(optional)</small> is a string or number.</li>
          <li><Code inline>queue</Code> <small>(optional)</small> is an object, where:
            <ul>
              <li>
                <Code inline>offset</Code> <small>(optional)</small> is the offset in milliseconds
                to adjust the queuing of this shape.
              </li>
              <li>
                <Code inline>at</Code> <small>(optional)</small> is the name of the Shape to queue
                at (in parallel).
              </li>
              <li>
                <Code inline>after</Code> <small>(optional)</small> is the name of the Shape to
                queue after (in sequence).
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

    <p>
      <strong>
        <Code inline>options</Code>
      </strong> {' '}
      (optional)
    </p>

    <p>
      An object holding both playback options and middleware, where:
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
      <li>
        <Code inline>middleware</Code> <small>(optional)</small> is an array of {' '}
        <Link href="/advanced/middleware">Middleware</Link>.
      </li>
    </ul>

    <Subtitle id="return-value">
      Return value
    </Subtitle>

    <p>
      A Timeline.
    </p>
  </Layout>
)
