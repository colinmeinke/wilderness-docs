import Link from '../link'
import Router from 'next/router'
import style from './style'

export default ({ handleFocus, handleRefresh, handleSwipe }) => {
  let touchStart

  const handleTouchStart = e => {
    touchStart = e.touches[ 0 ].clientX
  }

  const handleTouchEnd = e => {
    if (touchStart - e.changedTouches[ 0 ].clientX > 50) {
      handleSwipe()
    }
  }

  return (
    <nav onTouchStart={ handleTouchStart } onTouchEnd={ handleTouchEnd }>
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
            href="/advanced-features"
            handleFocus={ handleFocus }
            handleRefresh={ handleRefresh }
          >
            Advanced features
          </Link>

          <ul>
            <li>
              <Link
                nav
                subnav
                href="/advanced-features/create-a-shape-from-a-dom-node"
                handleFocus={ handleFocus }
                handleRefresh={ handleRefresh }
              >
                Create a shape from a DOM node
              </Link>
            </li>
            <li>
              <Link
                nav
                subnav
                href="/advanced-features/timeline-queuing"
                handleFocus={ handleFocus }
                handleRefresh={ handleRefresh }
              >
                Timeline queuing
              </Link>
            </li>
            <li>
              <Link
                nav
                subnav
                href="/advanced-features/updating-timeline-playback"
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
                href="/advanced-features/timeline-events"
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
                href="/advanced-features/transforms"
                handleFocus={ handleFocus }
                handleRefresh={ handleRefresh }
              >
                Transforms
              </Link>
            </li>
            <li>
              <Link
                nav
                subnav
                href="/advanced-features/middleware"
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
                href="/advanced-features/forces"
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
                href="/advanced-features/motion-path"
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
                href="/advanced-features/development-v-production"
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
}
