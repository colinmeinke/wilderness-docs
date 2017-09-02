import Link from '../link'
import Router from 'next/router'
import style from './style'

export default ({ handleFocus, handleRefresh }) => (
  <nav>
    <ul>
      <li>
        <Link
          nav
          href="/"
          handleFocus={ handleFocus }
          handleRefresh={ handleRefresh }
        >
          What is Wilderness?
        </Link>
      </li>
      <li>
        <Link
          nav
          href="/getting-started"
          handleFocus={ handleFocus }
          handleRefresh={ handleRefresh }
        >
          Getting started
        </Link>

        <ul>
          <li>
            <Link
              nav
              subnav
              href="/getting-started/installation"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Installation
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/getting-started/create-a-shape"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Create a shape
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/getting-started/animate-a-shape"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Animate a shape
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link
          nav
          href="/advanced"
          handleFocus={ handleFocus }
          handleRefresh={ handleRefresh }
        >
          Advanced
        </Link>

        <ul>
          <li>
            <Link
              nav
              subnav
              href="/advanced/creating-shapes-from-existing-dom-nodes"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Creating shapes from existing DOM nodes
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/advanced/queuing-multiple-shapes-on-a-timeline"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Queuing multiple shapes on a timeline
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/advanced/updating-timeline-playback"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Updating timeline playback
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/advanced/timeline-events"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Timeline events
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/advanced/middleware"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Middleware
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/advanced/forces"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Forces
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/advanced/motion-path"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Motion path
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/advanced/development-v-production"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Development v production
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link
          nav
          href="/api"
          handleFocus={ handleFocus }
          handleRefresh={ handleRefresh }
        >
          API
        </Link>

        <ul>
          <li>
            <Link
              nav
              subnav
              href="/api/definitions"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              Definitions
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/api/the-shape-function"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              The shape function
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/api/the-render-function"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              The render function
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/api/the-timeline-function"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              The timeline function
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/api/the-play-function"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              The play function
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/api/the-pause-function"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              The pause function
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/api/the-motionpath-function"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              The motionPath function
            </Link>
          </li>
          <li>
            <Link
              nav
              subnav
              href="/api/the-plainshapeobject-function"
              handleFocus={ handleFocus }
              handleRefresh={ handleRefresh }
            >
              The plainShapeObject function
            </Link>
          </li>
        </ul>
      </li>
    </ul>

    <style jsx>{ style }</style>
  </nav>
)
