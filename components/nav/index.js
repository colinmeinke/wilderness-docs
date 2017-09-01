import Link from '../link'
import Router from 'next/router'
import style from './style'

export default ({ onFocus }) => (
  <nav>
    <ul>
      <li>
        <Link href="/" nav onFocus={ onFocus }>
          What is Wilderness?
        </Link>
      </li>
      <li>
        <Link href="/getting-started" nav onFocus={ onFocus }>
          Getting started
        </Link>

        <ul>
          <li>
            <Link href="/getting-started/installation" nav subnav onFocus={ onFocus }>
              Installation
            </Link>
          </li>
          <li>
            <Link href="/getting-started/create-a-shape" nav subnav onFocus={ onFocus }>
              Create a shape
            </Link>
          </li>
          <li>
            <Link href="/getting-started/animate-a-shape" nav subnav onFocus={ onFocus }>
              Animate a shape
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/advanced" nav onFocus={ onFocus }>
          Advanced
        </Link>

        <ul>
          <li>
            <Link href="/advanced/creating-shapes-from-existing-dom-nodes" nav subnav onFocus={ onFocus }>
              Creating shapes from existing DOM nodes
            </Link>
          </li>
          <li>
            <Link href="/advanced/queuing-multiple-shapes-on-a-timeline" nav subnav onFocus={ onFocus }>
              Queuing multiple shapes on a timeline
            </Link>
          </li>
          <li>
            <Link href="/advanced/updating-timeline-playback" nav subnav onFocus={ onFocus }>
              Updating timeline playback
            </Link>
          </li>
          <li>
            <Link href="/advanced/timeline-events" nav subnav onFocus={ onFocus }>
              Timeline events
            </Link>
          </li>
          <li>
            <Link href="/advanced/middleware" nav subnav onFocus={ onFocus }>
              Middleware
            </Link>
          </li>
          <li>
            <Link href="/advanced/forces" nav subnav onFocus={ onFocus }>
              Forces
            </Link>
          </li>
          <li>
            <Link href="/advanced/motion-path" nav subnav onFocus={ onFocus }>
              Motion path
            </Link>
          </li>
          <li>
            <Link href="/advanced/development-v-production" nav subnav onFocus={ onFocus }>
              Development v production
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/api" nav onFocus={ onFocus }>
          API
        </Link>

        <ul>
          <li>
            <Link href="/api/definitions" nav subnav onFocus={ onFocus }>
              Definitions
            </Link>
          </li>
          <li>
            <Link href="/api/the-shape-function" nav subnav onFocus={ onFocus }>
              The shape function
            </Link>
          </li>
          <li>
            <Link href="/api/the-render-function" nav subnav onFocus={ onFocus }>
              The render function
            </Link>
          </li>
          <li>
            <Link href="/api/the-timeline-function" nav subnav onFocus={ onFocus }>
              The timeline function
            </Link>
          </li>
          <li>
            <Link href="/api/the-play-function" nav subnav onFocus={ onFocus }>
              The play function
            </Link>
          </li>
          <li>
            <Link href="/api/the-pause-function" nav subnav onFocus={ onFocus }>
              The pause function
            </Link>
          </li>
          <li>
            <Link href="/api/the-motionPath-function" nav subnav onFocus={ onFocus }>
              The motionPath function
            </Link>
          </li>
          <li>
            <Link href="/api/the-plainshapeobject-function" nav subnav onFocus={ onFocus }>
              The plainShapeObject function
            </Link>
          </li>
        </ul>
      </li>
    </ul>

    <style jsx>{ style }</style>
  </nav>
)
