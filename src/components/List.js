import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import '../App.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '10px',
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.7)',
	},
};
export class List extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			modalIsOpen: false,
		};
	}

	openModal = () => {
		this.setState({ modalIsOpen: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	handleSpanClick = e => {
		e.preventDefault();

		const itemID = e.currentTarget.id.split('&');
		const objectId = itemID[0];
		const objectType = itemID[1];

		this.props.showDetails(objectId, objectType);
		this.openModal();
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
							<span
								onClick={this.handleSpanClick}
								id={itemID}
								className="clickableSpan"
							>
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
		const { cadastrString, isFetching, objects, objectModal } = this.props;
		const { modalIsOpen } = this.state;

		if (objects.length) {
			return (
				<React.Fragment>
					<div className="list">
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
					<Modal
						isOpen={modalIsOpen}
						ariaHideApp={false}
						style={customStyles}
						onRequestClose={this.closeModal}
					>
						<table className="modalTable">
							<thead>
								<tr>
									<td>Дата записи</td>
									<td>Наименование</td>
									<td>Обременения</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>{objectModal.dateCreated}</td>
									<td>{objectModal.name}</td>
									<td>
										{objectModal.encumbrances && 'З'}
										{!objectModal.encumbrances && 'Не з'}арегистрированы
									</td>
								</tr>
							</tbody>
						</table>
					</Modal>
				</React.Fragment>
			);
		}
		return <p>Нет данных для отображения</p>;
	}
}
List.propTypes = {
	modalObjectId: PropTypes.string.isRequired,
	objectModal: PropTypes.object.isRequired,
	cadastrString: PropTypes.string.isRequired,
	objects: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	showDetails: PropTypes.func.isRequired,
};
