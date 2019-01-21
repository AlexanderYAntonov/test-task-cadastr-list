import React, { Component } from 'react';
import './App.css';
import ListContainer from './containers/ListContainer';
import HeaderInputContainer from './containers/HeaderInputContainer';

class App extends Component {
	/*state = {
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
		if (this.validate()) {
			this.setState({ status: true });
		}
	};

	handleChange = event => {
		const { id, value } = event.currentTarget;
		this.setState({ [id]: value, status: false });
	};*/

	render() {
		//	const { status, cadastrString, valid } = this.state;
		return (
			<div className="App">
				{/*
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
				*/}
				<HeaderInputContainer />
				<ListContainer />
			</div>
		);
	}
}

export default App;
