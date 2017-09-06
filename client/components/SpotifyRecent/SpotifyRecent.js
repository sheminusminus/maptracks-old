import React from 'react';

import PlayerList from '../PlayerList';

class SpotifyRecent extends React.Component {
  render() {
    const {
      recent,
    } = this.props;

    return (
      <PlayerList
        recent={recent} />
    );
  }
}

export default SpotifyRecent;
