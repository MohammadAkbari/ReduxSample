import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App';
import AppStore from './AppStore'; 

import './index.css';
 
ReactDOM.render(<Provider store={AppStore}>
    <Router>
        <Route path="/" component={App} />
    </Router>
</Provider>, document.getElementById('root'));