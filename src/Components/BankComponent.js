
import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'; 

import bankActionCreators from '../bankActionCreators';

class BankComponent extends Component {
	
	handleDeposit() {
		this.props.onDeposit(this.refs.amount.value);
		this.refs.amount.value = '';
	}
	
	handleWithdraw() {
		this.props.onWithdraw(this.refs.amount.value);
		this.refs.amount.value = '';
	}
	
	render() {

        console.log("BankComponent");

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
			</div>
		);
	}
}

BankComponent.propTypes = {
	balance: PropTypes.number,
	onDeposit: PropTypes.func,
	onWithdraw: PropTypes.func,
};

const mapStateToProps = (state) => {

	return {
		balance: state.bank.balance
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
		onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(BankComponent);