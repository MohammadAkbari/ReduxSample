import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bankStore from './bankStore';
import bankActionCreators from './bankActionCreators';

import { connect, Provider } from 'react-redux'

const mapStateToProps = (state) => {

	console.log("mapStateToProps");

	return {
		balance: state.bank.balance,
		articles: state.blog.articles? 
			state.blog.articles.map(article => ({
				title: article.title,
				author: article.author
			})) : [],
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
		onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
		fetchArticles: () => dispatch(bankActionCreators.fetchArticles())
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(<Provider store={bankStore}><AppContainer /></Provider>,
	document.getElementById('root'));