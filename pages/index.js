import { useCallback, useState } from 'react'
import Global from '../components/ranking/Global'
import Single from '../components/ranking/Single'
import Pilots from '../components/Pilots'
import useInterval from '../hooks/useInterval'
import { CAROUSEL_MAX_LENGTH, DATA_PROPTYPES } from '../constants'
import { extractValues } from '../utils/data'

function IndexPage({ data }) {
  const [count, setCount] = useState(0)
  const { pilots, races } = extractValues(data)

  useInterval(() => {
    if (count === CAROUSEL_MAX_LENGTH) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }, 3000)

  const renderTitle = useCallback(() => {
    switch (count) {
      case 0:
        return 'Global Ranking'
      case 1:
        return 'Single Ranking'
      case 2:
        return 'Pilots'
      default:
        return null
    }
  }, [count])

  const renderBody = useCallback(() => {
    switch (count) {
      case 0:
        return <Global pilots={pilots} races={races} />
      case 1:
        return <Single pilots={pilots} races={races} />
      case 2:
        return <Pilots pilots={pilots} />

      default:
        return null
    }
  }, [count, pilots, races])

  return (
    <div className="text-indigoDye">
      <h1 className="text-4xl text-center font-semi lg:text-left">{renderTitle()}</h1>
      {renderBody()}
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
  data: DATA_PROPTYPES.isRequired,
}

export default IndexPage
