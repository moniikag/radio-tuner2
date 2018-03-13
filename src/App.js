import React, { Component } from 'react'

import RadioStations from './components/RadioStations'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Radio Tuner</h1>
        </header>
        <article className="main-article">
          <section className="main-section">
            <RadioStations />
          </section>
        </article>
      </div>
    )
  }
}

export default App
