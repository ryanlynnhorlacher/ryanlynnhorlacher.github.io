import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, combineReducers } from 'redux';
import reducer from './reducers/reducer';
import { Provider } from 'react-redux';

const reducers = combineReducers({
	reducer
})

const store = createStore(reducers)

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
