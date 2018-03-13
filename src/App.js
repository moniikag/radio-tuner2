import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Radio Tuner</h1>
        </header>
        <article className="main-article">
          <section className="main-section">
            <ul className="radio-stations-list">
              <li>
                Top Songs PL
              </li>
              <li>
                Best Hits Ever
              </li>
              <li>
                Classic EU
              </li>
            </ul>
          </section>
        </article>
      </div>
    );
  }
}

export default App;
