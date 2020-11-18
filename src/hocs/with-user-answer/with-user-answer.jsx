import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {GameType} from '../../const';

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false)
      };

      this._handleChange = this._handleChange.bind(this);
      this._handleAnswer = this._handleAnswer.bind(this);
    }

    _handleChange(i, value) {
      const {answers} = this.state;

      const userAnswers = answers.slice(0);
      userAnswers[i] = value;

      this.setState({
        answers: userAnswers
      });
    }

    _handleAnswer() {
      const {onAnswerClick, question} = this.props;
      const {answers} = this.state;

      onAnswerClick(question, answers);
    }

    render() {
      const {answers} = this.state;

      return (
        <Component
          {...this.props}
          userAnswers={answers}
          onChange={this._handleChange}
          onAnswer={this._handleAnswer}
        />
      );
    }
  }

  WithUserAnswer.propTypes = {
    question: PropTypes.shape({
      type: PropTypes.oneOf([GameType.GENRE]).isRequired,
      genre: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired
      })).isRequired
    }).isRequired,
    onAnswerClick: PropTypes.func.isRequired
  };

  return WithUserAnswer;
};

export default withUserAnswer;
