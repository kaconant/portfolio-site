import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'; 
import './App.css';
import Header from './Header';
import Project from './Project';
import About from './About';
import Home from './Home'

class App extends Component {

  render() {
    return (
      <React.Fragment>
          <Header/>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/about' component={ About } />
          <Route path='/projects' component={ Project } />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
