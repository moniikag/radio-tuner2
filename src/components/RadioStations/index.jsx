import React, { Component } from 'react'

import AddStationButton from './AddStationButton'
import AddStationForm from './AddStationForm'
import RadioStation from './RadioStation'
import './styles.css'

class RadioStations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addItemFormOpen: false,
      stations: [
        { name: 'Top Song Pl', frequency: '99.1' },
        { name: 'Best Hits Ever', frequency: '97.5' },
        { name: 'Classic EU', frequency: '109.3' },
      ],
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.addStation = this.addStation.bind(this)
  }

  toggleForm() {
    this.setState(
      (prevState) => ({ addItemFormOpen: !prevState.addItemFormOpen })
    )
  }

  addStation(station) {
    this.setState(prevState => ({
      stations: [...prevState.stations, station],
    }))
  }

  renderRadioStations() {
    const { stations } = this.state
    return stations.map(station =>
      <RadioStation key={station.name} station={station}/>
    )
  }

  renderButton() {
    return (
      <AddStationButton
        handleClick={this.toggleForm}
      />
    )
  }

  renderForm() {
    return (
      <AddStationForm
        handleClose={this.toggleForm}
        handleSubmit={this.addStation}
      />
    )
  }

  render() {
    const { addItemFormOpen } = this.state
    return (
      <ul className="radio-stations-list">
        {this.renderRadioStations()}
        {addItemFormOpen ? this.renderForm() : this.renderButton()}
      </ul>
    )
  }
}

export default RadioStations
