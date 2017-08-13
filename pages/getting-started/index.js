import Head from '../../components/head'
import Link from 'next/link'
import Nav from '../../components/nav'

export default () => (
  <div>
    <Head title="Getting started with Wilderness" />
    <Nav />
    <main>
      <h1>Getting started</h1>

      <p>
        With Wilderness it's simple to get up and running. In no time we'll have
        our first shape created, rendered and animated.
      </p>

      <p>
        Before we learn how
        to <Link href="/getting-started/create-a-shape"><a>create a
        shape</a></Link> with Wilderness, we first need to install it.
      </p>

      <Link href="/getting-started/installation" prefetch>
        <a>
          First lesson: Installation
        </a>
      </Link>
    </main>
  </div>
)
