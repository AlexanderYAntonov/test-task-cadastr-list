import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
export class List extends React.Component {
	handleSpanClick = e => {
		e.preventDefault();

		const itemID = e.currentTarget.id.split('&');
		const objectId = itemID[0];
		const objectType = itemID[1];

		this.props.showDetails(objectId, objectType);
	};

	renderTemplate = () => {
		const { objects } = this.props;
		let listTemplate = null;
		if (objects.length) {
			listTemplate = objects.map((item, index) => {
				const itemID = item.objectId + '&' + item.objectType;
				return (
					<tr key={index} className="object">
						<td>{index}</td>
						<td>
							<span onClick={this.handleSpanClick} id={itemID}>
								{item.objectCn}
							</span>
						</td>
						<td>{item.objectType}</td>
						<td>{item.addressNotes}</td>
					</tr>
				);
			});
		}
		return listTemplate;
	};

	render() {
		const {
			cadastrString,
			isFetching,
			objects,
			isModal,
			modalObjectId,
			objectModal,
		} = this.props;
		if (objects.length) {
			return (
				<div className="list">
					{isModal && modalObjectId && (
						<p>
							Show Modal for {modalObjectId}
							{objectModal.dateCreated}
							{objectModal.name}
							{objectModal.encumbrances && 'YES'}
							{!objectModal.encumbrances && 'NO'}
						</p>
					)}
					{isFetching ? (
						<p>Загружаем для кадастрового номера {cadastrString}</p>
					) : (
						<table className="listTable">
							<thead>
								<tr>
									<td>#</td>
									<td>Кадастровый номер</td>
									<td>Тип</td>
									<td>Адрес</td>
								</tr>
							</thead>
							<tbody>{this.renderTemplate()}</tbody>
						</table>
					)}
				</div>
			);
		}
		return <p>Нет данных для отображения</p>;
	}
}
List.propTypes = {
	isModal: PropTypes.bool.isRequired,
	modalObjectId: PropTypes.string.isRequired,
	objectModal: PropTypes.object.isRequired,
	cadastrString: PropTypes.string.isRequired,
	objects: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	showDetails: PropTypes.func.isRequired,
};
