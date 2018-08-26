import React, { Component } from 'react';
import './App.css';
import { Animated } from "react-animated-css";

class Home extends Component {
  render() {
    return (
      <div className='homePage'>
        <h1 className='titleName'>Krissy Conant</h1>
        <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
          <h3 className='descName'>Full Stack Web Developer</h3>
          <h3 className='descName'>Digital Marketer</h3>
        </Animated>
      </div>
    );
  }
}

export default Home;