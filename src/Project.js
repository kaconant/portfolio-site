import React, { Component } from 'react';
import './App.css';

class Project extends Component {

  constructor() {
    super();
    this.state = { 
      isMouseInsideProj1: false,
      isMouseInsideProj2: false,
      isMouseInsideProj3: false,
      isMouseInsideProj4: false
    };
  }

  mouseEnter1 = () => {
    this.setState({ 
      isMouseInsideProj1: true,
    });
  }

  mouseLeave1 = () => {
    this.setState({ 
      isMouseInsideProj1: false,
    });
  }

  mouseEnter2 = () => {
    this.setState({ 
      isMouseInsideProj2: true,
    });
  }

  mouseLeave2 = () => {
    this.setState({ 
      isMouseInsideProj2: false,
    });
  }

  mouseEnter3 = () => {
    this.setState({ 
      isMouseInsideProj3: true,
    });
  }

  mouseLeave3 = () => {
    this.setState({ 
      isMouseInsideProj3: false,
    });
  }

  mouseEnter4 = () => {
    this.setState({ 
      isMouseInsideProj4: true,
    });
  }

  mouseLeave4 = () => {
    this.setState({ 
      isMouseInsideProj4: false,
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div onMouseEnter={this.mouseEnter1} onMouseLeave={this.mouseLeave1} className='card proj'>
            <img className='card-img projImg' src='/img/myBlendology.png' alt='myBlendology' />
            <div className='card-img-overlay'>
              {this.state.isMouseInsideProj1 ? <a className='projBtn' href='http://www.myblendology.com/' target="_blank" rel="noopener noreferrer">Website</a> : null}
              {this.state.isMouseInsideProj1 ? <a className='projBtn' href='https://github.com/kaconant/oils-api/' target="_blank" rel="noopener noreferrer">GitHub</a> : null}
            </div>
          </div>
          <div onMouseEnter={this.mouseEnter2} onMouseLeave={this.mouseLeave2} className='card proj'>
            <img className='card-img projImg' src='/img/coffeeApp.png' alt='coffeeApp' />
            <div className='card-img-overlay'>
              {this.state.isMouseInsideProj2 ? <a className='projBtn' href='https://optimistic-tesla-3dca05.netlify.com/' target="_blank" rel="noopener noreferrer">Website</a> : null}
              {this.state.isMouseInsideProj2 ? <a className='projBtn' href='https://github.com/kaconant/coffeerun-starter/' target="_blank" rel="noopener noreferrer">GitHub</a> : null}
            </div>
          </div>
          <div onMouseEnter={this.mouseEnter3} onMouseLeave={this.mouseLeave3} className='card proj'>
            <img className='card-img projImg' src='/img/memoryGame.png' alt='memoryGame' />
            <div className='card-img-overlay'>
              {this.state.isMouseInsideProj3 ? <a className='projBtn' href='https://vigilant-fermi-f504bc.netlify.com/' target="_blank" rel="noopener noreferrer">Website</a> : null}
              {this.state.isMouseInsideProj3 ? <a className='projBtn' href='https://github.com/kaconant/memory-game/' target="_blank" rel="noopener noreferrer">GitHub</a> : null}
            </div>
          </div>
          <div onMouseEnter={this.mouseEnter4} onMouseLeave={this.mouseLeave4} className='card proj'>
            <img className='card-img projImg' src='/img/slopeySeconds.png' alt='slopeySeconds' />
            <div className='card-img-overlay'>
              {this.state.isMouseInsideProj4 ? <a className='projBtn' href='http://www.slopeyseconds.com/' target="_blank" rel="noopener noreferrer">Website</a> : null}
              {this.state.isMouseInsideProj4 ? <a className='projBtn' href='https://github.com/kaconant/slopey-seconds/' target="_blank" rel="noopener noreferrer">GitHub</a> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
