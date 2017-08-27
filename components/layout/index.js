import Head from 'next/head'
import Nav from '../nav'
import style, { globalStyle } from './style'

export default ({ children, title = 'Wilderness' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400|Karla:400|Roboto+Mono:400"
        rel="stylesheet"
      />
    </Head>
    <div className="container">
      <Nav />
      <main>
        { children }
      </main>
    </div>
    <style jsx>{ style }</style>
    <style jsx global>{ globalStyle }</style>
  </div>
)
