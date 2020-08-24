import React from 'react';
import PropTypes from 'prop-types';

const PlaylistItem = ({
	playlist: {
		image,
		name,
		link,
		owner: { ownerName, ownerLink },
		tracksCount,
	},
	key,
}) => {
	return (
		<figure className="playlist-item" key={key}>
			<img src={image} alt={name} />
			<figcaption className="playlist-item__info">
				<p>
					Name: <a href={link}>{name}</a>
				</p>
				<p>
					Owner: <a href={ownerLink}>{ownerName}</a>
				</p>
				<p> Tracks Count: {tracksCount}</p>
			</figcaption>
		</figure>
	);
};

PlaylistItem.propTypes = {
	playlist: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		link: PropTypes.string,
		tracksCount: PropTypes.number,
		owner: PropTypes.shape({
			ownerName: PropTypes.string,
			ownerLink: PropTypes.string,
		}),
	}),
};

export default PlaylistItem;
