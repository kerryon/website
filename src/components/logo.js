import React, { Component } from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';
import { Lottie } from '@crello/react-lottie';
import animationData from '../img/lottie.json';

class LottieAnim extends Component {
  constructor() {
    super();

    this.state = {
      isStopped: true,
      speed: 1,
      direction: -1,
      playingState: 'stopped',
    };
  }

  render() {
    const { isStopped, playingState, direction, speed } = this.state;

    const clickHandler = () => {
      if (isStopped === true) {
        this.setState({
          playingState: 'playing',
          isStopped: false,
        });
      } else {
        this.setState({
          playingState: 'playing',
          isStopped: true,
        });
      }
      this.setState({ direction: direction * -1 });
    };

    return (
      <div
        className='logo highlightCursor'
        onMouseEnter={clickHandler}
        onMouseLeave={clickHandler}
        onClick={() => this.props.toggleComponent('showHideInfo')}>
        <Lottie
          playingState={playingState}
          direction={direction}
          speed={speed}
          config={{
            animationData: animationData,
            loop: false,
            autoplay: false,
          }}
          height={70}
          width={210}
        />
      </div>
    );
  }
}

export default LottieAnim;
