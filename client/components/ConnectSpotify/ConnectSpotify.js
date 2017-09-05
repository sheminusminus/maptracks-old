import React from 'react';
import { Link } from 'react-router-dom';

class ConnectSpotify extends React.Component {
  constructor(props) {
    super(props);
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.handleIframeLoad = this.handleIframeLoad.bind(this);
  }

  /* eslint-disable */
  handleIframeLoad(evt) {
    console.log(evt.target);
  }
  /* eslint-enable */

  render() {
    const { authUrl } = this.props;
    const permissions = [
      'allow-forms',
      'allow-scripts',
      'allow-top-navigation',
      'allow-same-origin',
      'allow-popups',
    ];
    return (
      <iframe
        frameBorder={0}
        width="300"
        height="300"
        name="iframeEl"
        id="iframeEl"
        onLoad={this.handleIframeLoad}
        sandbox={permissions.join(' ')}
        src={authUrl} />
    );
  }
}

export default ConnectSpotify;

