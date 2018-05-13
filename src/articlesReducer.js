import constants from './constants';

const initialState = {
	articles: []
}


const articles = (state = initialState, action) => {

    switch (action.type) {

        case constants.RECEIVE_ARTICLES:
            return { articles: action.articles };
        default:
            return state;
    }
};

export default articles;