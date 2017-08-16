import Layout from '../../components/layout'
import Link from '../../components/link'
import Title from '../../components/title'

export default () => (
  <Layout title="Getting started with Wilderness">
    <Title>
      Getting started
    </Title>

    <p>
      With Wilderness it's simple to get up and running. In no time we'll have
      our first shape created, rendered and animated.
    </p>

    <p>
      Before we learn how
      to <Link href="/getting-started/create-a-shape">create a shape</Link> with
      Wilderness, we first need to install it.
    </p>

    <Link href="/getting-started/installation" prefetch button>
      First up: Installation
    </Link>
  </Layout>
)
