import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
import './App.css';

class App extends Component {
	
	componentDidMount(){
		this.props.fetchArticles();
	}

	handleDeposit() {
		this.props.onDeposit(this.refs.amount.value);
		this.refs.amount.value = '';
	}
	
	handleWithdraw() {
		this.props.onWithdraw(this.refs.amount.value);
		this.refs.amount.value = '';
	}
	
	render() {

		let articles = this.props.articles.map((item, index)=>(
			<div key={index}>
				{item.title} - {item.author}
			</div>
		  ));

		return (
			<div>
				<header>
					<img src="//www.pro-react.com/logos/redux-bank.svg" width="150" alt="logo" />Redux Bank
				</header>
				<h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
				<div className="atm">
					<input type="text" placeholder="Enter Ammount" ref="amount" />
					<button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
					<button onClick={this.handleDeposit.bind(this)}>Deposit</button>
				</div>

				{articles}
			</div>
		);
	}
}

App.propTypes = {
	articles: PropTypes.array.isRequired,
	balance: PropTypes.number,
	onDeposit: PropTypes.func,
	onWithdraw: PropTypes.func,
	fetchArticles: PropTypes.func.isRequired,
};

export default App;