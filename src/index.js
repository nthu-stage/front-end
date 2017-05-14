import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import 'bootstrap/dist/css/bootstrap.css';

import App from './components/App.jsx';
import reducers from './reducers';

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, promiseMiddleware)));

    ReactDOM.render(
        <Provider store={store}>
        <App/>
    </Provider>, document.querySelector('#root'));
};
