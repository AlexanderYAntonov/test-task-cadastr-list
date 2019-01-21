import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List } from '../components/List';
//import { getList } from '../actions/ListActions';

class ListContainer extends Component {
	render() {
		const { list } = this.props;

		return (
			<List
				objects={list.objects}
				cadastrString={list.cadastrString}
				isFetching={list.isFetching}
				error={list.error}
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
/*const mapDispatchToProps = dispatch => {
	return {
		getList: number => dispatch(getList(number)),
	};
};*/
export default connect(mapStateToProps /*,
	mapDispatchToProps*/)(ListContainer);
