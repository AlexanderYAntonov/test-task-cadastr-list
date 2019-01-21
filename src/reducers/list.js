import {
	GET_LIST_REQUEST,
	GET_LIST_SUCCESS,
	GET_LIST_ERROR,
} from '../actions/ListActions';

const initialState = {
	cadastrString: '',
	objects: [],
	isFetching: false,
	error: '',
};
export function listReducer(state = initialState, action) {
	switch (action.type) {
		case GET_LIST_REQUEST:
			return { ...state, cadastrString: action.payload, isFetching: true };
		case GET_LIST_SUCCESS:
			return { ...state, objects: action.payload, isFetching: false };
		case GET_LIST_ERROR:
			return {
				...state,
				objects: [],
				isFetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
}
