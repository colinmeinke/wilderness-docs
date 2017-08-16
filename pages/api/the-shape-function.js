import Layout from '../../components/layout'
import Link from 'next/link'
import Title from '../../components/title'

export default () => (
  <Layout title="The Wilderness shape function">
    <Title>
      The <code>shape</code> function
    </Title>

    <p>
      Creates a <Link href="/api/definitions#shape"><a>Shape</a></Link> when
      passed one or more {' '}
      <Link href="/api/definitions#plain-shape-object"><a>Plain Shape
      Object</a></Link>.
    </p>

    <pre>{`
      shape(plainShapeObject1, plainShapeObject2, ..., options)
    `}</pre>

    <h2 id="arguments">
      Arguments
    </h2>

    <p>
      <strong>
        <code>plainShapeObject1, plainShapeObject2, ...</code>
      </strong>
    </p>

    <p>
      A list of one or more Plain Shape Object. Each Plain Shape Object will
      create a <Link href="/api/definitions#keyframe"><a>Keyframe</a></Link>.
    </p>

    <p>
      <strong>
        <code>options</code>
      </strong> {' '}
      (optional)
    </p>

    <p>
      An object, where:
    </p>

    <ul>
      <li><code>name</code> (optional) is a string or number.</li>
    </ul>

    <h2 id="return-value">
      Return value
    </h2>

    <p>
      A Shape.
    </p>
  </Layout>
)
