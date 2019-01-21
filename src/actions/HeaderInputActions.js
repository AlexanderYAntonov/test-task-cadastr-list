import { GET_LIST_REQUEST, GET_LIST_SUCCESS } from '../actions/ListActions';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function handleInput(cadastrString) {
	return dispatch => {
		dispatch({
			type: GET_LIST_REQUEST,
			payload: cadastrString,
		});

		let objects = [1, 2, 3, 4, 5];

		setTimeout(() => {
			dispatch({
				type: GET_LIST_SUCCESS,
				payload: objects,
			});
		}, 1000);
	};
}
