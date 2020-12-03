import PropTypes from 'prop-types'
import { formatTime, getRacesByPilot } from '../../utils/data'

function Pilots({ pilots, races }) {
  console.clear()
  console.log(races)

  return (
    <div className="flex flex-col">
      {Object.entries(pilots).map(([id, pilot]) => {
        const racesByPilot = getRacesByPilot(races, id)
        return (
          <div key={id}>
            <h2 className="py-5 text-2xl text-center font-regular lg:text-left">{pilot.name}</h2>
            <div className="overflow-auto max-h-96">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border-b border-gray-300 shadow scrollable sm:rounded-lg">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="table__thead__th">Race</th>
                        <th className="table__thead__th">Position</th>
                        <th className="table__thead__th">Time</th>
                      </tr>
                    </thead>
                    <tbody className="bg-seashell font-regular">
                      {racesByPilot.map(race => (
                        <tr key={pilot.id}>
                          <td className="text-center table__tbody__td lg:text-left">{race.name}</td>
                          <td className="table__tbody__td">999</td>
                          <td className="table__tbody__td">{formatTime(race.time)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Pilots.propTypes = {
  pilots: PropTypes.shape({}).isRequired,
  races: PropTypes.shape({}).isRequired,
}

export default Pilots
