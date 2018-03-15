import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import thunk from 'redux-thunk'
import { BrowserRouter, Route } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from 'reducers'
import './index.css'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
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
