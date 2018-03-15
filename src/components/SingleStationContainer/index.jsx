import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { getRadioStation } from 'reducers'

class SingleStation extends Component {

  render() {
    return this.props.station ? (
      <section className="main-section">
        <div style={{ padding: '15px'}}>
          {this.props.station.name}
        </div>
        <div style={{ padding: '15px'}}>
          {this.props.station.frequency}
        </div>
        <Link
          style={{ padding: '15px'}}
          to='/'
        >
          Home
        </Link>
      </section>
    ) : null
  }
}

const mapStateToProps = (state, ownProps) => {
  const { stationId } = ownProps.match.params
  return {
    station: getRadioStation(state, stationId)
  }
}

export default connect(mapStateToProps)(SingleStation)
