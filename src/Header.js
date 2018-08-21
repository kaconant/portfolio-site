import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className='headerContainer'>
        <div className='rowHeader'>
          <div className='header'>
            <a href='/'><h1 className='titleName'>Krissy Conant</h1></a>
          </div>
          <div className='aboutSection'>
            <p className='about'>FULL STACK WEB DEVELOPER</p>
            <p className='about'>DIGITAL MARKETER</p>
            <Link to='/projects' className='link'>projects</Link>
            <Link to='/about' className='link'>about</Link>
            <Link to='resume' className='link'>resume</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;