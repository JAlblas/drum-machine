import React, { Component } from 'react';
import './App.css';
import DrumDisplay from "./DrumDisplay.js";
import DrumButtons from "./DrumButtons.js";

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.playAudio = this.playAudio.bind(this);
  }

  playAudio(value) {
    console.log("TING TING" + value);
  }

  render() {
    return (
    <div id="drum-machine">
      <DrumDisplay/>
      <DrumButtons playAudio={this.playAudio}/>
    </div>
    );
  }
}

export default DrumMachine;
