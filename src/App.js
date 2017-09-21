import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  // constructor(props){
  //   super(props);
  //
  //   // this.state = {
  //   //   projects: [
  //   //     {"image": "http://www.placecage.com/199/300",
  //   //       "title": "iTunes Search",
  //   //       "description": "For this project, I did this one thing and then after that I did this other thing. At the end, I combined them all into one large group. It was Insane!",
  //   //       "github": "https://github.com/jchaasis/Week-nine-project-playlist.git"
  //   //     }, {"image": "http://www.placecage.com/c/199/300",
  //   //       "title": "Gabble",
  //   //       "description": "For this project, I did this one thing and then after that I did this other thing. At the end, I combined them all into one large group. It was Insane!",
  //   //       "github": "http://www.imdb.com/name/nm0000115/"
  //   //     },{"image": "http://www.placecage.com/gif/200/299",
  //   //       "title": "Playing with Playlists",
  //   //       "description": "For this project, I did this one thing and then after that I did this other thing. At the end, I combined them all into one large group. It was Insane!",
  //   //       "github": "https://en.wikipedia.org/wiki/Nicolas_Cage"
  //   //     },{"image": "http://www.placecage.com/c/201/300",
  //   //       "title": "Star Wars Galactic Conquest",
  //   //       "description": "For this project, I did this one thing and then after that I did this other thing. At the end, I combined them all into one large group. It was Insane!",
  //   //       "github": "https://www.rottentomatoes.com/celebrity/nicolas_cage/"
  //   //     },
  //   //   ]
  //   // }
  // }
  render() {
    //
    // const projects = this.state.projects.map((project, index) => <Project key={index} image={project.image} title={project.title} description={project.description} github={project.github} />);

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
          <Route path="/projects/:id" component={DetailedProject} />
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
