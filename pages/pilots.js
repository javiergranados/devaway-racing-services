import Pilots from '../components/Pilots'
import { DATA_PROPTYPES } from '../constants'
import { extractValues } from '../utils/data'

function PilotsPage({ data }) {
  const { pilots } = extractValues(data)

  return (
    <div className="text-indigoDye">
      <h1 className="text-4xl text-center font-semi lg:text-left">Pilots</h1>
      <Pilots pilots={pilots} />
    </div>
  )
}

export async function getStaticProps() {
  const data = require('../public/drivers_karts.json')

  return {
    props: {
      data,
      title: 'Pilots',
    },
  }
}

PilotsPage.propTypes = {
  data: DATA_PROPTYPES.isRequired,
}

export default PilotsPage
