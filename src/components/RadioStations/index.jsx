import React, { Component } from 'react'

import RadioStation from './RadioStation'

class RadioStations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stations: [
        { name: 'Top Song Pl', frequency: '99.1' },
        { name: 'Best Hits Ever', frequency: '97.5' },
        { name: 'Classic EU', frequency: '109.3' },
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
