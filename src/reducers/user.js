import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from '../actions/UserActions';
const initialState = {
	name: '',
	user_id: '',
	error: '', // добавили для сохранения текста ошибки
	isFetching: false, // добавили для реакции на статус "загружаю" или нет
};
export function userReducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN_REQUEST:
			return { ...state, isFetching: true, error: '' };
		case LOGIN_SUCCESS:
			return {
				...state,
				isFetching: false,
				name: action.payload.username,
				user_id: action.payload.user_id,
			};
		case LOGIN_FAIL:
			return { ...state, isFetching: false, error: action.payload.message };
		default:
			return state;
	}
}
