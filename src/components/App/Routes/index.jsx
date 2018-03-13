import React from 'react'
import { Route, Switch } from 'react-router-dom'

import RadioStations from '../../RadioStations'
import SingleStation from '../../SingleStation'

const Routes = () => {
  return (
    <Switch>
      <Route path="/stations/:stationId" component={SingleStation}/>
      <Route path="/" component={RadioStations}/>
    </Switch>
  )
}

export default Routes
