import React from 'react';

class App extends React.Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        App Header
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default App;