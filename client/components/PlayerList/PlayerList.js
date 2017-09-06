import React from 'react';

import PlayerItem from './PlayerItem';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.handleTrackSelection = this.handleTrackSelection.bind(this);
  }

  handleTrackSelection(trackId) {
    console.log(trackId, this.props);
  }

  renderItems() {
    const {
      recent,
    } = this.props;

    return recent.map((item, idx) => {
      const key = `recently-played-${idx}`;
      return React.createElement(PlayerItem, {
        name: item.name,
        artist: item.artist,
        id: item.id,
        url: item.url,
        onSelect: this.handleTrackSelection,
        key,
      });
    });
  }

  render() {
    const recentItems = this.renderItems();

    return (
      <ul>
        {recentItems}
      </ul>
    );
  }
}

export default PlayerList;
