import Button from '../components/button'
import Layout from '../components/layout'
import Link from 'next/link'
import Title from '../components/title'

export default () => (
  <Layout title="Wilderness - An SVG animation API">
    <Title>Wilderness - An SVG animation API</Title>
    <Link href="/getting-started">
      <Button>
        Learn Wilderness
      </Button>
    </Link>
  </Layout>
)
