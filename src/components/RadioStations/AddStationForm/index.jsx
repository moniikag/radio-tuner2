import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const AddStationForm = ({ handleClick }) => {

  return (
    <li id="form">
      <button
        id="close"
        onClick={handleClick}
      >
        x
      </button>
      <form>
        <input id="name" type="text" placeholder="name" />
        <input type="text" placeholder="frequency" />
      </form>
    </li>
  )
}

AddStationForm.propTypes = {
  handleClick: PropTypes.func,
}

export default AddStationForm
