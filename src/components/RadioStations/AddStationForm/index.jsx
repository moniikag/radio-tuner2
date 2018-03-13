import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'

class AddStationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(value, field) {
    this.setState(prevState => ({
      newStation: { ...prevState.newStation, [field]: value }
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
    const { newStation } = this.state
    if(newStation) { this.props.handleSubmit(newStation) }
    this.props.handleClose()
  }

  render() {
    const { handleClose } = this.props
    return (
      <li id="form">
        <button
          id="close"
          onClick={handleClose}
        >
          x
        </button>
        <form onSubmit={this.handleSubmit}>
          <input
            id="name"
            onChange={(e) => this.handleChange(e.target.value, 'name')}
            type="text"
            placeholder="name"
          />
          <input
            onChange={(e) => this.handleChange(e.target.value, 'frequency')}
            type="text"
            placeholder="frequency"
          />
          <button style={{visibility: "hidden"}} type="submit"></button>
        </form>
      </li>
    )
  }
}

AddStationForm.propTypes = {
  handleClose: PropTypes.func,
}

export default AddStationForm
