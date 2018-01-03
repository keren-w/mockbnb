import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import css from './static/css/globals.css';
import ReactDOM from 'react-dom';
import mockbnbApp from './reducers';
import reduxThunk from 'redux-thunk'
import App from './components/App';

const middleware = applyMiddleware(reduxThunk)
let store = createStore(mockbnbApp, middleware)
// store.subscribe(() => { console.log(store.getState())})
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <App location={location} />
      </div>
    </Router>
  </Provider>
  , document.querySelector('.main'));
