
import React, { Component } from 'react';
import './App.css';

import Nav from '../components/Nav';
import Header from '../components/Header';

import RateResults from '../components/RateResults';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      playlistId: '',
      currentLink: '',
      tracks: [],
      isRating: false
    }

    this.rate = this.rate.bind(this)
    this.setIsRating = this.setIsRating.bind(this)
  }

  setIsRating(isRating) {
    this.setState({ isRating: isRating })
  }

  componentWillMount() {
    fetch('/api/token')
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("access_token", res.access_token);
    });

    spotifyApi.setAccessToken(localStorage.getItem("access_token"));
  }

  rate(link) {
    // alert(link)
    // TODO: Check validity of link in terms of if it is a spotify link and if the playlist even exists
    // https://open.spotify.com/playlist/08ZBip1gxb97iNoHjFEBYh?si=wRkw8LJdRhua8MOvUq_uKA

    var playlistId = link.substring(link.lastIndexOf("/") + 1)
    this.setState({
      playlistId: playlistId
    })

    var token = localStorage.getItem("access_token")

    this.setState({
      currentLink: 'https://api.spotify.com/v1/playlists/' + playlistId + '/tracks'
    }, () => {
      const fetchTracks = async() => {
        while (this.state.currentLink !== '') {
          await fetch(this.state.currentLink, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer ' + token
            }), 
          })
          .then(res => res.json())
          .then((res) => {
            if (res.tracks && res.tracks.items) {
              var tracks = res.tracks.items.map(i => i.track)
              var tmp = this.state.tracks
              tmp.push.apply(tmp, tracks)
              
              this.setState({ tracks: tmp })

            } else if (!res.tracks && res.items) {
              var tracks = res.items.map(i => i.track)
              var tmp = this.state.tracks
              tmp.push.apply(tmp, tracks)
              
              this.setState({ tracks: tmp })
            }

            if (!res.tracks && res.next)
            this.setState({ currentLink: res.next })
            else if (res.tracks && res.tracks.next)
              this.setState({ currentLink: res.tracks.next })
            else
              this.setState({ currentLink: '' }, this.setIsRating(true))
          })
        }
      }
      fetchTracks()
    })
  }

  render() {
    return (
      <div class="container">
        <Nav></Nav>
        {
          this.state.isRating ?
            <RateResults tracks={this.state.tracks}/> :
            <Header prepareProps={this.rate} />
        }
      </div>
    );
  }
}

export default App;
