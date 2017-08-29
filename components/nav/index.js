import Link from 'next/link'
import Router from 'next/router'
import style from './style'

const isActive = href => process.browser ? Router.route === href : false

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a className={ isActive('/') ? 'selected' : '' }>
            What is Wilderness?
          </a>
        </Link>
      </li>
      <li>
        <Link href="/getting-started">
          <a className={ isActive('/getting-started') ? 'selected' : '' }>
            Getting started
          </a>
        </Link>

        <ul>
          <li>
            <Link href="/getting-started/installation">
              <a className={ isActive('/getting-started/installation') ? 'selected' : '' }>
                Installation
              </a>
            </Link>
          </li>
          <li>
            <Link href="/getting-started/create-a-shape">
              <a className={ isActive('/getting-started/create-a-shape') ? 'selected' : '' }>
                Create a shape
              </a>
            </Link>
          </li>
          <li>
            <Link href="/getting-started/animate-a-shape">
              <a className={ isActive('/getting-started/animate-a-shape') ? 'selected' : '' }>
                Animate a shape
              </a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/advanced">
          <a className={ isActive('/advanced') ? 'selected' : '' }>
            Advanced
          </a>
        </Link>

        <ul>
          <li>
            <Link href="/advanced/creating-shapes-from-existing-dom-nodes">
              <a className={ isActive('/advanced/creating-shapes-from-existing-dom-nodes') ? 'selected' : '' }>
                Creating shapes from existing DOM nodes
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/queuing-multiple-shapes-on-a-timeline">
              <a className={ isActive('/advanced/queuing-multiple-shapes-on-a-timeline') ? 'selected' : '' }>
                Queuing multiple shapes on a timeline
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/updating-timeline-playback">
              <a className={ isActive('/advanced/updating-timeline-playback') ? 'selected' : '' }>
                Updating timeline playback
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/timeline-events">
              <a className={ isActive('/advanced/timeline-events') ? 'selected' : '' }>
                Timeline events
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/middleware">
              <a className={ isActive('/advanced/middleware') ? 'selected' : '' }>
                Middleware
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/forces">
              <a className={ isActive('/advanced/forces') ? 'selected' : '' }>
                Forces
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/motion-path">
              <a className={ isActive('/advanced/motion-path') ? 'selected' : '' }>
                Motion path
              </a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/development-v-production">
              <a className={ isActive('/advanced/development-v-production') ? 'selected' : '' }>
                Development v production
              </a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/api">
          <a className={ isActive('/api') ? 'selected' : '' }>
            API
          </a>
        </Link>

        <ul>
          <li>
            <Link href="/api/definitions">
              <a className={ isActive('/api/definitions') ? 'selected' : '' }>
                Definitions
              </a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-shape-function">
              <a className={ isActive('/api/the-shape-function') ? 'selected' : '' }>
                The shape function
              </a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-render-function">
              <a className={ isActive('/api/the-render-function') ? 'selected' : '' }>
                The render function
              </a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-timeline-function">
              <a className={ isActive('/api/the-timeline-function') ? 'selected' : '' }>
                The timeline function
              </a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-play-function">
              <a className={ isActive('/api/the-play-function') ? 'selected' : '' }>
                The play function
              </a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-pause-function">
              <a className={ isActive('/api/the-pause-function') ? 'selected' : '' }>
                The pause function
              </a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>

    <style jsx>{ style }</style>
  </nav>
)
