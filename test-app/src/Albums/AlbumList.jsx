import React from 'react';
import AlbumItem from './AlbumItem';

const AlbumsList = ({ albums } = {}) => {
	return (
		<div className="album-list">
			{albums.items.map((album, id) => {
				const albumData = {
					name: album.name,
					image: album.images[0].url,
					link: album.external_urls.spotify,
					tracksCount: album.total_tracks,
					releaseDate: Number(album.release_date.slice(0, 4)),
					artists: album.artists.map((artist, id) => (
						<a href={artist.external_urls.spotify} key={id}>
							{artist.name}
						</a>
					)),
				};

				return <AlbumItem album={albumData} key={id} />;
			})}
		</div>
	);
};

export default AlbumsList;
