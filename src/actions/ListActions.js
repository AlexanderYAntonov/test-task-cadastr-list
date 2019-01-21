export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_ERROR = 'GET_LIST_ERROR';

export function getList(number) {
	return dispatch => {
		dispatch({
			type: GET_LIST_REQUEST,
			payload: number,
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
