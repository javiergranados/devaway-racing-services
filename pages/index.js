import PropTypes from 'prop-types'
import Pilots from '../components/Pilots'
import extractValues from '../utils/data'

function IndexPage({ data }) {
  const { pilots } = extractValues(data)

  return (
    <div className="text-indigoDye">
      <h1 className="pb-10 text-4xl text-center font-semi lg:text-left">DevAway Racing Services</h1>
      <Pilots pilots={pilots} />
    </div>
  )
}

export async function getStaticProps() {
  const data = require('../public/drivers_karts.json')

  return {
    props: {
      data,
      title: 'Home',
    },
  }
}

IndexPage.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default IndexPage
