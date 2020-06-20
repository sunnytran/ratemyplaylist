
import React, { Component } from 'react';
import './App.css';

import queryString from 'query-string';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      playlists: []
    }
  }

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    if (accessToken)
      spotifyApi.setAccessToken(accessToken);
    
    spotifyApi.getMe()
      .then((response) => {
        this.setState({
          name: response.display_name
        });
      })
    
    spotifyApi.getUserPlaylists()
      .then((response) => {
        this.setState({
          playlists: response.items
        });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>ratemyplaylist</h1>
        <p>see if your music tastes are actually unique</p>
        <a href="http://localhost:5000/login">login with spotify</a>
        <p>What's up {this.state.name}</p>
        <p>Here are your playlists</p>
        <ul>
          {
            this.state.playlists.map(i=> {
              console.log(i);
              return (
                <li>
                  {i.name}
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
