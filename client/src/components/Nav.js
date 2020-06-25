
import React, { Component } from 'react';

class Nav extends Component {

  constructor(props) {
    super(props);

    this.loginContent = this.loginContent.bind(this);
  }

  loginContent() {
    return (
      <div class="navbar-item">
        <a class="is-primary" href="http://localhost:5000/login">login</a>
      </div>
    );
  }

  logoutContent() {
    return (
      <div class="navbar-item">
        <a class="is-primary" href="http://localhost:5000/login">logout</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        <nav class="navbar">
          <div class="navbar-brand">
            <p class="navbar-item" class="title">ratemyplaylist</p>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              {
                this.props.getLoginValue() ?
                  this.logoutContent() :
                  this.loginContent()
              }
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
