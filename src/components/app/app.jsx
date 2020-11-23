import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import WelcomeScreen from '../welcome-screen/welcome-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameScreen from '../game-screen/game-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WinScreen from '../win-screen/win-screen';
import PrivateRoute from '../private-route/private-route';

import browserHistory from '../../browser-history';
import {MAX_MISTAKE_COUNT, AppRoute, AuthorizationStatus} from '../../const';

const App = (props) => {
  const {authorizationStatus} = props;

  if (authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return null;
  }

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.ROOT}
          render={(routeProps) => {
            const {history} = routeProps;
            return (
              <WelcomeScreen
                errorsCount={MAX_MISTAKE_COUNT}
                onPlayButtonClick={() => history.push(AppRoute.GAME)}
              />
            );
          }}>
        </Route>
        <Route
          exact
          path={AppRoute.LOGIN}
          render={(routeProps) => {
            const {history} = routeProps;
            return (
              <AuthScreen onReplayButtonClick={() => history.push(AppRoute.GAME)}/>
            );
          }}
        >
        </Route>
        <Route
          exact
          path={AppRoute.LOSE}
          render={(routeProps) => {
            const {history} = routeProps;
            return (
              <GameOverScreen
                onReplayButtonClick={() => history.push(AppRoute.GAME)}
              />
            );
          }}>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.RESULT}
          render={(routeProps) => {
            const {history} = routeProps;
            return (
              <WinScreen
                onReplayButtonClick={() => history.push(AppRoute.GAME)}
              />
            );
          }}>
        </PrivateRoute>
        <Route exact path={AppRoute.GAME}>
          <GameScreen errorsCount={MAX_MISTAKE_COUNT}/>
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.UNKNOWN, AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]),
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus
});

export default connect(mapStateToProps)(App);
