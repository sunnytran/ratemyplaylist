
import React, { Component } from 'react';
import './App.css';

import Nav from '../components/Nav';
import Header from '../components/Header';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  
  constructor(props) {
    super(props);

    this.rate = this.rate.bind(this);
  }

  componentWillMount() {
    fetch('/api/token')
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("access_token", res.access_token);
    });

    spotifyApi.setAccessToken(localStorage.getItem("access_token"));

    // spotifyApi.getPlaylist("37i9dQZF1DXaKIA8E7WcJj")
    // .then((response) => {
    //   console.log(response)
    // })
  }

  rate(link) {
    alert(link)

    // TODO: Check validity of link
  }

  render() {
    return (
      <div class="container">
        <Nav></Nav>
        <Header rate={this.rate}></Header>
      </div>
    );
  }
}

export default App;
