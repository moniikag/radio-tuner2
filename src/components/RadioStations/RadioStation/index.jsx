import React, { Component } from 'react'

class RadioStation extends Component {

  render() {
    const { station } = this.props

    return (
      <li>{station.name}</li>
    )
  }
}

export default RadioStation
