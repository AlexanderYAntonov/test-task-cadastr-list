import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		valid: false,
		cadastrNumber: '',
		status: false,
	};

	validate = () => {
		let { cadastrNumber } = this.state;
		cadastrNumber = cadastrNumber.trim();
		const match = cadastrNumber.match(/[^:0-9]/);
		if (cadastrNumber.length < 5 || match) {
			this.setState({ valid: false });
		} else {
			this.setState({ valid: true });
			return true;
		}
		return false;
	};

	handleClickOK = () => {
		if (this.validate()) {
			this.setState({ status: true });
		}
	};

	handleChange = event => {
		const { id, value } = event.currentTarget;
		this.setState({ [id]: value, status: false });
	};

	render() {
		const { status, cadastrNumber, valid } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<label name="inputCN">
						<span>Введите кадастровый номер</span>
						<input
							type="text"
							id="cadastrNumber"
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
				<div>{status && <p>Введен корректный номер {cadastrNumber}</p>}</div>
			</div>
		);
	}
}

export default App;
