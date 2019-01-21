import { combineReducers } from 'redux';
import { listReducer } from './list';
import { headerInputReducer } from './headerInput';
export const rootReducer = combineReducers({
	list: listReducer,
	headerInput: headerInputReducer,
});
