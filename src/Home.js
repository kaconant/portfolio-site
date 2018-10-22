import React, { Component } from 'react';
import './App.css';
import { Animated } from "react-animated-css";

class Home extends Component {
  render() {
    return (
      <div className='homePage'>
        <div className='middle'>
          <h1 className='titleName'>Krissy Conant</h1>
          <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <h3 className='descName'>Full Stack Web Developer</h3>
            <h3 className='descName'>Digital Marketer</h3>
          </Animated>
          <div className='skillsTotal'>
            <div className='skillsWrap'>
              <div className='skillsPhysical'>
                <p className='skillsTitle'>Front-End Skills</p>
                <p className='skillsBio'>HTML, CSS, Bootstrap, Flexbox, jQuery, JavaScript, React</p>
              </div>
            </div>
            <div className='skillsWrap'>
              <div className='skillsPhysical'>
                <p className='skillsTitle'>Back-End Skills</p>
                <p className='skillsBio'>Node.js, Express, PostgresSQL, Python</p>
              </div>
            </div>
            <div className='skillsWrap'>
              <div className='skillsPhysical'>
                <p className='skillsTitle'>Dev-Ops Skills</p>
                <p className='skillsBio'>Git, Heroku, AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;