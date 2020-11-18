import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/actions';

const WinScreen = (props) => {
  const {onReplayButtonClick, resetGame, questionsCount, mistakesCount} = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {questionsCount} вопросов и совершили {mistakesCount} ошибки</p>
      <button
        onClick={() => {
          resetGame();
          onReplayButtonClick();
        }}
        className="replay"
        type="button">
          Сыграть ещё раз
      </button>
    </section>
  );
};

WinScreen.propTypes = {
  onReplayButtonClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  questionsCount: PropTypes.number.isRequired,
  mistakesCount: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  questionsCount: state.step,
  mistakesCount: state.mistakes
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  }
});

export {WinScreen};
export default connect(mapStateToProps, mapDispatchToProps)(WinScreen);
