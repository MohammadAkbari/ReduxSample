import constants from './constants';
import ArticleApi from './ArticleApi';

const bankActionCreators = {

	depositIntoAccount(amount) {
		return {
			type: constants.DEPOSIT_INTO_ACCOUNT,
			amount: amount
		};
	},
	 
	withdrawFromAccount(amount) {
		return {
			type: constants.WITHDRAW_FROM_ACCOUNT,
			amount: amount
		};
	},

	fetchArticles() {

		return (dispatch) => {
			
			dispatch({ type: constants.REQUEST_ARTICLES });

			ArticleApi.fetchArticles()
					.then(
						(response) => dispatch({ type: constants.RECEIVE_ARTICLES, success:true, articles: response }),
						(error) => dispatch({ type: constants.RECEIVE_ARTICLES, success:false })
					);
		};
	}
};

export default bankActionCreators;