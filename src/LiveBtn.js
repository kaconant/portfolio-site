import React, { Component } from 'react';
import './App.css';

class LiveBtn extends Component {
  render() {
    return (
      <div className="liveSiteBtn">
        <button id="button" className="liveBtn">Website</button>
      </div>
    );
  }
}

export default LiveBtn;