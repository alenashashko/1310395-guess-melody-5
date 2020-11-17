import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen';
import AuthScreen from '../auth-screen/auth-screen';
import GameScreen from '../game-screen/game-screen';
import GameOverScreen from '../game-over-screen/game-over-screen';
import WinScreen from '../win-screen/win-screen';
import {MAX_MISTAKE_COUNT} from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path='/'
          render={(routeProps) => {
            const {history} = routeProps;
            return (
              <WelcomeScreen
                errorsCount={MAX_MISTAKE_COUNT}
                onPlayButtonClick={() => history.push(`/game`)}
              />
            );
          }}>
        </Route>
        <Route exact path='/login'>
          <AuthScreen />
        </Route>
        <Route
          exact
          path='/lose'
          render={(routeProps) => {
            const {history} = routeProps;
            return (
              <GameOverScreen
                onReplayButtonClick={() => history.push(`/game`)}
              />
            );
          }}>
        </Route>
        <Route
          exact
          path='/result'
          render={(routeProps) => {
            const {history} = routeProps;
            return (
              <WinScreen
                onReplayButtonClick={() => history.push(`/game`)}
              />
            );
          }}>
        </Route>
        <Route exact path='/game'>
          <GameScreen errorsCount={MAX_MISTAKE_COUNT}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
