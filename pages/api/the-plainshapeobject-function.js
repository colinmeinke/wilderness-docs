import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness plainShapeObject function">
    <Title>
      The <Code inline inherit>plainShapeObject</Code> function
    </Title>

    <p>
      Creates a <Link href="/api/definitions#plain-shape-object">Plain Shape
      Object</Link> when passed a {' '}
      <Link href="/api/definitions#shape">Shape</Link>.
    </p>

    <Code>{`
plainShapeObject(shape)
    `}</Code>

    <Subtitle id="arguments">
      Arguments
    </Subtitle>

    <p>
      <strong>
        <Code inline>shape</Code>
      </strong>
    </p>

    <p>
      A Shape.
    </p>

    <Subtitle id="return-value">
      Return value
    </Subtitle>

    <p>
      A Plain Shape Object.
    </p>
  </Layout>
)
