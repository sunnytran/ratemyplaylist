
import React, { Component } from 'react';

class RateResults extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log(this.props.tracks)
  }

  render() {
    return (
      <div>
        <section class="hero">
          <div class="hero-body">
            <div class="container has-text-centered">
              <div>
                <h1 class="title is-spaced">here are your <span class="has-text-primary">results</span></h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RateResults;
