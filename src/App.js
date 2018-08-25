import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import './App.css';
import Header from './Header';
import Project from './Project';
import About from './About';
import Resume from './Resume';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='header'>
          <Header/>
        </div>
        <Switch>
          <Route path='/projects' component={ Project } />
          <Route path='/about' component={ About } />
          <Route path='/resume' component={ Resume } />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
