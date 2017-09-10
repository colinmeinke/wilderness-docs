import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness motionPath function">
    <Title>
      The <Code inline inherit>motionPath</Code> function
    </Title>

    <p>
      Creates a <Link href="/advanced-features/motion-path">motion path</Link>
      {' '} <Link href="/advanced-features/force">Force</Link> when passed a
      {' '} <Link href="/api/definitions#plain-shape-object">Plain Shape
      Object</Link>.
    </p>

    <Code>{`
motionPath(plainShapeObject)
    `}</Code>

    <Subtitle id="arguments">
      Arguments
    </Subtitle>

    <p>
      <strong>
        <Code inline>plainShapeObject</Code>
      </strong>
    </p>

    <p>
      The Plain Shape Object creates a motion path relative to the Shape it
      is applied to. For this reason it should almost always start from the
      point <Code inline>{`{ x: 0, y: 0 }`}</Code>.
    </p>

    <p>
      This Plain Shape Object can take three properties that have special
      significance in relation to a motion path.
    </p>

    <ul>
      <li>
        <Code inline>accuracy</Code> <small>(optional)</small> is a number, in
        degrees, that Wilderness determines a curve "straight enough" to be
        considered a straight line. This will determine how accurately a {' '}
        <Link href="/api/definitions#shape">Shape</Link> follows a motion path.
        However, the more accurate, the more calculations required, and
        therefore the worse the performance.
      </li>
      <li>
        <Code inline>easing</Code> <small>(optional)</small> is a string that
        maps to a function defined in {' '}
        <Link href="https://github.com/chenglou/tween-functions">Tween
        Functions</Link>, or a custom easing function. This is the easing with
        which the Shape travels the motion path.
      </li>
      <li>
        <Code inline>rotate</Code> <small>(optional)</small> is a boolean or a
        number that determines if the Shape should rotate along with the
        motion path. If set to a number, this is the angle to which the Shape
        is offset against the motion path's current angle.
      </li>
    </ul>

    <Subtitle id="return-value">
      Return value
    </Subtitle>

    <p>
      A Force function.
    </p>

    <ButtonGroup>
      <Link href="/api/the-plainshapeobject-function" button>
        Next up: The plainShapeObject function
      </Link>
    </ButtonGroup>
  </Layout>
)
