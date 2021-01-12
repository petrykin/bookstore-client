import React from 'react';
import ReactDOM from 'react-dom';

// @ts-ignore
import {debugContextDevtool} from 'react-context-devtool';

import {App} from './components/App';
import 'fomantic-ui-css/semantic.min.css';
import './styles/index.css';
// import { BrowserRouter as Router } from 'react-router-dom';
//
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
//
// import { composeWithDevTools } from 'redux-devtools-extension';
//
// import rootReducer from './redux/reducers';
//
// import { Routes } from './routes/Routes';
//
//
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
//
// ReactDOM.render(
//   <Router>
//     <Provider store = { store }>
//       <Routes />
//     </Provider>
//   </Router>,
//   document.getElementById('root')
// );
const container = document.getElementById('root');

ReactDOM.render(
  <App />,
  container);

debugContextDevtool(container);