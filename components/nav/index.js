import Link from '../link'
import style from './style'

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/" secondary>
          What is Wilderness?
        </Link>
      </li>
      <li>
        <Link href="/getting-started" secondary>
          Getting started
        </Link>

        <ul>
          <li>
            <Link href="/getting-started/installation" primary>
              Installation
            </Link>
          </li>
          <li>
            <Link href="/getting-started/create-a-shape" primary>
              Create a shape
            </Link>
          </li>
          <li>
            <Link href="/getting-started/animate-a-shape" primary>
              Animate a shape
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/advanced" secondary>
          Advanced
        </Link>

        <ul>
          <li>
            <Link href="/advanced/creating-shapes-from-existing-dom-nodes" primary>
              Creating shapes from existing DOM nodes
            </Link>
          </li>
          <li>
            <Link href="/advanced/queuing-multiple-shapes-on-a-timeline" primary>
              Queuing multiple shapes on a timeline
            </Link>
          </li>
          <li>
            <Link href="/advanced/updating-timeline-playback" primary>
              Updating timeline playback
            </Link>
          </li>
          <li>
            <Link href="/advanced/timeline-events" primary>
              Timeline events
            </Link>
          </li>
          <li>
            <Link href="/advanced/middleware" primary>
              Middleware
            </Link>
          </li>
          <li>
            <Link href="/advanced/forces" primary>
              Forces
            </Link>
          </li>
          <li>
            <Link href="/advanced/motion-path" primary>
              Motion path
            </Link>
          </li>
          <li>
            <Link href="/advanced/development-v-production" primary>
              Development v production
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/api" secondary>
          API
        </Link>

        <ul>
          <li>
            <Link href="/api/definitions" primary>
              Definitions
            </Link>
          </li>
          <li>
            <Link href="/api/the-shape-function" primary>
              The shape function
            </Link>
          </li>
          <li>
            <Link href="/api/the-render-function" primary>
              The render function
            </Link>
          </li>
          <li>
            <Link href="/api/the-timeline-function" primary>
              The timeline function
            </Link>
          </li>
          <li>
            <Link href="/api/the-play-function" primary>
              The play function
            </Link>
          </li>
          <li>
            <Link href="/api/the-pause-function" primary>
              The pause function
            </Link>
          </li>
        </ul>
      </li>
    </ul>

    <style jsx>{ style }</style>
  </nav>
)
