import { v4 as uuidv4 } from 'uuid'
import { PILOTS_PROPTYPES, RACES_PROPTYPES } from '../../constants'
import { formatTime } from '../../utils/data'

function Global({ pilots, races }) {
  return (
    <div className="flex flex-col animate__animated animate__fadeIn">
      {races.map(race => {
        return (
          <div key={uuidv4()}>
            <h2 className="py-5 text-2xl text-center font-regular lg:text-left">{race[0].name}</h2>
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
                      {race.map(raceInfo => {
                        const pilot = pilots.find(el => el.id === raceInfo.pilotId)
                        return (
                          <tr key={uuidv4()}>
                            <td className="text-center table__tbody__td lg:text-left">{raceInfo.position}</td>
                            <td className="table__tbody__td">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 w-10 h-10">
                                  <img className="rounded-full" src={pilot.picture} alt="pilot" />
                                </div>
                                <div className="ml-4">{pilot.name}</div>
                              </div>
                            </td>
                            <td className="table__tbody__td">{pilot.team}</td>
                            <td className="table__tbody__td">{formatTime(raceInfo.time)}</td>
                          </tr>
                        )
                      })}
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

Global.propTypes = {
  pilots: PILOTS_PROPTYPES.isRequired,
  races: RACES_PROPTYPES.isRequired,
}

export default Global
