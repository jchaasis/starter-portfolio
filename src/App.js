import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';

//import React Router
import {Route, Switch} from 'react-router-dom';

//import pages
import HomePage from './components/views/HomePage';
import ProjectsPage from './components/views/ProjectsPage';
import ResumePage from './components/views/ResumePage';
import ContactPage from './components/views/ContactPage';
import DetailedProject from './components/views/DetailedProject';

//import components
import NavBar from './components/NavBar';

class App extends Component {

  render() {


    return (
      <div className="App">
        <div className="App-header">
        <h1 className='pageHeader'> Hacksis </h1>
            <NavBar className='navBar'/>
        </div>

        <main>
        <Switch>

          <Route path="/projects/:id" component={DetailedProject} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
        </main>
      </div>
    );
  }
}

export default App;
