import React from 'react';

class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    const {
      onSelect,
      id,
    } = this.props;

    onSelect(id);
  }

  render() {
    const {
      name,
      artist,
    } = this.props;

    return (
      <li
        onClick={this.handleSelect}>
        {name}<br/>
        {artist}
      </li>
    );
  }
}

export default PlayerItem;
