import PropTypes from 'prop-types'
import extractValues from '../utils/data'

function IndexPage({ data }) {
  const { pilots, races } = extractValues(data)
  console.log('{pilots, races}', { pilots, races })

  return (
    <div className="text-indigoDye">
      <h1 className="pb-4 text-4xl text-center font-semi lg:text-left">DevAway Racing Services</h1>
      <p className="text-3xl">Home page</p>
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
