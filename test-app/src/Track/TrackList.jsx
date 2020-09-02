import React from 'react';
import TrackItem from './TrackItem';

const TrackList = ({ tracks } = {}) => {
	return (
		<div className="track-list">
			{tracks.items.map((track, id) => {
				const trackData = {
					name: track.name,
					link: track.external_urls.spotify,
					album: {
						image: track.album.images[0].url,
						name: track.album.name,
						href: track.album.href,
					},
					artists: track.artists.map((artist, id) => (
						<>
							<a href={artist.external_urls.spotify} key={id}>
								{artist.name}
							</a>
						</>
					)),
					popularity: track.popularity,
				};

				return <TrackItem track={trackData} key={id} />;
			})}
		</div>
	);
};

export default TrackList;
