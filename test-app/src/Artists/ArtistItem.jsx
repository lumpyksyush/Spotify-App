import React from 'react';
import PropTypes from 'prop-types';

const ArtistItem = ({ artist: { name, image, genres, link }, key }) => {
	return (
		<figure className="artist-item" key={key}>
			<img src={image} alt={name} />
			<figcaption className="artist-item__info">
				<p>
					Name: <a href={link}>{name}</a>
				</p>
				{genres.map((genre, key) => (
					<p key={key}>{genre} </p>
				))}
			</figcaption>
		</figure>
	);
};

ArtistItem.propTypes = {
	artist: PropTypes.shape({
		name: PropTypes.string,
		link: PropTypes.string,
		image: PropTypes.string,
		genres: PropTypes.array,
	}),
};

export default ArtistItem;
