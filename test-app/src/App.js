import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import AlbumList from './Albums/AlbumList';
import ArtistList from './Artists/ArtistList';
import Playlist from './Playlists/Playlist';
import TrackList from './Track/TrackList';
import SearchForm from './SearchForm/SearchForm';
import Header from './Header/Header';
import { ALBUMS, ARTIST, PLAYLIST, TRACK } from './utils/mockData';
import 'antd/dist/antd.css';
import './App.css';

const spotifyApi = new SpotifyWebApi();

class App extends Component {
	constructor() {
		super();
		const params = this.getHashParams();
		const token = params.access_token;
		if (token) {
			spotifyApi.setAccessToken(token);
		}
		this.state = {
			loggedIn: token ? true : false,
		};
	}
	getHashParams() {
		var hashParams = {};
		var e,
			r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		e = r.exec(q);
		while (e) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
			e = r.exec(q);
		}
		return hashParams;
	}

	render() {
		return (
			<div className="App">
				<Header isLoggedIn={this.state.loggedIn} />
				<main>
					<SearchForm />
					Artists: <ArtistList artists={ARTIST.artists} />
					Tracks: <TrackList tracks={TRACK} />
					Playlists: <Playlist playlists={PLAYLIST} />
					Albums: <AlbumList albums={ALBUMS} />
				</main>
			</div>
		);
	}
}

export default App;
