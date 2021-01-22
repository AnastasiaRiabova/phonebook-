import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from '../../redux/AuthPhonebook/authSelectors';

const PrivatRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuth: selectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PrivatRoute);
