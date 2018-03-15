import React, { Component } from 'react'
import uuidv1 from 'uuid/v1'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import AddStationButton from './AddStationButton'
import AddStationForm from './AddStationForm'
import MainArticle from 'components/shared/MainArticle'
import RadioStation from './RadioStation'
import SingleStation from '../SingleStation'
import { addStation } from 'actions/radioStations'
import { getRadioStations } from 'reducers'
import './styles.css'

class RadioStations extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addItemFormOpen: false,
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
    const id = uuidv1()
    this.props.addStation({ ...station, id })
  }

  renderRadioStations() {
    const { stations } = this.props
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
      <MainArticle>
        <section className="main-section">
          <ul className="radio-stations-list">
            {this.renderRadioStations()}
            {addItemFormOpen ? this.renderForm() : this.renderButton()}
          </ul>
        </section>
        <Route path='/stations/:stationId' component={SingleStation}/>
      </MainArticle>
    )
  }
}

const mapStateToProps = (state) => ({
  stations: getRadioStations(state)
})

const mapDispatchToProps = {
  addStation,
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioStations)
