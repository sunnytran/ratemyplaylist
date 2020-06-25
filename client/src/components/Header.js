
import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);

    this.loginContent = this.loginContent.bind(this);
    this.loggedInContent = this.loggedInContent.bind(this);
  }

  loginContent() {
    return (
      <div>
        <h1 class="title is-spaced">see if your music tastes are actually unique</h1>
        <h2 class="subtitle">call yourself quirky with 100% confidence</h2>
        <div class="buttons is-centered">
            <a class="control button is-primary" href="http://localhost:5000/login">log into spotify</a>
        </div>
      </div>
    );
  }

  loggedInContent() {
    return (
      <div>
        <h1 class="title is-spaced">Welcome {this.props.username}</h1>
        <h2 class="subtitle">Here are your playlists</h2>
      </div>
    );
  }

  render() {
    return (
      <div>
        <section class="hero">
          <div class="hero-body">
              <div class="container has-text-centered">
                {
                  this.props.getLoginValue() ?
                    this.loggedInContent() :
                    this.loginContent()
                }

              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
