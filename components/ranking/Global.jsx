import PropTypes from 'prop-types'
import { formatTime, sortRace } from '../../utils/data'

function Pilots({ pilots, races }) {
  return (
    <div className="flex flex-col">
      {Object.values(races).map(race => {
        const sortedRace = sortRace(race)
        return (
          <div key={race.name}>
            <h2 className="py-5 text-2xl text-center font-regular lg:text-left">{race.name}</h2>
            <div className="overflow-auto max-h-96">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden border-b border-gray-300 shadow scrollable sm:rounded-lg">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="table__thead__th">Position</th>
                        <th className="table__thead__th">Name</th>
                        <th className="table__thead__th">Team</th>
                        <th className="table__thead__th">Time</th>
                      </tr>
                    </thead>
                    <tbody className="bg-seashell font-regular">
                      {sortedRace.map((pilot, index) => (
                        <tr key={pilot.id}>
                          <td className="text-center table__tbody__td lg:text-left">{index + 1}</td>
                          <td className="table__tbody__td">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img className="rounded-full" src={pilots[pilot.pilotId].picture} alt="pilot" />
                              </div>
                              <div className="ml-4">{pilots[pilot.pilotId].name}</div>
                            </div>
                          </td>
                          <td className="table__tbody__td">{pilots[pilot.pilotId].team}</td>
                          <td className="table__tbody__td">{formatTime(pilot.time)}</td>
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
