import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import rootReducer from './reducers';

import './styles/index.css'

const store: Store<PostStore, PostAction> & {
	dispatch: DispatchType
} = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store = { store }>
		<App />
	</Provider>, 
	document.getElementById('root')
);
