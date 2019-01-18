import React, { Component } from 'react';
import './App.css';

class DrumDisplay extends Component {
  render() {
    return (
      <div id="display">
        <p>{this.props.soundToDisplay}</p>
      </div>
    );
  }
}

export default DrumDisplay;
