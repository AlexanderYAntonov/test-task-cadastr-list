import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
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
					<tr key={index} className="object">
						<td>{index}</td>
						<td>{item.objectCn}</td>
						<td>{item.objectType}</td>
						<td>{item.addressNotes}</td>
					</tr>
				);
			});
		}
		return listTemplate;
	};

	render() {
		const { cadastrString, isFetching, objects } = this.props;
		if (objects.length) {
			return (
				<div className="list">
					{isFetching ? (
						<p>Загружаем для кадастрового номера {cadastrString}</p>
					) : (
						<table className="listTable">
							<thead>
								<td>#</td>
								<td>Кадастровый номер</td>
								<td>Тип</td>
								<td>Адрес</td>
							</thead>
							{this.renderTemplate()}
						</table>
					)}
				</div>
			);
		}
		return <p>Нет данных для отображения</p>;
	}
}
List.propTypes = {
	cadastrString: PropTypes.string.isRequired,
	objects: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	//getList: PropTypes.func.isRequired,
};
