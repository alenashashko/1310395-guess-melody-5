import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const';
import AudioPlayer from '../audio-player/audio-player';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true
    };
  }

  render() {
    const {onAnswerClick, question} = this.props;
    const {isPlaying} = this.state;
    const {song, answers} = question;

    return (
      <section className="game game--artist">
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
            <div className="wrong" />
            <div className="wrong" />
            <div className="wrong" />
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <AudioPlayer
                isPlaying={isPlaying}
                src={song.src}
                onPlayButtonClick = {() => this.setState({isPlaying: !isPlaying})}
              />
            </div>
          </div>

          <form className="game__artist">
            {answers.map((answer, i) => {
              return (
                <div key={answer.artist} className="artist">
                  <input className="artist__input visually-hidden" type="radio" name="answer"
                    value={`artist-${i + 1}`}
                    id={`artist-${i + 1}`}
                    onChange={(evt) => {
                      evt.preventDefault(); // ?
                      onAnswerClick(question, answer);
                    }}
                  />
                  <label className="artist__name" htmlFor={`artist-${i + 1}`}>
                    <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                    {answer.artist}
                  </label>
                </div>
              );
            })}

          </form>
        </section>
      </section>
    );
  }
}

ArtistQuestionScreen.propTypes = {
  onAnswerClick: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })).isRequired,
  }).isRequired
};

export default ArtistQuestionScreen;
