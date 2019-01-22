import React from 'react';
import PropTypes from 'prop-types';

export class HeaderInput extends React.Component {
	state = {
		valid: false,
		cadastrString: '',
		status: false,
	};

	validate = () => {
		let { cadastrString } = this.state;
		cadastrString = cadastrString.trim();
		const match = cadastrString.match(/[^:0-9]/);
		const matchDouble = cadastrString.match(/::/);
		if (cadastrString.length < 5 || match || matchDouble) {
			this.setState({ valid: false });
		} else {
			this.setState({ valid: true });
			return true;
		}
		return false;
	};

	//handle button click
	handleClickOK = () => {
		if (this.validate()) {
			this.setState({ status: true });
			this.props.handleInput(this.state.cadastrString);
		}
	};

	handleChange = event => {
		const { id, value } = event.currentTarget;
		this.setState({ [id]: value, status: false });
	};

	render() {
		const { valid } = this.state;

		return (
			<React.Fragment>
				<header className="App-header">
					<label name="inputCN">
						<span>Введите кадастровый номер</span>
						<input
							type="text"
							id="cadastrString"
							className={valid ? 'inputOK' : 'inputError'}
							onChange={this.handleChange}
							autoFocus={true}
						/>
					</label>
					<input
						type="button"
						className="btn"
						value="Найти"
						onClick={this.handleClickOK}
					/>
				</header>
			</React.Fragment>
		);
	}
}

HeaderInput.propTypes = {
	handleInput: PropTypes.func.isRequired,
};
