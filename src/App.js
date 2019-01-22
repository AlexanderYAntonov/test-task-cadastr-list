import React, { Component } from 'react';
import './App.css';
import ListContainer from './containers/ListContainer';
import HeaderInputContainer from './containers/HeaderInputContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<HeaderInputContainer />
				<ListContainer />
			</div>
		);
	}
}

export default App;
