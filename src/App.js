import React, { Component } from 'react';

import ArticlesComponent from './Components/ArticlesComponent';
import BankComponent from './Components/BankComponent';
import SettingComponent from './Components/SettingComponent'
import { Route, Link } from 'react-router-dom'

import './App.css';

class App extends Component {

	render() {
		return (
			<div>
				<header>
					<img src="//www.pro-react.com/logos/redux-bank.svg" width="150" alt="logo" />Redux Bank
				</header>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/articles">Articles</Link></li>
						<li><Link to="/setting">Setting</Link></li>
					</ul>
				</div>
				<div>
					<Route exact path="/" component={BankComponent} />
					<Route path="/articles" component={ArticlesComponent} />
					<Route path="/setting" component={SettingComponent} />
				</div>
			</div>
		);
	}
}

export default App;