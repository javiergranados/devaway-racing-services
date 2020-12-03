import moment from 'moment'

const extractValues = data => {
  const races = {}
  const pilots = data.reduce((prev, next) => {
    next.races.forEach(element => {
      if (!races[element.name]) {
        races[element.name] = [{ id: next._id, time: element.time }]
      } else {
        races[element.name].push({ id: next._id, time: element.time })
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
  return { pilots, races }
}

const sortRace = race => {
  return race.sort((a, b) => {
    const dateA = moment(a.time, 'HH:mm:ss')
    const dateB = moment(b.time, 'HH:mm:ss')

    return dateA.diff(dateB, 'seconds', true)
  })
}

const formatTime = time => moment(time, 'HH:mm:ss').format('HH:mm:ss')

export { extractValues, formatTime, sortRace }
