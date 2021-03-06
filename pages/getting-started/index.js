import ButtonGroup from '../../components/button-group'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Title from '../../components/title'

export default () => (
  <Layout title="Getting started with Wilderness">
    <Title>
      Getting started
    </Title>

    <p>
      The Wilderness API is simple, intuative and easy to learn. The basics can
      be learned in under 10 minutes.
    </p>

    <p>
      But let's not get ahead of ourselves. Before we learn how
      to <Link href="/getting-started/create-a-shape">create a shape</Link>, we
      first need to install Wilderness.
    </p>

    <ButtonGroup>
      <Link href="/getting-started/installation" prefetch button>
        First up: Installation
      </Link>
    </ButtonGroup>
  </Layout>
)
