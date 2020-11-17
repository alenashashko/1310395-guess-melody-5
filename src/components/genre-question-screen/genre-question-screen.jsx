import React from 'react';
import PropTypes from 'prop-types';

import genreQuestionProp from './genre-question.prop';

const GenreQuestionScreen = (props) => {
  const {question, renderPlayer, children, userAnswers, onChange, onAnswer} = props;
  const {genre, answers} = question;

  return (
    <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        {children}
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >

          {answers.map((answer, i) => {
            return (
              <div key={`${i}-${answer.src}`} className="track">
                {renderPlayer(answer.src, i)}
                <div className="game__answer">
                  <input className="game__input visually-hidden" type="checkbox" name="answer"
                    value={`answer-${i + 1}`}
                    id={`answer-${i + 1}`}
                    checked={userAnswers[i]}
                    onChange={(evt) => {
                      const value = evt.target.checked;
                      onChange(i, value);
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i + 1}`}>Отметить</label>
                </div>
              </div>
            );
          })}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>
  );
};

GenreQuestionScreen.propTypes = {
  question: genreQuestionProp,
  renderPlayer: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onChange: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default GenreQuestionScreen;
