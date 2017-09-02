import ButtonGroup from '../components/button-group'
import Code from '../components/code'
import { color, grid } from '../config/style'
import HelloWorldExample from '../components/hello-world-example'
import Layout from '../components/layout'
import Link from '../components/link'
import Subtitle from '../components/subtitle'
import Title from '../components/title'

export default () => (
  <Layout title="Wilderness - An SVG animation API">
    <Title>
      <strong>Wilderness</strong><br />
      an SVG animation API
    </Title>

    <Subtitle>
      Summary
    </Subtitle>

    <ul>
      <li>🎉 Small file size <small>(14.7kb minified + gzip)</small></li>
      <li>🌟 Simple, functional API</li>
      <li>🐣 Morph from anything, to anything</li>
      <li>⏱️ Queue multiple animations on a timeline</li>
      <li>🚀 Powerful playback control</li>
    </ul>

    <Subtitle>
      Hello world
    </Subtitle>

    <Code>{`
import { shape, render, timeline, play } from 'wilderness'

const morph = shape(
  { el: document.querySelector('circle') },
  { el: document.querySelector('rect') },
)

const animation = timeline(morph, {
  duration: 2000,
  iterations: Infinity,
  alternate: true
})

render(document.querySelector('svg'), animation)

play(animation)
    `}</Code>

    <HelloWorldExample />

    <ButtonGroup>
      <Link
        href="https://github.com/colinmeinke/wilderness"
        prefetch
        button
        primary
      >
        View on Github
      </Link>

      <Link href="/getting-started" prefetch button>
        Learn Wilderness
      </Link>
    </ButtonGroup>
  </Layout>
)
