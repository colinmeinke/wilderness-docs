import Head from 'next/head'
import Nav from './nav'

export default ({ children, title = 'Wilderness' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    { children }
  </div>
)
