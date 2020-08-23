import React from 'react';
import PropTypes from 'prop-types';

const PlaylistItem = ({
	image,
	title,
	link,
	tracksCount,
	owner: { ownerName, ownerLink },
} = {}) => {
	return (
		<div>
			<img src={image} alt={title} />
			<p>
				Title: <a href={link}>{title}</a>
			</p>
			<p>
				Owner: <a href={ownerLink}>{ownerName}</a>
			</p>
			<p> Tracks Count: {tracksCount}</p>
		</div>
	);
};

PlaylistItem.propTypes = {
	playlist: PropTypes.shape({
		title: PropTypes.string,
		image: PropTypes.string,
		link: PropTypes.string,
		tracksCount: PropTypes.number,
		owner: PropTypes.shape({
			ownerName: PropTypes.string,
			ownerLink: PropTypes.string,
		}),
	}),
};
