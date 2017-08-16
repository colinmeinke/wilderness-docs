import Link from '../link'
import style from './style'

export default () => (
  <nav>
    <Link href="/">Wilderness</Link>

    <ul>
      <li>
        <Link href="/getting-started">
          Getting started
        </Link>

        <ul>
          <li>
            <Link href="/getting-started/installation">
              Installation
            </Link>
          </li>
          <li>
            <Link href="/getting-started/create-a-shape">
              Create a shape
            </Link>
          </li>
          <li>
            <Link href="/getting-started/animate-a-shape">
              Animate a shape
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/advanced">
          Advanced
        </Link>

        <ul>
          <li>
            <Link href="/advanced/queuing-multiple-shapes-on-a-timeline">
              Queuing multiple shapes on a timeline
            </Link>
          </li>
          <li>
            <Link href="/advanced/updating-timeline-playback">
              Updating timeline playback
            </Link>
          </li>
          <li>
            <Link href="/advanced/timeline-events">
              Timeline events
            </Link>
          </li>
          <li>
            <Link href="/advanced/middleware">
              Middleware
            </Link>
          </li>
          <li>
            <Link href="/advanced/forces">
              Forces
            </Link>
          </li>
          <li>
            <Link href="/advanced/motion-path">
              Motion path
            </Link>
          </li>
          <li>
            <Link href="/advanced/development-v-production">
              Development v production
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/api">
          API
        </Link>

        <ul>
          <li>
            <Link href="/api/definitions">
              Definitions
            </Link>
          </li>
          <li>
            <Link href="/api/the-shape-function">
              The shape function
            </Link>
          </li>
          <li>
            <Link href="/api/the-render-function">
              The render function
            </Link>
          </li>
          <li>
            <Link href="/api/the-timeline-function">
              The timeline function
            </Link>
          </li>
          <li>
            <Link href="/api/the-play-function">
              The play function
            </Link>
          </li>
          <li>
            <Link href="/api/the-pause-function">
              The pause function
            </Link>
          </li>
        </ul>
      </li>
    </ul>

    <style jsx>{ style }</style>
  </nav>
)
