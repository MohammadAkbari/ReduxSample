import constants from './constants';

const articles = (state = [], action) => {

    switch (action.type) {

        case constants.REQUEST_ARTICLES:
            return [];
        case constants.RECEIVE_ARTICLES:
            return action.articles;
        default:
            return state;
    }
};

export default articles;