import React, { Component } from 'react'

import RadioStation from './RadioStation'

class RadioStations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stations: [
        { name: 'Top Song Pl' },
        { name: 'Best Hits Ever' },
        { name: 'Classic EU' },
      ],
    }
  }

  renderRadioStations() {
    const { stations } = this.state
    return stations.map(station =>
      <RadioStation key={station.name} station={station}/>
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
