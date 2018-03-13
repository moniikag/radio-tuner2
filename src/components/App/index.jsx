import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Routes from './Routes'
import './styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Radio Tuner</h1>
        </header>
        <article className="main-article">
          <Routes />
        </article>
      </div>
    )
  }
}

export default App
