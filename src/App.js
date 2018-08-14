import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="header">
            <h1 className="titleName">Krissy Conant</h1>
          </div>
          <div className="aboutSection">
              <p className="about">FULL STACK DEVELOPER</p>
              <p className="about">DIGITAL MARKETER</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="row projects">
              <div className="column proj1">
                <div className="proj p1"> <img src="/img/myBlend.png" className="projImg"/></div>
              </div>
              <div className="column proj2">
                <div className="proj p2"> <img src="/img/memoryGame.png" className="projImg"/></div>
              </div>
              <div className="column proj3">
                <div className="proj p3"> <img src="/img/sceneIt.png" className="projImg"/></div>
              </div>
              <div className="column proj4">
                <div className="proj p4"> <img src="/img/basicCoffeeApp.png" className="projImg"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
