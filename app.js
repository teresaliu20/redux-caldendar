// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App.js';
import { createStore } from 'redux';
import appReducer from './app/reducers/appReducer.js'

const store = createStore(appReducer);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root'));