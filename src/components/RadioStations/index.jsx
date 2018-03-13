import React, { Component } from 'react'

class RadioStations extends Component {
  render() {
    const stations = ['Top Song Pl', 'Best Hits Ever', 'Classic EU']
    return (
      <ul className="radio-stations-list">
        {stations.map(station => <li key={station}>{station}</li>)}
      </ul>
    )
  }
}

export default RadioStations
