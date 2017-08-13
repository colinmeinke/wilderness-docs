import Head from '../components/head'
import Link from 'next/link'
import Nav from '../components/nav'

export default () => (
  <div>
    <Head title="Wilderness - An SVG animation API" />
    <Nav />
    <main>
      <h1>Wilderness - An SVG animation API</h1>
      <Link href="/getting-started">
        <a>
          Learn Wilderness
        </a>
      </Link>
    </main>
  </div>
)
