import React, { Component } from 'react'

import Routes from './Routes'
import Sidebar from './Sidebar'
import './styles.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Radio Tuner</h1>
        </header>
        <Sidebar/>
        <Routes />
      </div>
    )
  }
}

export default App
