import React, { Component } from 'react';

import ArticlesComponent from './Components/ArticlesComponent';
import BankComponent from './Components/BankComponent';

import './App.css';

class App extends Component {
	
	render() {
		return (
			<div>
				<BankComponent />
				<ArticlesComponent />
			</div>
		);
	}
}

export default App;