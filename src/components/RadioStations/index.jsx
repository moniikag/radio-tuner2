import React, { Component } from 'react'

class RadioStations extends Component {

  renderRadioStations() {
    const stations = ['Top Song Pl', 'Best Hits Ever', 'Classic EU']
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
