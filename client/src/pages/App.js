
import React, { Component } from 'react';
import Header from '../components/Header/Header';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class="container">
        <Header></Header>

        <section class="hero">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title is-spaced">see if your music tastes are actually unique</h1>
              <h2 class="subtitle">call yourself quirky with 100% confidence on that next date</h2>
              <div class="buttons is-centered">
                <a class="control button is-primary" href="http://localhost:5000/login">log into spotify</a>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;
