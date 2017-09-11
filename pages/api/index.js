import ButtonGroup from '../../components/button-group'
import Layout from '../../components/layout'
import Link from '../../components/link'
import Title from '../../components/title'

export default () => (
  <Layout title="Wilderness API">
    <Title>
      Wilderness API
    </Title>

    <p>
      🤓 It's API time, yay!
    </p>

    <p>
      This section is a super boring technical reference. Don't expect to find
      any jokes or cute emojis here.
    </p>

    <p>
      Let's start with defining some of the terminology used throughout this
      documentation.
    </p>

    <ButtonGroup>
      <Link href="/api/definitions" button>
        First up: Definitions
      </Link>
    </ButtonGroup>
  </Layout>
)
