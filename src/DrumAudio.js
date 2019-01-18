import React, { Component } from 'react';
import './App.css';

class DrumAudio extends Component {

  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.play = this.play.bind(this);
  }

  play = () => {
    //this.audio.current.play();
    //this.props.displaySound(this.props.id);
    this.props.playSound(this.props.id, this.audio.current);
  }

  render() {
  return (
    <div className="drum-pad" id={"drum-" + this.props.id} onClick={this.play}>
      <button>{this.props.id}</button>
      <audio src={this.props.url} ref={this.audio} className="clip" id={this.props.id}></audio>
    </div>
    );
  }

}

export default DrumAudio;
