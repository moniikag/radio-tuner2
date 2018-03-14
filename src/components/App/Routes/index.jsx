import React from 'react'
import { Route, Switch } from 'react-router-dom'

import RadioStations from '../../RadioStations'
import Users from '../../Users'

const Routes = () => {
  return (
    <Switch>
      <Route path='/stations' component={RadioStations}/>
      <Route path='/users' component={Users}/>
    </Switch>
  )
}

export default Routes
