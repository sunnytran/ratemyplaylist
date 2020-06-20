
import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <h1 class="title is-1">ratemyplaylist</h1>
                </div>

                <div class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <a class="subtitle" href="http://localhost:5000/login">login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}

export default Header;
