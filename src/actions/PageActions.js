export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';

export function getPhotos(year) {
	return dispatch => {
		dispatch({
			type: GET_PHOTOS_REQUEST,
			payload: year,
		});

		//console.log('Loading photos for user_id ', user_id);
		let photos = [];
		//eslint-disable-next-line no-undef
		VK.Api.call(
			'photos.getAll',
			{ extended: 1, count: 200, version: 5.92 },
			function(r) {
				if (r.response) {
					photos = r.response.map((item, index) => {
						if (!index) {
							return null;
						}
						let photo = {};
						photo.src = item.src;
						let creationDate = new Date(item.created * 1000);
						photo.created = creationDate.getFullYear();
						photo.likes = item.likes.count;
						return photo;
					});
				} else {
					console.log('Error:', r);
				}
				photos.shift();
				photos = photos.filter(item => {
					return item.created === year;
				});
				photos.sort(function(a, b) {
					return b.likes - a.likes;
				});
			}
		);

		setTimeout(() => {
			dispatch({
				type: GET_PHOTOS_SUCCESS,
				payload: photos,
			});
		}, 1000);
	};
}
