import React, { Component } from 'react';
import './App.css';
import GithubBtn from './GithubBtn';
import LiveBtn from './LiveBtn';

class Projects extends Component {
  render() {
    return (
      <div>
        <Project/>
        <GithubBtn/>
        <LiveBtn/>
      </div>
    );
  }
}

export default Projects;


