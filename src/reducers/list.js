import {
	GET_LIST_REQUEST,
	GET_LIST_SUCCESS,
	GET_LIST_ERROR,
	SHOW_DETAILS_REQUEST,
	SHOW_DETAILS_SUCCESS,
	SHOW_DETAILS_ERROR,
} from '../actions/ListActions';

const initialState = {
	cadastrString: '',
	objects: [],
	isFetching: false,
	error: '',
	isModal: false,
	modalObjectId: '',
	isModalFetching: false,
	objectModal: {},
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
		case SHOW_DETAILS_REQUEST:
			return {
				...state,
				modalObjectId: action.payload,
				isModal: true,
				isModalFetching: true,
			};
		case SHOW_DETAILS_SUCCESS:
			return {
				...state,
				objectModal: action.payload,
				isModal: true,
				isModalFetching: false,
			};
		case SHOW_DETAILS_ERROR:
			return {
				...state,
				error: action.payload,
				isModal: true,
				isModalFetching: false,
			};
		default:
			return state;
	}
}
