import { createStore, applyMiddleware, combineReducers } from 'redux'
import bankReducer from './bankReducer';
import articlesReducer from './articlesReducer';
import settingReducer from './Reducers/settingReducer'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
	bank: bankReducer, 
	blog: articlesReducer,
	setting: settingReducer
});

const AppStore = createStore(rootReducer, applyMiddleware(thunk));

export default AppStore;