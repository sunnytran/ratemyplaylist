
import React, { Component } from 'react';
import './App.css';

import Nav from '../components/Nav';
import Header from '../components/Header';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    }
  }

  isLoggedIn() {
    return this.state.isLoggedIn;
  }

  setIsLoggedIn(isLoggedIn) {
    this.setState({
      isLoggedIn: isLoggedIn
    });  
  }

  render() {
    return (
      <div class="container">
        <Nav isLoggedIn={this.isLoggedIn.bind(this)} setIsLoggedIn={this.setIsLoggedIn.bind(this)}></Nav>
        <Header></Header>
      </div>
    );
  }
}

export default App;
