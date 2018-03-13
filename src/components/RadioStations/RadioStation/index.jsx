import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.css'

const RadioStation = ({ station }) => {
  const urlStation = station.name.split(' ').join('_')

  return (
    <li>
      <Link
        className="station-link"
        to={`/stations/${urlStation}`}
      >
        <header>{station.name}</header>
      </Link>
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
