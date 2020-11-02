import PropTypes from 'prop-types';
import {GameType} from '../../const';

export default PropTypes.shape({
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  genre: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  })).isRequired
}).isRequired;
