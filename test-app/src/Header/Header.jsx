import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

export const Header = ({ userName } = 'Ksyusha') => (
	<header className="header">
		<nav className="header__container">
			<div className="header__title">
				<h1>Spotify Project</h1>
			</div>
			<div className="header__user-block">
				{/*add navigation*/}
				<a href="http://localhost:3000/user">
					<p>Navigate to {userName}</p>
				</a>
			</div>
		</nav>
	</header>
);

Header.propTypes = {
	userName: PropTypes.string,
};
