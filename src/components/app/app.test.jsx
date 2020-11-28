import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app';
import {AuthorizationStatus} from '../../const';

describe(`Should App render correctly`, () => {
  it(`with UNKNOWN authorization status`, () => {
    const tree = renderer
      .create(<App
        authorizationStatus={AuthorizationStatus.UNKNOWN}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with AUTH authorization status`, () => {
    const tree = renderer
      .create(<App
        authorizationStatus={AuthorizationStatus.AUTH}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`with NO_AUTH authorization status`, () => {
    const tree = renderer
      .create(<App
        authorizationStatus={AuthorizationStatus.NO_AUTH}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
