import Global from '../components/ranking/Global'
import { DATA_PROPTYPES } from '../constants'
import { extractValues } from '../utils/data'

function GlobalPage({ data }) {
  const { pilots, races } = extractValues(data)

  return (
    <div className="text-indigoDye">
      <h1 className="text-4xl text-center font-semi lg:text-left">Global Ranking</h1>
      <Global pilots={pilots} races={races} />
    </div>
  )
}

export async function getStaticProps() {
  const data = require('../public/drivers_karts.json')

  return {
    props: {
      data,
      title: 'Global',
    },
  }
}

GlobalPage.propTypes = {
  data: DATA_PROPTYPES.isRequired,
}

export default GlobalPage
