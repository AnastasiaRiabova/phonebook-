import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from '../../redux/AuthPhonebook/authSelectors';

const PublickRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuth: selectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublickRoute);
