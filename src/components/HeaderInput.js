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
		if (cadastrString.length < 5 || match) {
			this.setState({ valid: false });
		} else {
			this.setState({ valid: true });
			return true;
		}
		return false;
	};

	handleClickOK = () => {
		const { handleInput } = this.props;
		if (this.validate()) {
			this.setState({ status: true });
			handleInput(this.state.cadastrString);
		}
	};

	handleChange = event => {
		const { id, value } = event.currentTarget;
		this.setState({ [id]: value, status: false });
	};

	render() {
		const { status, cadastrString, valid } = this.state;

		return (
			<div className="App">
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
				<div>{status && <p>Введен корректный номер {cadastrString}</p>}</div>
			</div>
		);
	}
	/*renderTemplate = () => {
		const { name, error, isFetching } = this.props;
		console.log('<User/> render');
		if (error) {
			return <p>Во время запроса произошла ошибка, обновите страницу</p>;
		}
		if (isFetching) {
			return <p>Загружаю...</p>;
		}
		if (name) {
			return <p>Привет, {name}!</p>;
		} else {
			return (
				<button className="btn" onClick={this.props.handleLogin}>
					Войти
				</button>
			);
		}
	};
	render() {
		return <div className="ib user">{this.renderTemplate()}</div>;
	}*/
}

HeaderInput.propTypes = {
	/*
	name: PropTypes.string.isRequired,
	error: PropTypes.string,
	isFetching: PropTypes.bool.isRequired,*/
	handleInput: PropTypes.func.isRequired,
};
