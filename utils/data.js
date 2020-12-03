const extractValues = data => {
  const races = {}
  const pilots = data.reduce((prev, next) => {
    next.races.forEach(element => {
      if (!races[element.name]) {
        races[element.name] = [{ pilot: next._id, time: element.time }]
      } else {
        races[element.name].push({ pilot: next._id, time: element.time })
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

export default extractValues
