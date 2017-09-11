import ButtonGroup from '../../components/button-group'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness advanced features">
    <Title>
      Advanced features
    </Title>

    <p>
      Now that we've <Link href="/getting-started">learned the basics</Link>
      {' '} it's time for us to pack our bags, say our goodbyes and head out
      deep into the Wilderness 🌵⛺️.
    </p>

    <p>
      This next set of lessons will showcase just how powerful Wilderness can
      be when creating complex SVG animations.
    </p>

    <p>
      Let's go!
    </p>

    <ButtonGroup>
      <Link href="/advanced-features/create-a-shape-from-a-dom-node" button>
        Next lesson: Create a shape from a DOM node
      </Link>
    </ButtonGroup>
  </Layout>
)
