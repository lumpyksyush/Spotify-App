import React from 'react';
import PropTypes from 'prop-types';

const TrackItem = ({ track: { name, artists, popularity, album }, key }) => {
	return (
		<figure className="track-item" key={key}>
			<img src={album.image} alt={name} />
			<figcaption className="track-item__info">
				<p>
					Name: <a href={album.link}>{name}</a>
				</p>
				<p>
					Album: <a href={album.href}>{album.name}</a>
				</p>
				<p> Artists: {artists}</p>
				<p> Popularity: {popularity}</p>
			</figcaption>
		</figure>
	);
};

TrackItem.propTypes = {
	track: PropTypes.shape({
		name: PropTypes.string,
		link: PropTypes.string,
		popularity: PropTypes.number,
		artists: PropTypes.array,
		album: PropTypes.shape({ image: PropTypes.string, name: PropTypes.string }),
	}),
};

export default TrackItem;
