import PropTypes from 'prop-types'

function Pilots({ pilots }) {
  return (
    <div className="flex flex-col">
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
                {Object.entries(pilots).map(([key, pilot]) => (
                  <tr key={key}>
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
  pilots: PropTypes.shape({}).isRequired,
}

export default Pilots
