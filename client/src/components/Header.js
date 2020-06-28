
import React, { Component } from 'react';

class Header extends Component {

  constructor(props) {
    super(props);

    this.linkRef = React.createRef();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.rate(this.linkRef.current.value);
  }

  render() {
    return (
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container has-text-centered">
              <div>
                <h1 class="title is-spaced">see if your music tastes are <span class="has-text-primary">actually</span> unique</h1>
                <h2 class="subtitle">call yourself quirky with 100% confidence</h2>

                <div class="field has-addons has-addons-centered">
                  <p class="control">
                    <input class="input" type="text" placeholder="playlist link" ref={this.linkRef}/>
                  </p>
                  <p class="control">
                    <a class="button is-primary" onClick={this.handleClick}>
                      rate
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
