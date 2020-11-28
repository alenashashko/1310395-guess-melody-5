import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen';

const noop = () => {};

it(`Should WelcomeScreen render correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorsCount={3}
      onPlayButtonClick={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
