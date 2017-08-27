import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="The Wilderness render function">
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
  </Layout>
)
