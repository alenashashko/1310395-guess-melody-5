import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const';
import AudioPlayer from '../audio-player/audio-player';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: 0,
      answers: [false, false, false, false]
    };
  }

  render() {
    const {onAnswerClick, question} = this.props;
    const {answers: userAnswers, activePlayer} = this.state;
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

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks"
            onSubmit={(evt) => {
              evt.preventDefault();
              onAnswerClick(question, this.state.answers);
            }}
          >

            {answers.map((answer, i) => {
              return (
                <div key={`${i}-${answer.src}`} className="track">
                  <AudioPlayer
                    isPlaying={i === activePlayer}
                    src={answer.src}
                    onPlayButtonClick={() => {
                      this.setState({
                        activePlayer: activePlayer === i ? -1 : i
                      });
                    }}
                  />
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer"
                      value={`answer-${i + 1}`}
                      id={`answer-${i + 1}`}
                      checked={userAnswers[i]}
                      onChange={(evt) => {
                        const value = evt.target.checked;

                        this.setState({
                          answers: [...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)]
                        });
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
  }
}

GenreQuestionScreen.propTypes = {
  onAnswerClick: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
};

export default GenreQuestionScreen;
