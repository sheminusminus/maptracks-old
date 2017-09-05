import React from 'react';

import styles from './App.css';

import {
  AppHeader,
  Menu,
} from '../../components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
  }

  handleMenuToggle() {
    console.log(this.state.menuOpen);
    this.setState({
      menuOpen: !this.state.menuOpen,
    });
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <div className={styles.app}>
        <AppHeader
          handleMenuToggle={this.handleMenuToggle} />
        <div
          onClick={this.handleMenuToggle}>
          <Menu
            open={this.state.menuOpen} />
        </div>
        <div className={styles.appBody}>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
