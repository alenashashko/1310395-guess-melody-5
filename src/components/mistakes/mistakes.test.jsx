import React from 'react';
import renderer from 'react-test-renderer';

import Mistakes from './mistakes';

describe(`Should Mistakes render correctly`, () => {
  it(`With zero count`, () => {
    const tree = renderer
      .create(<Mistakes
        count={0}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With three count`, () => {
    const tree = renderer
      .create(<Mistakes
        count={3}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
