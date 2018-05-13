import React from 'react';
import ReactDOM from 'react-dom'; 
import AppContainer from './AppContainer';
import AppStore from './AppStore'; 

import { Provider } from 'react-redux'
 

ReactDOM.render(<Provider store={AppStore}><AppContainer /></Provider>,
	document.getElementById('root'));