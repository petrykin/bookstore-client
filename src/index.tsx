import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/reducers';

import { Routes } from './routes/Routes';

import './styles/index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Router>
    <Provider store = { store }>
      <Routes />
    </Provider>
  </Router>,
  document.getElementById('root')
);
