import React, { Component } from 'react';
import './App.css';

class Resume extends Component {
  render() {
    return (
      <div className='resume'>
        <button className='resumeBtn'>View My Resume ➜</button>
        <h3 className="resume">Want to contact me? Feel free to email me at <a href="mailto:hello@krissyconant.com">hello@krissyconant.com</a></h3>
      </div>
    );
  }
}

export default Resume;