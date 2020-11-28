import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionItem = (props) => {
  const {renderPlayer, onChange, answer, index, userAnswer} = props;

  return (
    <div className="track">
      {renderPlayer(answer.src, index)}
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer"
          value={`answer-${index}`}
          id={`answer-${index}`}
          checked={userAnswer}
          onChange={(evt) => {
            const value = evt.target.checked;
            onChange(index, value);
          }}
        />
        <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
      </div>
    </div>
  );
};

GenreQuestionItem.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  answer: PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  userAnswer: PropTypes.bool.isRequired
};

export default React.memo(GenreQuestionItem);
