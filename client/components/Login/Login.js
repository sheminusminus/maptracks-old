import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: '',
    };
    this.bindCallbacks();
  }

  bindCallbacks() {
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmail(evt) {
    this.setState({
      email: evt.target.value.trim(),
    });
  }

  handlePass(evt) {
    this.setState({
      pass: evt.target.value.trim(),
    });
  }

  handleLogin(evt) {
    const { login } = this.props;
    const { email, pass } = this.state;

    evt.preventDefault();

    login(email, pass);
  }

  render() {
    return (
      <div
        className={styles.login}>
        <h2>Login</h2>
        <form
          onSubmit={this.handleLogin}
          className={styles.loginForm}>
          <input
            className={styles.loginInput}
            type="email"
            required="required"
            placeholder="Email"
            onChange={this.handleEmail}
            value={this.state.email} />
          <input
            className={styles.loginInput}
            type="password"
            required="required"
            placeholder="Password"
            onChange={this.handlePass}
            value={this.state.pass} />
          <input
            className={styles.loginButton}
            type="submit"
            value="Go" />
        </form>
        <Link to="/signup">
          Or sign up here
        </Link>
      </div>
    );
  }
}

export default Login;
