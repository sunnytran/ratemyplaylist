
import React, { Component } from 'react';
import './App.css';

import Nav from '../components/Nav';
import Header from '../components/Header';

import queryString from 'query-string';
import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }

    this.getIsLoggedIn = this.getIsLoggedIn.bind(this);
    this.setIsLoggedIn = this.setIsLoggedIn.bind(this);
  }

  getIsLoggedIn() {
    return this.state.isLoggedIn;
  }

  setIsLoggedIn(x) {
    this.state = {
      isLoggedIn: x
    }
  }

  componentWillMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;

    if (accessToken) {
      spotifyApi.setAccessToken(accessToken);

      this.setIsLoggedIn(true);
      
    } else {
      this.setIsLoggedIn(false);
    }
  }

  render() {
    return (
      <div class="container">
        <Nav getLoginValue={this.getIsLoggedIn}></Nav>
        <Header getLoginValue={this.getIsLoggedIn}></Header>
      </div>
    );
  }
}

export default App;
