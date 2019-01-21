import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderInput } from '../components/HeaderInput';
import { handleInput } from '../actions/HeaderInputActions';
//import { someHeaderAction } from '../actions/HeaderInputActions';

class HeaderInputContainer extends Component {
	render() {
		const { handleInput } = this.props;
		return <HeaderInput handleInput={handleInput} />;
	}
}

const mapStateToProps = store => {
	return {
		headerInput: store.headerInput,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleInput: cadastrString => dispatch(handleInput(cadastrString)),
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HeaderInputContainer);
