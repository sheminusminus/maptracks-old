import React from 'react';
import { Link } from 'react-router-dom';

class UserOptions extends React.Component {
  render() {
    return (
      <div>
        <Link to="/track">Map</Link>
      </div>
    );
  }
}

export default UserOptions;
