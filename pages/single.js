import PropTypes from 'prop-types'
import Single from '../components/ranking/Single'
import { extractValues } from '../utils/data'

function IndexPage({ data }) {
  const { pilots, races } = extractValues(data)

  return (
    <div className="text-indigoDye">
      <h1 className="text-4xl text-center font-semi lg:text-left">Single Ranking</h1>
      <Single pilots={pilots} races={races} />
    </div>
  )
}

export async function getStaticProps() {
  const data = require('../public/drivers_karts.json')

  return {
    props: {
      data,
      title: 'Single',
    },
  }
}

IndexPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default IndexPage
