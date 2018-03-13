import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RadioStation extends Component {

  render() {
    const { station } = this.props

    return (
      <li>{station.name}</li>
    )
  }
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
