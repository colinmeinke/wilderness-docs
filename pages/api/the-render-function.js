import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness render function">
    <Title>
      The <Code inline inherit>render</Code> function
    </Title>

    <p>
      Appends one or more <Link href="/api/definitions#shape">Shape</Link> or
      {' '} <Link href="/api/definitions#timeline">Timeline</Link> to a DOM
      node.
    </p>

    <Code>{`
render(parentNode, shapeOrTimeline1, shapeOrTimeline2, ...)
    `}</Code>

    <Subtitle id="arguments">
      Arguments
    </Subtitle>

    <p>
      <strong>
        <Code inline>parentNode</Code>
      </strong>
    </p>

    <p>
      A DOM node that all Shapes and Timeline Shapes will be appended to.
    </p>

    <p>
      <strong>
        <Code inline>shapeOrTimeline1, shapeOrTimeline2, ...</Code>
      </strong>
    </p>

    <p>
      A list of one or more Shape or Timeline. Each Shape (either directly passed as an
      argument, or as part of a Timeline) will be appended to the {' '}
      <Code inline>parentNode</Code> at its current {' '}
      <Link href="/api/definitions#frame">Frame</Link>.
    </p>

    <Subtitle id="return-value">
      Return value
    </Subtitle>

    <p>
      None.
    </p>

    <ButtonGroup>
      <Link href="/getting-started/create-a-shape" button primary>
        Lesson: Create a shape
      </Link>

      <Link href="/api/the-timeline-function" button>
        Next up: The timeline function
      </Link>
    </ButtonGroup>
  </Layout>
)
