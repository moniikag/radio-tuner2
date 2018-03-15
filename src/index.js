import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import radioStations from 'reducers/radioStations'

const store = createStore(
  radioStations,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
