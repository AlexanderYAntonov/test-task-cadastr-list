import React from 'react';
import PropTypes from 'prop-types';
export class List extends React.Component {
	/*onBtnClick = e => {
		const year = +e.currentTarget.innerText;
		const { user_id } = this.props;
		console.log('Ready to send user_id=', user_id);
		this.props.getPhotos(year, user_id);
	};

	renderButtons = () => {
		const years = [2018, 2017, 2016, 2015, 2014];
		return years.map((item, index) => {
			return (
				<button key={index} className="btn" onClick={this.onBtnClick}>
					{item}
				</button>
			);
		});
	};*/

	renderTemplate = () => {
		const { objects } = this.props;
		let listTemplate = null;
		if (objects.length) {
			listTemplate = objects.map(function(item, index) {
				return (
					<div key={index} className="object">
						<span>{item} object</span>
					</div>
				);
			});
		} else {
			listTemplate = <p>No objects</p>;
		}
		return listTemplate;
	};

	render() {
		const { cadastrString, isFetching } = this.props;
		return (
			<div className="list ib">
				<div className="gallery">
					{isFetching ? (
						<p>Загружаем для кадастрового номера ${cadastrString}</p>
					) : (
						this.renderTemplate()
					)}
				</div>
			</div>
		);
	}
}
List.propTypes = {
	cadastrString: PropTypes.string.isRequired,
	objects: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	getList: PropTypes.func.isRequired,
};
