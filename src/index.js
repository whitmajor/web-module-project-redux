import React from 'react';
import ReactDOM from 'react-dom';


//redux-related imports
import { legacy_createStore,compose } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
//let's spin up the redux store 
let store
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = legacy_createStore(reducer, composeEnhancers())
}
resetStore()



ReactDOM.render(

  <Provider store ={store}>

    <Router>
      <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);
