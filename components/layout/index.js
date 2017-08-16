import Head from 'next/head'
import Nav from '../nav'
import style from './style'

export default ({ children, title = 'Wilderness' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    { children }
    <style jsx global>{ style }</style>
  </div>
)
