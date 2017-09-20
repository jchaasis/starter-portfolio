import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import React Router
import {Route, Switch} from 'react-router-dom';

//import pages
import HomePage from './components/views/HomePage.js';
import ProjectsPage from './components/views/ProjectsPage.js';
import ResumePage from './components/views/ResumePage.js';
import ContactPage from './components/views/ContactPage.js';

//import components
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to my portfolio</h2>
        </div>
        <NavBar />
        <main>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
