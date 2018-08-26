import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Header extends Component {

  render() {
    return (
      <div className='headerContainer'>
        <Link to='/' className='link'>home</Link>
        <Link to='/about' className='link'>about</Link>
        <Link to='/projects' className='link'>projects</Link>
      </div>
    );
  }
}

export default Header;