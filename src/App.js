import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import RadioStations from './components/RadioStations'
import SingleStation from './components/SingleStation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Radio Tuner</h1>
        </header>
        <BrowserRouter>
          <article className="main-article">
            <Route path="/" component={RadioStations}/>
            <Route path="/stations/:stationId" component={SingleStation}/>
          </article>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
