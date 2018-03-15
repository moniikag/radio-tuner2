import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './styles.css'

const RadioStation = ({ station }) => {

  return (
    <li>
      <NavLink
        activeClassName="selected"
        className="station-link"
        to={`/stations/${station.id}`}
      >
        <header>{station.name}</header>
      </NavLink>
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
