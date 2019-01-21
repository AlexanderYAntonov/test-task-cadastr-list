import {
	GET_LIST_REQUEST,
	GET_LIST_SUCCESS,
	GET_LIST_ERROR,
} from '../actions/ListActions';

const LOCAL_URL = 'http://localhost:3000/examples/obj_list.json';

/*
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
*/

function httpGet(url) {
	return new Promise(function(resolve, reject) {
		console.log('URL = ', url);

		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function() {
			if (this.status === 200) {
				resolve(this.response);
			} else {
				var error = new Error(this.statusText);
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
		let objectTypeText = '';
		switch (item.objectType) {
			case 'parcel':
				objectTypeText = 'Земельный участок';
				break;
			case 'flat':
				objectTypeText = 'Квартира';
				break;
			case 'building':
				objectTypeText = 'Здание';
				break;
			case 'construction':
				objectTypeText = 'Сооружение';
				break;
			default:
				objectTypeText = item.objectType;
		}
		return {
			objectCn: item.objectCn,
			objectType: objectTypeText,
			addressNotes: item.addressNotes,
			objectId: item.objectId,
		};
	});
	return result;
};

export function handleInput(cadastrString) {
	return dispatch => {
		console.log('Handle input started for ', cadastrString);
		dispatch({
			type: GET_LIST_REQUEST,
			payload: cadastrString,
		});

		const url =
			'https://rosreestr.ru/fir_lite_rest/api/gkn/fir_objects/' +
			cadastrString +
			'*';

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
				httpGet(LOCAL_URL).then(
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

		/*
		setTimeout(() => {
			dispatch({
				type: GET_LIST_SUCCESS,
				payload: objects,
			});
		}, 1000);*/
	};
}
