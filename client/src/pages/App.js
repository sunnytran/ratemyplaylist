
import React, { Component } from 'react';
import './App.css';

import Nav from '../components/Nav';
import Header from '../components/Header';

import Rater from '../Rater';
// const rater = new Rater();

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  
  constructor(props) {
    super(props);

    this.rate = this.rate.bind(this);

    this.state = {
      playlistId: '',
      currentLink: ''
    }
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

    var playlistId = link.substring(link.lastIndexOf("/") + 1)
    this.setState({
      playlistId: playlistId
    })

    var token = localStorage.getItem("access_token")

    this.setState({
      currentLink: 'https://api.spotify.com/v1/playlists/' + playlistId + '/tracks'
    })

    const fetchTracks = async() => {
      while (this.state.currentLink) {
        await fetch(this.state.currentLink, { 
          method: 'get', 
          headers: new Headers({
            'Authorization': 'Bearer ' + token
          }), 
        })
        .then(res => res.json())
        .then((res) => {
          console.log(res)

          this.setState({
            currentLink: res.tracks.next
          })
        })
      }

    }
    fetchTracks()

    // const fetchTracks = async() => {
    //   const tracks = await spotifyApi.getPlaylist(
    //     playlistId,
    //     function (err, data) {
    //       if (err) console.error(err);
    //       else console.log(data);
    //     }
    //   );
    // }
    // fetchTracks()

    //   const fetchItems = async () => {
    //     if(!hasLoadeMore)return;
    //     try {
    //         const items: any = await itemsService.getItems({
    //           skip: 0,
    //           take: 50,
    //         })
    //     if(items!==null && items !==undefined){
    //        setHasLoadMore(true);
    //        setItems(items)  
    //     }
    //     else{
    //       setHasLoadMore(false);//if you are requesting the last+1 page y ou will not recive any items
    //       }
    //      } catch (error) {
    //        console.log(error)
    //     }
    //  }

        // this.setState({
        //   totalTracks: data.tracks.total,
        //   currentOffset: data.tracks.offset,
        //   limit: data.tracks.limit
        // })

      // console.log(this.state.totalTracks + " " + this.state.currentOffset + " " + this.state.limit)

        // .then(res => {
        //   console.log(res)

        //   this.setState({
        //     totalTracks: res.tracks.total,
        //     currentOffset: res.tracks.offset,
        //     limit: res.tracks.limit
        //   })
        // })
        // console.log("HI")
        
    // } while (this.state.tracks.length < this.state.totalTracks.length)
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
