import React from 'react';
import PlaylistItem from './PlaylistItem';

const PlayLists = ({ playlists } = {}) => {
	return (
		<div className="album-list">
			{playlists.items.map((playlist, id) => {
				const playlistData = {
					name: playlist.name,
					image: playlist.images[0].url,
					link: playlist.external_urls.spotify,
					tracksCount: playlist.tracks.total,
					owner: {
						name: playlist.owner.display_name,
						link: playlist.owner.external_urls.spotify,
					},
				};
				return <PlaylistItem playlist={playlistData} key={id} />;
			})}
		</div>
	);
};

export default PlayLists;
