import React, { Component } from 'react';

//import components
import Project from '../Project';


class ProjectsPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      projects: [
        {"image": "http://www.placecage.com/199/300",
          "title": "Project 1",
          "description": "For this project, I did this one thing and then after that I did this other thing. At the end, I combined them all into one large group. It was Insane!",
          "github": "https://github.com/jchaasis/Week-nine-project-playlist.git"
        }, {"image": "http://www.placecage.com/c/199/300",
          "title": "Project 2",
          "description": "For this project, I did this one thing and then after that I did this other thing. At the end, I combined them all into one large group. It was Insane!",
          "github": "http://www.imdb.com/name/nm0000115/"
        },{"image": "http://www.placecage.com/gif/200/299",
          "title": "Project 3",
          "description": "For this project, I did this one thing and then after that I did this other thing. At the end, I combined them all into one large group. It was Insane!",
          "github": "https://en.wikipedia.org/wiki/Nicolas_Cage"
        },{"image": "http://www.placecage.com/c/201/300",
          "title": "Project 4",
          "description": "For this project, I did this one thing and then after that I did this other thing. At the end, I combined them all into one large group. It was Insane!",
          "github": "https://www.rottentomatoes.com/celebrity/nicolas_cage/"
        },
      ]
    }
  }

  render(){
    const projects = this.state.projects.map(project => <Project image={project.image} title={project.title} description={project.description} github={project.github} />);

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
