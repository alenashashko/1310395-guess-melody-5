import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {GameType} from '../../const';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen';

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0
    };
  }

  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (step >= questions.length || !question) {
      return (
        <Redirect to='/' />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <ArtistQuestionScreen
            onAnswerClick={() => {
              this.setState((prevState) => {
                return {step: prevState.step + 1};
              });
            }}
            question={question}
          />
        );
      case GameType.GENRE:
        return (
          <GenreQuestionScreen
            onAnswerClick={() => {
              this.setState((prevState) => {
                return {step: prevState.step + 1};
              });
            }}
            question={question}
          />
        );
      default:
        return <Redirect to="/" />;
    }
  }
}

GameScreen.propTypes = {
  questions: PropTypes.array.isRequired
};

export default GameScreen;
