import Head from '../../components/head'
import Link from 'next/link'
import Nav from '../../components/nav'

export default () => (
  <div>
    <Head title="The Wilderness timeline function" />
    <Nav />
    <main>
      <h1>
        The <code>timeline</code> function
      </h1>

      <p>
        Creates a <Link href="/api/definitions#timeline"><a>Timeline</a></Link>
        {' '} when passed one or more {' '}
        <Link href="/api/definitions#shape"><a>Shape</a></Link> or array.
      </p>

      <pre>{`
        timeline(shapeOrArray1, shapeOrArray2, ..., options)
      `}</pre>

      <h2 id="arguments">
        Arguments
      </h2>

      <p>
        <strong>
          <code>shapeOrArray1, shapeOrArray2, ...</code>
        </strong>
      </p>

      <p>
        A list of one or more Shape or array.
      </p>

      <p>
        If passed an array instead of a Shape it should take the following form.
      </p>

      <pre>{`
        [ shape, options ]
      `}</pre>

      <p>
        Where:
      </p>

      <ul>
        <li><code>shape</code> is a Shape.</li>
        <li><code>options</code> is an object, where:
          <ul>
            <li><code>name</code> (optional) is a string or number.</li>
            <li><code>queue</code> (optional) is an object, where:
              <ul>
                <li>
                  <code>offset</code> (optional) is the offset in milliseconds
                  to adjust the queuing of this shape.
                </li>
                <li>
                  <code>at</code> (optional) is the name of the Shape to queue
                  at (in parallel).
                </li>
                <li>
                  <code>after</code> (optional) is the name of the Shape to
                  queue after (in sequence).
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

      <p>
        <strong>
          <code>options</code>
        </strong> {' '}
        (optional)
      </p>

      <p>
        An object holding both playback options and middleware, where:
      </p>

      <ul>
        <li>
          <code>alternate</code> (optional) defines if the next iteration should
          reverse current direction?
        </li>
        <li>
          <code>duration</code> (optional) is the number of milliseconds that
          each iteration lasts.
        </li>
        <li>
          <code>initialIterations</code> (optional) is the starting number of
          iterations.
        </li>
        <li>
          <code>iterations</code> (optional) is the number of playback
          interations (additional to initialIterations).
        </li>
        <li>
          <code>reverse</code> (optional) defines if the the first iteration
          should start in a reverse direction?
        </li>
        <li>
          <code>started</code> (optional) is the UNIX timestamp of playback
          start.
        </li>
        <li>
          <code>middleware</code> (optional) is an array of {' '}
          <Link href="/advanced/middleware"><a>Middleware</a></Link>.
        </li>
      </ul>

      <h2 id="return-value">
        Return value
      </h2>

      <p>
        A Timeline.
      </p>
    </main>
  </div>
)
