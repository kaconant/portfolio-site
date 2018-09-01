import React, { Component } from 'react';
import './App.css';

class Project extends Component {

  constructor() {
    super();
    this.state = { 
      isMouseInsideProj1: false,
      isMouseInsideProj2: false,
      isMouseInsideProj3: false,
      isMouseInsideProj4: false,
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
              <h3 className='projTitle'>myBlendology</h3>
              <h4 className='projDesc'>myBlendology is a web application comprised of a PERN stack (Postgres, Express, React, and Node.js) that allows you to create diffuser essential oil blends based off of a user's choice of mood.</h4>
              <img className='card-img projImg' src='/img/myBlendology.png' alt='myBlendology' />
              <div className='card-img-overlay'>
                {this.state.isMouseInsideProj1 ? <a className='projBtn' href='http://www.myblendology.com/' target="_blank" rel="noopener noreferrer">Website ➜</a> : null}
                {this.state.isMouseInsideProj1 ? <a className='projBtn' href='https://github.com/kaconant/oils-api/' target="_blank" rel="noopener noreferrer">GitHub ➜</a> : null}
              </div>
            </div>
            <div onMouseEnter={this.mouseEnter2} onMouseLeave={this.mouseLeave2} className='card proj'>
              <h3 className='projTitle'>CoffeeStarter</h3>
              <h4 className='projDesc'>Coffee Run is a basic application that uses HTML / CSS / JavaScript / jQuery to produce coffee orders. This project was to focus on using jQuery to build forms and produce results as well as manipulate local storage.</h4>
              <img className='card-img projImg' src='/img/coffeeApp.png' alt='coffeeApp' />
              <div className='card-img-overlay'>
                {this.state.isMouseInsideProj2 ? <a className='projBtn' href='https://optimistic-tesla-3dca05.netlify.com/' target="_blank" rel="noopener noreferrer">Website ➜</a> : null}
                {this.state.isMouseInsideProj2 ? <a className='projBtn' href='https://github.com/kaconant/coffeerun-starter/' target="_blank" rel="noopener noreferrer">GitHub ➜</a> : null}
              </div>
            </div>
            <div onMouseEnter={this.mouseEnter3} onMouseLeave={this.mouseLeave3} className='card proj'>
              <h3 className='projTitle'>Memory Game</h3>
              <h4 className='projDesc'>This Memory Game was created with the Create-React-App and was an exercise to use logic to create a matching card game as well as practice routing, switching, and linking.</h4>
              <img className='card-img projImg' src='/img/memoryGame.png' alt='memoryGame' />
              <div className='card-img-overlay'>
                {this.state.isMouseInsideProj3 ? <a className='projBtn' href='https://vigilant-fermi-f504bc.netlify.com/' target="_blank" rel="noopener noreferrer">Website ➜</a> : null}
                {this.state.isMouseInsideProj3 ? <a className='projBtn' href='https://github.com/kaconant/memory-game/' target="_blank" rel="noopener noreferrer">GitHub ➜</a> : null}
              </div>
            </div>
            <div onMouseEnter={this.mouseEnter4} onMouseLeave={this.mouseLeave4} className='card proj'>
              <h3 className='projTitle'>Slopey Seconds</h3>
              <h4 className='projDesc'>Slopey Seconds combines the Google Maps API, Powder Project API, and Open Weather API to search for specific ski / snowboarding trail names and allow users to review their public rating, trail length, elevation, and weather.</h4>
              <img className='card-img projImg' src='/img/slopeySeconds.png' alt='slopeySeconds' />
              <div className='card-img-overlay'>
                {this.state.isMouseInsideProj4 ? <a className='projBtn' href='http://www.slopeyseconds.com/' target="_blank" rel="noopener noreferrer">Website ➜</a> : null}
                {this.state.isMouseInsideProj4 ? <a className='projBtn' href='https://github.com/kaconant/slopey-seconds/' target="_blank" rel="noopener noreferrer">GitHub ➜</a> : null}
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Project;
