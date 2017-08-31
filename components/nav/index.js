import Link from '../link'
import Router from 'next/router'
import style from './style'

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/" nav>
          What is Wilderness?
        </Link>
      </li>
      <li>
        <Link href="/getting-started" nav>
          Getting started
        </Link>

        <ul>
          <li>
            <Link href="/getting-started/installation" nav subnav>
              Installation
            </Link>
          </li>
          <li>
            <Link href="/getting-started/create-a-shape" nav subnav>
              Create a shape
            </Link>
          </li>
          <li>
            <Link href="/getting-started/animate-a-shape" nav subnav>
              Animate a shape
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/advanced" nav>
          Advanced
        </Link>

        <ul>
          <li>
            <Link href="/advanced/creating-shapes-from-existing-dom-nodes" nav subnav>
              Creating shapes from existing DOM nodes
            </Link>
          </li>
          <li>
            <Link href="/advanced/queuing-multiple-shapes-on-a-timeline" nav subnav>
              Queuing multiple shapes on a timeline
            </Link>
          </li>
          <li>
            <Link href="/advanced/updating-timeline-playback" nav subnav>
              Updating timeline playback
            </Link>
          </li>
          <li>
            <Link href="/advanced/timeline-events" nav subnav>
              Timeline events
            </Link>
          </li>
          <li>
            <Link href="/advanced/middleware" nav subnav>
              Middleware
            </Link>
          </li>
          <li>
            <Link href="/advanced/forces" nav subnav>
              Forces
            </Link>
          </li>
          <li>
            <Link href="/advanced/motion-path" nav subnav>
              Motion path
            </Link>
          </li>
          <li>
            <Link href="/advanced/development-v-production" nav subnav>
              Development v production
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/api" nav>
          API
        </Link>

        <ul>
          <li>
            <Link href="/api/definitions" nav subnav>
              Definitions
            </Link>
          </li>
          <li>
            <Link href="/api/the-shape-function" nav subnav>
              The shape function
            </Link>
          </li>
          <li>
            <Link href="/api/the-render-function" nav subnav>
              The render function
            </Link>
          </li>
          <li>
            <Link href="/api/the-timeline-function" nav subnav>
              The timeline function
            </Link>
          </li>
          <li>
            <Link href="/api/the-play-function" nav subnav>
              The play function
            </Link>
          </li>
          <li>
            <Link href="/api/the-pause-function" nav subnav>
              The pause function
            </Link>
          </li>
        </ul>
      </li>
    </ul>

    <style jsx>{ style }</style>
  </nav>
)
