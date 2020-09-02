import React from 'react';
import PropTypes from 'prop-types';
//import './Header.scss';

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<nav className="header__container">
					<div className="header__title">
						<h1>Spotify Project</h1>
					</div>
					<div className="header__user-block">
						{this.props.isLoggedIn ? (
							<a href="http://localhost:3000/user">
								<p>Navigate to User Page</p>
							</a>
						) : (
							<a href="http://localhost:8888/">Login with Spotify</a>
						)}
					</div>
				</nav>
			</header>
		);
	}
}

Header.propTypes = {
	userName: PropTypes.string,
};
