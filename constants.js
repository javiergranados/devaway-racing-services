import PropTypes from 'prop-types'

const DATA_PROPTYPES = PropTypes.arrayOf(
  PropTypes.shape({
    age: PropTypes.number,
    name: PropTypes.sring,
    picture: PropTypes.sring,
    races: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.sring,
        time: PropTypes.sring,
      })
    ),
    team: PropTypes.sring,
    __id: PropTypes.sring,
  })
)

const PILOTS_PROPTYPES = PropTypes.arrayOf(
  PropTypes.shape({
    age: PropTypes.number,
    id: PropTypes.sring,
    name: PropTypes.sring,
    picture: PropTypes.sring,
    team: PropTypes.sring,
  })
)

const RACES_PROPTYPES = PropTypes.arrayOf(
  PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      pilotId: PropTypes.string,
      position: PropTypes.number,
      time: PropTypes.string,
    })
  )
)

const CAROUSEL_MAX_LENGTH = 2

export { CAROUSEL_MAX_LENGTH, DATA_PROPTYPES, PILOTS_PROPTYPES, RACES_PROPTYPES }
