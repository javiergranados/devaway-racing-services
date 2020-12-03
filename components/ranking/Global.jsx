import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { formatTime } from '../../utils/data'

function Pilots({ pilots, races }) {
  return (
    <div className="flex flex-col">
      {races.map(race => {
        return (
          <div key={uuidv4()}>
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
                      {race.map(pilot => (
                        <tr key={uuidv4()}>
                          <td className="text-center table__tbody__td lg:text-left">{pilot.position}</td>
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
  races: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))).isRequired,
}

export default Pilots
