import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionItem from './genre-question-item';

const answer = {
  src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  genre: `rock`,
};

const noop = () => {};

it(`Should GenreQuestionItem render correctly`, () => {
  const tree = renderer
    .create(<GenreQuestionItem
      renderPlayer={noop}
      onChange={noop}
      answer={answer}
      index={0}
      userAnswer={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
