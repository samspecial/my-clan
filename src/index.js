import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers'
import App from './App';
const initialState = {};


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)))
console.log(store.getState())
ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
