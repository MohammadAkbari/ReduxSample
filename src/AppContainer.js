import React from 'react';
import bankActionCreators from './bankActionCreators';
import { connect } from 'react-redux'

import App from './App';

const mapStateToProps = (state) => {

	console.log("mapStateToProps");

	return {
		balance: state.bank.balance,
		articles: state.blog.articles? 
			state.blog.articles.map(article => ({
				title: article.title,
				author: article.author
			})) : []
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

export default AppContainer;