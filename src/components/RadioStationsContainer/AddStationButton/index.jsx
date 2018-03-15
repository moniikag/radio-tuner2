import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const AddStationButton = ({ handleClick }) => {

  return (
    <li>
      <button
        id="add"
        onClick={handleClick}
      >
        +
      </button>
    </li>
  )
}

AddStationButton.propTypes = {
  handleClick: PropTypes.func,
}

export default AddStationButton
