import PropTypes from 'prop-types';
import {GameType} from '../../const';

export default PropTypes.shape({
  type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  song: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    artist: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  })).isRequired
}).isRequired;

