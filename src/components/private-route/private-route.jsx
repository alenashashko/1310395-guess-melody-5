import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {AuthorizationStatus} from '../../const';

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps) // ?
            : <Redirect to={`/login`} />
        );
      }}
    >
    </Route>
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
