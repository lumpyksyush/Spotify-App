import React from 'react';
import ArtistItem from './ArtistItem';

const ArtistsList = ({ artists }) => {
	return (
		<div>
			{artists.items.map((artist, id) => {
				const artistData = {
					name: artist.name,
					image: artist.images[0] ? artist.images[0].url : '',
					link: artist.external_urls.spotify,
					genres: artist.genres,
				};
				return <ArtistItem artist={artistData} key={id} />;
			})}
		</div>
	);
};

export default ArtistsList;
