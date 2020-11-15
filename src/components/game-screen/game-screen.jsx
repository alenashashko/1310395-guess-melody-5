import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {GameType} from '../../const';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';
import withAudioPlayer from '../../hocs/with-audio-player';
import {ActionCreator} from '../../store/actions';

const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

const GameScreen = (props) => {
  const {questions, step, resetGame, onUserAnswer} = props;
  const question = questions[step];

  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to='/' />
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreenWrapped
          onAnswerClick={onUserAnswer}
          question={question}
        />
      );
    case GameType.GENRE:
      return (
        <GenreQuestionScreenWrapped
          onAnswerClick={onUserAnswer}
          question={question}
        />
      );
    default:
      return <Redirect to="/" />;
  }
};

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  step: state.step
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  }
});

export {GameScreen};
export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
