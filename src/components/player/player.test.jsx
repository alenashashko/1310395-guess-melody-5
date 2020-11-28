import React from 'react';
import renderer from 'react-test-renderer';

import Player from './player';

const noop = () => {};

it(`Should Player render correctly`, () => {
  const tree = renderer
    .create(<Player
      isLoading={true}
      isPlaying={false}
      onPlayButtonClick={noop}
    >
      <audio />
    </Player>, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
