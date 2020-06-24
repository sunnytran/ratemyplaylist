
import React, { Component } from 'react';

class Nav extends Component {

  constructor(props) {
    super(props);
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
              <div class="navbar-item">
                {
                  this.props.getLoginValue() ?
                    <a class="is-primary" href="http://localhost:5000/login">logout</a> :
                    <a class="is-primary" href="http://localhost:5000/login">login</a>
                }
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
