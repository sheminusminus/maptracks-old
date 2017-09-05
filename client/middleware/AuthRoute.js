import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  fetching: state.auth.fetching,
});

/**
 * AuthRoute
 * Component that enforces a user IS logged in.
 * To render an authentication-neutral route, use react-router-dom's built-in Route.
 */
class AuthRoute extends React.Component {
  render() {
    const {
      authenticated,
      fetching,
      Component,
    } = this.props;

    if (fetching) {
      return (<div />);
    }

    return (
      <Route {...this.props} render={props => (
        authenticated ?
          React.createElement(Component, props)
          :
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }} />
      )}
      />
    );
  }
}

AuthRoute.propTypes = {
  Component: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
  fetching: PropTypes.bool,
};

AuthRoute.defaultProps = {
  authenticated: false,
  fetching: false,
};

export default connect(
  mapStateToProps,
)(AuthRoute);
