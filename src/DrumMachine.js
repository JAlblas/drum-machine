import React, { Component } from 'react';
import './App.css';
import DrumDisplay from "./DrumDisplay.js";
import DrumButtons from "./DrumButtons.js";

class DrumMachine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastPlayed: ""
    };

    this.playSound = this.playSound.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyPress, false);
    console.log(this);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPress, false);
  }

  keyPress(event) {
    var audio;
    switch(event.keyCode) {
      case 81:
        audio = document.getElementById("Q");
        this.playSound("Q", audio)
        break;
      case 87:
        audio = document.getElementById("W");
        this.playSound("W", audio)
        break;
      case 69:
        audio = document.getElementById("E");
        this.playSound("E", audio)
        break;
      case 65:
        audio = document.getElementById("A");
        this.playSound("A", audio)
        break;
      case 83:
        audio = document.getElementById("S");
        this.playSound("S", audio)
        break;
      case 68:
        audio = document.getElementById("D");
        this.playSound("D", audio)
        break;
      case 90:
        audio = document.getElementById("Z");
        this.playSound("Z", audio)
        break;
      case 88:
        audio = document.getElementById("X");
        this.playSound("X", audio)
        break;
      case 67:
        audio = document.getElementById("C");
        this.playSound("C", audio)
        break;
      default:
        // code block
    }
  }

  playSound(value, audio) {
    console.log("Playing sound!")
    audio.play();
    this.setState({lastPlayed: value});
  }

  render() {
    return (
    <div id="drum-machine">
      <DrumDisplay soundToDisplay={this.state.lastPlayed} />
      <DrumButtons playAudio={this.playAudio} playSound={this.playSound}/>
    </div>
    );
  }
}

export default DrumMachine;
