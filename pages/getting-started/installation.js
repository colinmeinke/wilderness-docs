import Head from '../../components/head'
import Link from 'next/link'
import Nav from '../../components/nav'

export default () => (
  <div>
    <Head title="Installing Wilderness" />
    <Nav />
    <main>
      <h1>Installation</h1>

      <p>
        Wilderness can be used as <Link href="#es2015-module"><a>an ES2015
        module</a></Link>, <Link href="#commonjs"><a>required with
        commonjs</a></Link> or <Link href="#umd"><a>loaded with a script
        element</a></Link>.
      </p>

      <p>
        Get Wilderness by installing the npm distribution:
      </p>

      <pre>{`
        yarn add wilderness
      `}</pre>

      <p>
        or
      </p>

      <pre>{`
        npm --save wilderness
      `}</pre>

      <p>
        Alternatively you can link to, or download, the distribution from
        the <Link href="https://unpkg.com/wilderness-core/"><a>unpkg
        CDN</a></Link>.
      </p>

      <h2 id="es2015-module">
        ES2015 module
      </h2>

      <pre>{`
        import { shape, timeline, render, play } from 'wilderness'
      `}</pre>

      <h2 id="commonjs">
        commonjs
      </h2>

      <pre>{`
        const { shape, timeline, render, play } = require('wilderness')
      `}</pre>

      <h2 id="umd">
        UMD
      </h2>

      <p>
        If you just want to drop a javascript file onto your page, then this is
        the method for you.
      </p>

      <p>
        Look in the `dist` directory of the distribution and select either the
        [development](https://unpkg.com/wilderness/dist/wilderness.development.js)
        or
        [production](https://unpkg.com/wilderness/dist/wilderness.production.js)
        file.
      </p>

      <p>
        Add a `script` tag linking to the file into your HTML layout, and you
        will then have access to the global `Wilderness` object.
      </p>

      <pre>{`
        const shape = Wilderness.shape
        const timeline = Wilderness.timeline
        const render = Wilderness.render
        const play = Wilderness.play
      `}</pre>

      <hr />

      <p>
        Now that we have Wilderness all ready to go, it's about time we learned
        how to use it!
      </p>

      <Link href="/getting-started/create-a-shape" prefetch>
        <a>Next lesson: Create a shape</a>
      </Link>
    </main>
  </div>
)
