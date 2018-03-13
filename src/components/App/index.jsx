import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import RadioStations from '../RadioStations'
import SingleStation from '../SingleStation'
import './styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Radio Tuner</h1>
        </header>
        <BrowserRouter>
          <article className="main-article">
            <Switch>
              <Route path="/stations/:stationId" component={SingleStation}/>
              <Route path="/" component={RadioStations}/>
            </Switch>
          </article>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
