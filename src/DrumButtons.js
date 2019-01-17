import React, { Component } from 'react';
import './App.css';
import DrumAudio from "./DrumAudio.js";
import Q from './audio/Q.wav';
import W from './audio/W.wav';
import E from './audio/E.wav';
import A from './audio/A.wav';
import S from './audio/S.wav';
import D from './audio/D.wav';
import Z from './audio/Z.wav';
import X from './audio/X.wav';
import C from './audio/C.wav';

class DrumButtons extends Component {

  render() {
    let letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    let samples = [Q,W,E,A,S,D,Z,X,C];
    return (
      <div id="drum-pads">
        {letters.map((value, index) => {
          return <DrumAudio id={value} key={index} url={samples[index]} />
        })}
      </div>
    )
  }
}

export default DrumButtons;
