export const GET_LIST_REQUEST = 'GET_LIST_REQUEST';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_ERROR = 'GET_LIST_ERROR';

/*
export function getList(str) {
	return dispatch => {
		console.log('getList started for ', str);

		dispatch({
			type: GET_LIST_REQUEST,
			payload: str,
		});

		let objects = str.split('');

		setTimeout(() => {
			dispatch({
				type: GET_LIST_SUCCESS,
				payload: objects,
			});
		}, 1000);
	};
}*/
