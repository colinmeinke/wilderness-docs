import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Installing Wilderness">
    <Title>
      Installation
    </Title>

    <p>
      Wilderness is free and {' '}
      <Link href="https://github.com/colinmeinke/wilderness">open-source</Link>.
    </p>

    <p>
      It can be used as <Link href="#es2015-module">an ES2015 module</Link>,
      {' '} <Link href="#commonjs">required with commonjs</Link> or
      {' '} <Link href="#umd">loaded with a script element</Link>.
    </p>

    <p>
      Get Wilderness by installing the npm distribution:
    </p>

    <Code>{`
yarn add wilderness
    `}</Code>

    <p>
      or
    </p>

    <Code>{`
npm --save wilderness
    `}</Code>

    <p>
      Alternatively you can link to, or download, the distribution from
      the <Link href="https://unpkg.com/wilderness-core/">unpkg CDN</Link>.
    </p>

    <Subtitle id="es2015-module">
      ES2015 module
    </Subtitle>

    <Code>{`
import { shape, timeline, render, play } from 'wilderness'
    `}</Code>

    <Subtitle id="commonjs">
      commonjs
    </Subtitle>

    <Code>{`
const { shape, timeline, render, play } = require('wilderness')
    `}</Code>

    <Subtitle id="umd">
      UMD
    </Subtitle>

    <p>
      If you just want to drop a javascript file onto your page, then this is
      the method for you.
    </p>

    <p>
      Look in the <Code inline>dist</Code> directory of the distribution and
      select either the {' '}
      <Link href="https://unpkg.com/wilderness/dist/wilderness.development.js">development</Link>
      {' '} or {' '}
      <Link href="https://unpkg.com/wilderness/dist/wilderness.production.js">production</Link>
      {' '} file.
    </p>

    <p>
      Add a <Code inline>script</Code> tag linking to the file into your HTML
      layout.
    </p>

    <Code>{`
<script src="https://unpkg.com/wilderness/dist/wilderness.production.js"></script>
    `}</Code>

    <p>
      You will then have access to the global <Code inline>Wilderness</Code> {' '}
      object.
    </p>

    <Code>{`
const shape = Wilderness.shape
const timeline = Wilderness.timeline
const render = Wilderness.render
const play = Wilderness.play
    `}</Code>

    <hr />

    <p>
      Now that we have Wilderness all ready to go, it's about time we learned
      how to use it!
    </p>

    <Link href="/getting-started/create-a-shape" prefetch button>
      Next lesson: Create a shape
    </Link>
  </Layout>
)
