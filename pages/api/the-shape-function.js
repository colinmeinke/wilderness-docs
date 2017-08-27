import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="The Wilderness shape function">
    <Title>
      The <Code inline inherit>shape</Code> function
    </Title>

    <p>
      Creates a <Link href="/api/definitions#shape">Shape</Link> when passed one
      or more <Link href="/api/definitions#plain-shape-object">Plain Shape
      Object</Link>.
    </p>

    <Code>{`
      shape(plainShapeObject1, plainShapeObject2, ..., options)
    `}</Code>

    <Subtitle id="arguments">
      Arguments
    </Subtitle>

    <p>
      <strong>
        <Code inline>plainShapeObject1, plainShapeObject2, ...</Code>
      </strong>
    </p>

    <p>
      A list of one or more Plain Shape Object. Each Plain Shape Object will
      create a <Link href="/api/definitions#keyframe">Keyframe</Link>.
    </p>

    <p>
      <strong>
        <Code inline>options</Code>
      </strong> {' '}
      <small>(optional)</small>
    </p>

    <p>
      An object, where:
    </p>

    <ul>
      <li><Code inline>name</Code> <small>(optional)</small> is a string or number.</li>
    </ul>

    <Subtitle id="return-value">
      Return value
    </Subtitle>

    <p>
      A Shape.
    </p>
  </Layout>
)
