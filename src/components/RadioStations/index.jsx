import React, { Component } from 'react'

class RadioStations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stations: ['Top Song Pl', 'Best Hits Ever', 'Classic EU'],
    }
  }

  renderRadioStations() {
    const { stations } = this.state
    return stations.map(station =>
      <li key={station}>{station}</li>
    )
  }

  render() {
    return (
      <ul className="radio-stations-list">
        {this.renderRadioStations()}
      </ul>
    )
  }
}

export default RadioStations
