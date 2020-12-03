import moment from 'moment'

function sortRace(race) {
  const sortedRace = race.sort((a, b) => {
    const dateA = moment(a.time, 'HH:mm:ss')
    const dateB = moment(b.time, 'HH:mm:ss')
    return dateA.diff(dateB, 'seconds', true)
  })

  return sortedRace.map((el, index) => ({ ...el, position: index + 1 }))
}

function extractValues(data) {
  const races = {}
  const pilots = data.reduce((prev, next) => {
    next.races.forEach(element => {
      if (!races[element.name]) {
        races[element.name] = [{ name: element.name, pilotId: next._id, time: element.time }]
      } else {
        races[element.name].push({ name: element.name, pilotId: next._id, time: element.time })
      }
    })

    return {
      ...prev,
      [next._id]: {
        age: next.age,
        name: next.name,
        picture: next.picture,
        team: next.team,
      },
    }
  }, {})

  return { pilots, races: Object.values(races).map(sortRace) }
}

function formatTime(time) {
  return moment(time, 'HH:mm:ss').format('HH:mm:ss')
}

function getRacesByPilot(races, pilotId) {
  return races.map(race => race.filter(element => element.pilotId === pilotId)).flat()
}

export { extractValues, formatTime, getRacesByPilot, sortRace }
