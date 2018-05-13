import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App';
import AppStore from './AppStore'; 

import { Provider } from 'react-redux'
 
ReactDOM.render(<Provider store={AppStore}><App /></Provider>, document.getElementById('root'));