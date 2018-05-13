import { createStore, applyMiddleware, combineReducers } from 'redux'
import bankReducer from './bankReducer';
import articlesReducer from './articlesReducer';
import thunk from 'redux-thunk';

// const logger = (store) => (next) => (action) => {
// 	console.log('Log Middleware dispatching:', action);
// 	return next(action);
// }

const rootReducer = combineReducers({
	bank: bankReducer, 
	blog: articlesReducer
});

const AppStore = createStore(rootReducer, applyMiddleware(thunk));

export default AppStore;