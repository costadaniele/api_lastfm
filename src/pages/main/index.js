import React, { Component } from 'react';
import api from "../../services/api";

import './styles.css';

export default class Main extends Component {
    state = {
        artists: [],
        album: [],
    }

    componentDidMount(){
        this.loadArtists();
        this.loadAlbum();
    }

    loadArtists = async () => {
        const response = await api.get('?method=artist.search&artist=medulla&api_key=5bfb0941489d22707f8bf2808aa20bd6&format=json');

        this.setState({artists: response.data.results.artistmatches.artist});
    };

    loadAlbum = async () => {
        const response = await api.get('?method=album.search&album=fim&da&tregua&api_key=5bfb0941489d22707f8bf2808aa20bd6&format=json');

        this.setState({album: response.data.results.albummatches.album});
    };

    render() {

        const { artists } = this.state;
        const { album } = this.state;

        return (
            <div className="last-list">
                {artists.map(artist => (
                    <article key={artist._id}>
                        <strong>{artist.name}</strong>
                        <img src={artist.image} />
                        <a href={artist.url}>Conheça a página da banda</a>
                    </article>
                ))}

                {album.map(albums => (
                    <article key={albums._class}>{albums.name}
                        <strong>{albums.name}</strong>
                        <img src={albums.image} />
                    </article>
                ))}
            </div>
        )
    }
}