import React from 'react';

class UserMain extends React.Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <div>
        UserMain
        <div>
          {children}
        </div>
      </div>
    );
  }
}

export default UserMain;
