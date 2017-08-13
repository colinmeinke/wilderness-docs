import Link from 'next/link'

export default () => (
  <nav>
    <a href="/">Wilderness</a>

    <ul>
      <li>
        <Link href="/getting-started">
          <a>Getting started</a>
        </Link>

        <ul>
          <li>
            <Link href="/getting-started/installation">
              <a>Installation</a>
            </Link>
          </li>
          <li>
            <Link href="/getting-started/create-a-shape">
              <a>Create a shape</a>
            </Link>
          </li>
          <li>
            <Link href="/getting-started/animate-a-shape">
              <a>Animate a shape</a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/advanced">
          <a>Advanced</a>
        </Link>

        <ul>
          <li>
            <Link href="/advanced/queuing-multiple-shapes-on-a-timeline">
              <a>Queuing multiple shapes on a timeline</a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/updating-timeline-playback">
              <a>Updating timeline playback</a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/timeline-events">
              <a>Timeline events</a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/middleware">
              <a>Middleware</a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/forces">
              <a>Forces</a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/motion-path">
              <a>Motion path</a>
            </Link>
          </li>
          <li>
            <Link href="/advanced/development-v-production">
              <a>Development v production</a>
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/api">
          <a>API</a>
        </Link>

        <ul>
          <li>
            <Link href="/api/definitions">
              <a>Definitions</a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-shape-function">
              <a>The shape function</a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-render-function">
              <a>The render function</a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-timeline-function">
              <a>The timeline function</a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-play-function">
              <a>The play function</a>
            </Link>
          </li>
          <li>
            <Link href="/api/the-pause-function">
              <a>The pause function</a>
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
)
