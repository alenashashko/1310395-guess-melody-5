import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

const noop = () => {};

it(`Should GenreQuestionScreen render correctly`, () => {
  const tree = renderer
  .create(
      <GenreQuestionScreen
        question={question}
        onAnswer={noop}
        renderPlayer={noop}
        onChange={noop}
        userAnswers={[false, false, false, false]}
      >
        <React.Fragment />
      </GenreQuestionScreen>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
