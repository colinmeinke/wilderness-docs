import Layout from '../../components/layout'
import Link from 'next/link'

export default () => (
  <Layout title="Getting started with Wilderness">
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
  </Layout>
)
