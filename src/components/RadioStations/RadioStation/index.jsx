import React from 'react'
import PropTypes from 'prop-types'

const RadioStation = ({ station }) => {
  return (
    <li>{station.name}</li>
  )
}

RadioStation.defaultProps = {
  station: {},
}

RadioStation.propTypes = {
  station: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
}

export default RadioStation
