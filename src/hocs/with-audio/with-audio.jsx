import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';

const withAudio = (Component) => {
  class WithAudio extends PureComponent {
    constructor(props) {
      super(props);

      this._audioRef = createRef();

      this.state = {
        isLoading: true
      };
    }

    componentDidMount() {
      const audio = this._audioRef.current;

      audio.src = this.props.src;

      audio.oncanplaythrough = () => this.setState({
        isLoading: false
      });
    }

    componentWillUnmount() {
      const audio = this._audioRef.current;

      audio.oncanplaythrough = null;
    }

    componentDidUpdate() {
      const audio = this._audioRef.current;
      const {isPlaying} = this.props;

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    render() {
      const {isLoading} = this.state;

      return (
        <Component
          {...this.props}
          isLoading={isLoading}
        >
          <audio ref={this._audioRef}></audio>
        </Component>
      );
    }
  }

  WithAudio.propTypes = {
    isPlaying: PropTypes.bool.isRequired,
    onPlayButtonClick: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired
  };

  return WithAudio;
};

export default withAudio;
