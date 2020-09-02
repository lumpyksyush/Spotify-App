import React from 'react';
import PropTypes from 'prop-types';

export const AlbumItem = ({
	album: { image, name, artists, link, tracksCount, releaseDate },
	key,
}) => {
	return (
		<figure className="album-item" key={key}>
			<img src={image} alt={name} />
			<figcaption className="album-item__info">
				<p>
					<a href={link}>{name}</a> by {artists}
				</p>
				<p>Tracks total: {tracksCount}</p>
				<p>Released in: {releaseDate}</p>
			</figcaption>
		</figure>
	);
};

AlbumItem.propTypes = {
	album: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		link: PropTypes.string,
		artists: PropTypes.array,
		tracksCount: PropTypes.number,
		releaseDate: PropTypes.number,
	}),
};

export default AlbumItem;
