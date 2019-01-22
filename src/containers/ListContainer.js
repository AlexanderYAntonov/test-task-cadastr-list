import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '../components/List';
import { showDetails } from '../actions/ListActions';

class ListContainer extends Component {
	render() {
		const { list, showDetails } = this.props;

		return (
			<List
				objects={list.objects}
				cadastrString={list.cadastrString}
				isFetching={list.isFetching}
				error={list.error}
				showDetails={showDetails}
				isModal={list.isModal}
				modalObjectId={list.modalObjectId}
				isModalFetching={list.isModalFetching}
				objectModal={list.objectModal}
			/>
		);
	}
}
const mapStateToProps = store => {
	console.log(store);
	return {
		list: store.list,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		showDetails: (objectId, objectType) =>
			dispatch(showDetails(objectId, objectType)),
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListContainer);
