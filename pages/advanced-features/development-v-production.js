import ButtonGroup from '../../components/button-group'
import Code from '../../components/code'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Subtitle from '../../components/subtitle'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness development and production builds">
    <Title>
      Development v production
    </Title>

    <p>
      Each of the <Link href="/getting-started/installation">Wilderness
      flavours</Link> come in two formats &ndash; development and production.
    </p>

    <p>
      These, unsurprisingly, should be used in our development and production
      environments respectively.
    </p>

    <p>
      When using the ES2015 module or commonjs Wilderness flavours, to compile
      for production we need to make sure {' '}
      <Code inline>process.env.NODE_ENV</Code> is set to {' '}
      <Code inline>production</Code>.
    </p>

    <Subtitle>
      Development
    </Subtitle>

    <ul>
      <li>
        🚒 Error checks
      </li>
      <li>
        😞 Not minified
      </li>
    </ul>

    <Subtitle>
      Production
    </Subtitle>

    <ul>
      <li>
        ⚡️ Minified
      </li>
      <li>
        😞 No error checks
      </li>
    </ul>

    <ButtonGroup>
      <Link href="/api" button>
        Next up: API
      </Link>
    </ButtonGroup>
  </Layout>
)
