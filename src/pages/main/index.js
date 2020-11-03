import React, {useEffect, useState} from 'react';
import api from "../../services/api"
import './styles.css';



export default function LastList (props) {


    const result = "xuxa";
    const [artists, setArtists] = useState([])
    const [album, setAlbum] = useState([])
    const urlArtists = `?method=artist.search&artist=` +
                        `${result}` +
                        `&api_key=5bfb0941489d22707f8bf2808aa20bd6&format=json`

    const urlAlbum = "?method=album.search&album=" + 
                        `${result}` +
                     "&api_key=5bfb0941489d22707f8bf2808aa20bd6&format=json"

    useEffect(() => {load (props); },[]);

        async function load() {
            try{
                const response = await api.get(urlArtists)
                setArtists(response.data.results.artistmatches.artist)
                console.log(response.data.results.artistmatches.artist)   
            } catch(erro) {
                console.log(erro)
            }
        }   

        useEffect(() => {loadAlbum () },[])

        async function loadAlbum() {
            try{
                const response = await api.get(urlAlbum)
                setAlbum(response.data.results.albummatches.album)
                console.log(props)
            } catch(erro) {
                console.log(erro)
            }
        }
        

        return (
            <div className="last-list">
                
                {artists.map(artist => (
                    <article key={artist.id}>
                        <strong>{artist.name}</strong>
                        <a href={artist.url}>Sobre a banda</a>
                    </article>
                ))}
               

                {album.map(albums => (
                    <article key={albums.id}>
                        <strong>{albums.name}</strong>
                        <a href={albums.url}>Sobre o álbum</a>
                    </article>
                ))}
            </div>
        )
    }
