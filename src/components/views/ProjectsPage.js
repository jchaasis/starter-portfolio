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

    let allProj = {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
    }
    return(
      <div style={allProj}>
        {projects}
      </div>
    )
  }
}

export default ProjectsPage;
