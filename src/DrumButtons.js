import React, { Component } from 'react';
import './App.css';
import DrumAudio from "./DrumAudio.js";

class DrumButtons extends Component {

  render() {
    let letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    return (
      <div id="drum-pads">
        {letters.map((value, index) => {
          return <DrumAudio className="drum-pad" id={value} key={index} onClick={()=>this.props.playAudio(value)} />
        })}
      </div>
    )
  }
}

export default DrumButtons;
