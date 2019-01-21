import React from 'react';
import { connect } from 'react-redux';
import { HeaderInput } from '../components/HeaderInput';
import { handleInput } from '../actions/HeaderInputActions';

class HeaderInputContainer extends React.Component {
	render() {
		//const { user, handleLogin } = this.props;
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
