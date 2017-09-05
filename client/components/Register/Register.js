import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Register.css';

class Register extends React.Component {
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
    this.handleRegister = this.handleRegister.bind(this);
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

  handleRegister(evt) {
    const { register } = this.props;
    const { email, pass } = this.state;

    evt.preventDefault();

    register(email, pass);
  }

  render() {
    return (
      <div
        className={styles.register}>
        <h2>Get Started</h2>
        <form
          onSubmit={this.handleRegister}
          className={styles.registerForm}>
          <input
            className={styles.registerInput}
            type="email"
            required="required"
            placeholder="Email"
            onChange={this.handleEmail}
            value={this.state.email} />
          <input
            className={styles.registerInput}
            type="password"
            required="required"
            placeholder="Password"
            onChange={this.handlePass}
            value={this.state.pass} />
          <input
            className={styles.registerButton}
            type="submit"
            value="Go" />
        </form>
        <Link to="/login">
          Or login here
        </Link>
      </div>
    );
  }
}

export default Register;
