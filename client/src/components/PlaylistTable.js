
import React, { Component } from 'react';
import App from '../pages/App';

class PlaylistTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rows: Math.ceil(this.props.playlists.length / 4),
      cols: 4
    }
  }

  render() {
    return (
      <div>
        {
          this.props.playlists.map((i) => {
            console.log(i)
              return (
                <div>
                  <p>{i.name}</p>
                </div>
              )
          })
        }
      </div>
    );
  }
}

export default PlaylistTable;
