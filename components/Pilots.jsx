import { PILOTS_PROPTYPES } from '../constants'

function Pilots({ pilots }) {
  return (
    <div className="flex flex-col animate__animated animate__fadeIn">
      <h2 className="py-5 text-2xl text-center font-regular lg:text-left">List of Pilots</h2>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden border-b border-gray-300 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="table__thead__th">Name</th>
                  <th className="table__thead__th">Age</th>
                  <th className="table__thead__th">Team</th>
                </tr>
              </thead>
              <tbody className="bg-seashell font-regular">
                {pilots.map(pilot => (
                  <tr key={pilot.id}>
                    <td className="table__tbody__td">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img className="rounded-full" src={pilot.picture} alt="pilot" />
                        </div>
                        <div className="ml-4">{pilot.name}</div>
                      </div>
                    </td>
                    <td className="table__tbody__td">{pilot.age}</td>
                    <td className="table__tbody__td">{pilot.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

Pilots.propTypes = {
  pilots: PILOTS_PROPTYPES.isRequired,
}

export default Pilots
