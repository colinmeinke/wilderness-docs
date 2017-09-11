import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness Middleware">
    <Title>
      Middleware
    </Title>

    <p>
      Tweening can only work between two numbers. For example, imagine we want
      to tween from <Code inline>0</Code> to <Code inline>1</Code>. At
      80% completion (of a linear tween) the resulting value would be {' '}
      <Code inline>0.8</Code>.
    </p>

    <p>
      How, though, do we tween from a fill value of <Code inline>red</Code> to
      {' '} <Code inline>#E54</Code>?
    </p>

    <p>
      Enter Middleware 💪.
    </p>

    <p>
      In Wilderness, Middleware is just a fancy way to say "some functions".
    </p>

    <p>
      The role of each Middleware is to turn non-numeric values (untweenable)
      into numeric values (tweenable) before a tween is carried out. Then, after
      a tween has been performed, to return those values back to their initial
      format.
    </p>

    <p>
      Wilderness ships with two Middlewares.
    </p>

    <ul>
      <li>
        🎨 Color Middleware &ndash; allows for the tweening of color strings. e.g.
        {' '} <Code inline>#E54</Code>.
      </li>
      <li>
        📐 Unit Middleware &ndash; allows for the tweening of unit strings. e.g.
        {' '} <Code inline>50px</Code>.
      </li>
    </ul>

    <p>
      These are both enabled by default on every {' '}
      <Link href="/api/definitions#timeline">Timeline</Link>.
    </p>

    <Subtitle>
      Enable/disable Middleware
    </Subtitle>

    <p>
      Middleware can be enabled or disabled on a Timeline by Timeline basis.
    </p>

    <p>
      <Link href="/api/the-timeline-function">The <Code inline>timeline</Code>
      {' '} function</Link> takes a final options argument. This options object
      can take an optional <Code inline>middleware</Code> property, whose value
      is an array of Middlewares to enable.
    </p>

    <Code>{`
import { shape, timeline, colorMiddleware } from 'wilderness'

const keyframe1 = { shape: 'circle', cx: 5, cy: 5, r: 3, fill: 'red' }
const keyframe2 = { shape: 'circle', cx: 5, cy: 5, r: 3, fill: '#E54' }

const morph = shape(keyframe1, keyframe2)

const animation = timeline(morph, {
  Middleware: [ colorMiddleware ]
})
    `}</Code>

    <p>
      If no <Code inline>middleware</Code> property is defined then by default
      both color and unit Middleware will be enabled.
    </p>

    <p>
      To remove these default Middlewares we can simply pass an empty array to
      {' '} <Code inline>middleware</Code>.
    </p>

    <Subtitle>
      Custom Middleware
    </Subtitle>

    <p>
      It's simple to create our own Middleware.
    </p>

    <p>
      Each Middleware must have three named exports.
    </p>

    <ol>
      <li>
        <Code inline>name</Code> a unique string.
      </li>
      <li>
        <Code inline>input</Code> a function that transforms non-numeric
        values to numeric values pre-tween.
      </li>
      <li>
        <Code inline>output</Code> a function that reverts transformed values
        back to their initial format post-tween.
      </li>
    </ol>

    <p>
      For a detailed example, take a look at how the built in {' '}
      <Link href="https://github.com/colinmeinke/wilderness-core/blob/master/src/color-Middleware.js">Color
      Middleware</Link> works.
    </p>

    <p>
      We mention above that Middleware is used to transform non-numeric
      values to numeric values for tweening. However, there is no technical
      reason as to why our Middleware couldn't manipulate numeric values
      instead.
    </p>

    <ButtonGroup>
      <Link href="/advanced-features/forces" button>
        Next lesson: Forces
      </Link>
    </ButtonGroup>
  </Layout>
)
