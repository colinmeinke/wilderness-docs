import Layout from '../../components/layout'
import Link from 'next/link'

export default () => (
  <Layout title="The Wilderness render function">
    <h1>
      The <code>render</code> function
    </h1>

    <p>
      Appends one or more {' '}
      <Link href="/api/definitions#shape"><a>Shape</a></Link> or {' '}
      <Link href="/api/definitions#timeline"><a>Timeline</a></Link> to a DOM
      node.
    </p>

    <pre>{`
      render(parentNode, shapeOrTimeline1, shapeOrTimeline2, ...)
    `}</pre>

    <h2 id="arguments">
      Arguments
    </h2>

    <p>
      <strong>
        <code>parentNode</code>
      </strong>
    </p>

    <p>
      A DOM node that all Shapes and Timeline Shapes will be appended to.
    </p>

    <p>
      <strong>
        <code>shapeOrTimeline1, shapeOrTimeline2, ...</code>
      </strong>
    </p>

    <p>
      A list of one or more Shape or Timeline. Each Shape (either directly passed as an
      argument, or as part of a Timeline) will be appended to the {' '}
      <code>parentNode</code> at its current {' '}
      <Link href="/api/definitions#frame"><a>Frame</a></Link>.
    </p>

    <h2 id="return-value">
      Return value
    </h2>

    <p>
      None.
    </p>
  </Layout>
)
