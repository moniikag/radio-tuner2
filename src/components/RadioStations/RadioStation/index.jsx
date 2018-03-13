import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const RadioStation = ({ station }) => {
  return (
    <li>
      <header>{station.name}</header>
      Frequency:
      <span className="station-detail">
        {station.frequency} FM
      </span>
    </li>
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
