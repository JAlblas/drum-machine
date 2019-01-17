import React, { Component } from 'react';
import './App.css';

class DrumAudio extends Component {

  constructor(props) {
    super(props);
    this.audio = React.createRef();
    this.play = this.play.bind(this);
  }

  componentDidMount() {
    console.log("mount");
  }

  play = () => {
    this.audio.current.play();
  }

  render() {
  return (
    <div className="drum-pad" id={this.props.id} onClick={this.play}>
      <button>{this.props.id}</button>
      <audio src={this.props.url} ref={this.audio} className="clip" id={this.props.id}></audio>
    </div>
    );
  }

}

export default DrumAudio;
