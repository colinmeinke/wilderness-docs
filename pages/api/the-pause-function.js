import Head from '../../components/head'
import Link from 'next/link'
import Nav from '../../components/nav'

export default () => (
  <div>
    <Head title="The Wilderness pause function" />
    <Nav />
    <main>
      <h1>
        The <code>pause</code> function
      </h1>

      <p>
        Stops playback of a {' '}
        <Link href="/api/definitions#timeline"><a>Timeline</a></Link>.
      </p>

      <pre>{`
        pause(timeline, options)
      `}</pre>

      <h2 id="arguments">
        Arguments
      </h2>

      <p>
        <strong>
          <code>timeline</code>
        </strong>
      </p>

      <p>
        A Timeline.
      </p>

      <p>
        <strong>
          <code>options</code>
        </strong> {' '}
        (optional)
      </p>

      <p>
        An object holding playback options, where:
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
      </ul>

      <h2 id="return-value">
        Return value
      </h2>

      <p>
        None.
      </p>
    </main>
  </div>
)
