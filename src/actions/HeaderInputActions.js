import {
	GET_LIST_REQUEST,
	GET_LIST_SUCCESS,
	GET_LIST_ERROR,
} from '../actions/ListActions';

export const LOCAL_URL = 'http://localhost:3000/examples/';
const LOCAL_URL_END = 'obj_list.json';
const FIR_URL = 'https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/';

export function httpGet(url) {
	return new Promise(function(resolve, reject) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function() {
			if (this.status === 200) {
				resolve(this.response);
			} else {
				let error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};

		xhr.onerror = function() {
			reject(new Error('Network Error'));
		};

		xhr.send();
	});
}

//consvert JSON response to simple object
const convertJSON = (response, cadastrString) => {
	let result = JSON.parse(response);

	result = result.filter(item => {
		if (item.objectCn.search(cadastrString) !== -1) {
			return true;
		} else {
			return false;
		}
	});
	result = result.map(item => {
		return {
			objectCn: item.objectCn,
			objectType: item.objectType,
			addressNotes: item.addressNotes,
			objectId: item.objectId,
		};
	});
	return result;
};

export function handleInput(cadastrString) {
	return dispatch => {
		dispatch({
			type: GET_LIST_REQUEST,
			payload: cadastrString,
		});

		const url = FIR_URL + cadastrString + '*';

		let result = [];

		httpGet(url).then(
			response => {
				//convert response to array
				result = convertJSON(response, '');
				dispatch({
					type: GET_LIST_SUCCESS,
					payload: result,
				});
			},
			error => {
				httpGet(LOCAL_URL + LOCAL_URL_END).then(
					response => {
						//convert response to filtered array
						result = convertJSON(response, cadastrString);
						dispatch({
							type: GET_LIST_SUCCESS,
							payload: result,
						});
					},
					error => {
						dispatch({
							type: GET_LIST_ERROR,
							payload: error,
						});
					}
				);
			}
		);
	};
}
