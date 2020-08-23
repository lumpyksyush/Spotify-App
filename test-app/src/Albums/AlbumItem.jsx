import React from 'react';
import PropTypes from 'prop-types';

export const AlbumItem = ({
	image,
	title,
	artist,
	link,
	tracksCount,
	releaseDate,
} = {}) => {
	return (
		<figure className="album-item">
			<img src={image} alt={title} />
			<figcaption className="album-item__info">
				<p>
					<a href={link}>{title}</a> by {artist}
				</p>
				<p>Tracks total: {tracksCount}</p>
				<p>Released in {releaseDate}</p>
			</figcaption>
		</figure>
	);
};

AlbumItem.propTypes = {
	album: PropTypes.shape({
		title: PropTypes.string,
		image: PropTypes.string,
		link: PropTypes.string,
		artist: PropTypes.array,
		tracksCount: PropTypes.number,
		releaseDate: PropTypes.number,
	}),
};
