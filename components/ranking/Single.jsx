import { v4 as uuidv4 } from 'uuid'

import { PILOTS_PROPTYPES, RACES_PROPTYPES } from '../../constants'
import { formatTime, getRacesByPilot } from '../../utils/data'

function Single({ pilots, races }) {
  return (
    <div className="flex flex-col animate__animated animate__fadeIn">
      {pilots.map(pilot => {
        const racesByPilot = getRacesByPilot(races, pilot.id)
        return (
          <div key={pilot.id}>
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
                        <tr key={uuidv4()}>
                          <td className="text-center table__tbody__td lg:text-left">{race.name}</td>
                          <td className="text-center table__tbody__td lg:text-left">{race.position}</td>
                          <td className="text-center table__tbody__td lg:text-left">{formatTime(race.time)}</td>
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

Single.propTypes = {
  pilots: PILOTS_PROPTYPES.isRequired,
  races: RACES_PROPTYPES.isRequired,
}

export default Single
