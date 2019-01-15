import React, { Component } from 'react';
import './App.css';

class DrumAudio extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.url = this.props.url;
    this.audio = new Audio(this.url);
}

  play = () => {
    this.audio.play();
  }

  render() {
  return (
    <div>
      <button onClick={this.play}>Play</button>
      <audio className="clip" src={this.props.value + ".ogg"} type="audio/ogg"></audio>
    </div>
    );
  }

}

export default DrumAudio;
