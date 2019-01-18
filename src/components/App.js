import React, { Component } from 'react';
//import { connect } from 'react-redux';
import UserContainer from '../containers/UserContainer';
import PageContainer from '../containers/PageContainer';
//import { User } from './User';
//import { Page } from './Page';
//import { getPhotos } from '../actions/PageActions';
//import { handleLogin } from '../actions/UserActions';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="app">
				<PageContainer />
				<UserContainer />
			</div>
		);
	}
}

/*
	render() {
		const { user, page, getPhotosAction, handleLoginAction } = this.props;
		return (
			<div className="app">
				<header>
					<h3 className="App-title">Мой топ фото</h3>
				</header>
				<p className="App-intro">Здесь будут мои самые залайканые фото</p>

				<Page
					photos={page.photos}
					year={page.year}
					user_id={user.user_id}
					isFetching={page.isFetching}
					getPhotos={getPhotosAction}
				/>
				<User
					name={user.name}
					isFetching={user.isFetching}
					error={user.error}
					handleLogin={handleLoginAction}
				/>
			</div>
		);
	}
}

const mapStateToProps = store => {
	console.log(store);
	return {
		user: store.user,
		page: store.page,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPhotosAction: (year, user_id) => dispatch(getPhotos(year, user_id)),
		handleLoginAction: () => dispatch(handleLogin()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
*/

export default App;
