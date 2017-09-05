import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

class ConnectSpotify extends React.Component {
  render() {
    const { search } = this.props.location;
    const parsed = queryString.parse(search);
    const success = parsed.success || false;

    let message = '';
    if (success === 'true' || success === true) {
      message = 'Your Spotify account has been connected!';
    } else {
      message = 'Your spotify account has not yet been connected.';
    }

    return (
      <div>
        {message}
      </div>
    );
  }
}

export default ConnectSpotify;

