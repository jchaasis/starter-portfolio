import React, { Component } from 'react';

//import components
import Project from '../Project';
import data from '../../data/data';


class ProjectsPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: data
    }
  }


  render(){

    const projects = this.state.projects.map((project, index) => <Project key={index} id={index} image={project.image} title={project.title} description={project.description} github={project.github} />);

    return(
      <div className="projects">
        {projects}
      </div>
    )
  }
}

export default ProjectsPage;
