import React, { Component } from 'react';
import './App.css';

class Project extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6 proj1'>
            <div className='proj p1'><img src='/img/myBlendology.png' alt='myBlendology' className='projImg'/><a className='projBtn' href='http://www.myblendology.com/' target="_blank" rel="noopener noreferrer">Website</a><a className='projBtn' href='https://github.com/kaconant/oils-api/' target="_blank" rel="noopener noreferrer">GitHub</a></div>
            <div className='proj p2'><img src='/img/coffeeApp.png' alt='coffeeApp' className='projImg'/><a className='projBtn' href='https://optimistic-tesla-3dca05.netlify.com/' target="_blank" rel="noopener noreferrer">Website</a><a className='projBtn' href='https://github.com/kaconant/coffeerun-starter/' target="_blank" rel="noopener noreferrer">GitHub</a></div>
          </div>
          <div className='col-6 proj1'>
            <div className='proj p3'><img src='/img/memoryGame.png' alt='memoryGame' className='projImg'/><a className='projBtn' href='https://vigilant-fermi-f504bc.netlify.com/' target="_blank" rel="noopener noreferrer">Website</a><a className='projBtn' href='https://github.com/kaconant/memory-game/' target="_blank" rel="noopener noreferrer">GitHub</a></div>
            <div className='proj p4'><img src='/img/slopeySeconds.png' alt='slopeySeconds' className='projImg'/><a className='projBtn' href='http://www.slopeyseconds.com/' target="_blank" rel="noopener noreferrer">Website</a><a className='projBtn' href='https://github.com/kaconant/slopey-seconds/' target="_blank" rel="noopener noreferrer">GitHub</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
