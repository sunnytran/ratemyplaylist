
import React, { Component } from 'react';
import './App.css';

import Nav from '../components/Nav';
import Header from '../components/Header';
import PlaylistTable from '../components/PlaylistTable';

import queryString from 'query-string';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      username: '',
      playlists: []
    }

    this.getIsLoggedIn = this.getIsLoggedIn.bind(this);
    this.setIsLoggedIn = this.setIsLoggedIn.bind(this);
  }

  getIsLoggedIn() {
    return this.state.isLoggedIn;
  }

  setIsLoggedIn(x) {
    this.setState({
      isLoggedIn: x
    });
  }

  componentWillMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);

      this.setIsLoggedIn(true);
      spotifyApi.getMe()    
        .then((response) => {
          this.setState({
            username: response.display_name
          })
        })
      
      spotifyApi.getUserPlaylists()
        .then((response) => {
          this.setState({
            playlists: response.items
          })
        })
    } else {
      this.setIsLoggedIn(false);
    }
  }

  render() {
    return (
      <div class="container">
        <Nav getLoginValue={this.getIsLoggedIn}></Nav>
        <Header getLoginValue={this.getIsLoggedIn} username={this.state.username}></Header>
        {
          this.state.isLoggedIn ? 
            <PlaylistTable playlists={this.state.playlists}/>
            : null
        }
      </div>
    );
  }
}

export default App;
