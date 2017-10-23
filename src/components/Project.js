import React, { Component } from 'react';

import Starbar from './Starbar/Starbar';
//import React Router
import {Link} from 'react-router-dom';

class Project extends Component {


handleButtonClick(){
  window.location.href = this.props.github
}

  render(){


    return(
      <div className="projectContainer">

        <img src={this.props.image} alt="" />
        <div className="projectDetails">
        <h4>{this.props.title}</h4>
        <Link to={"/projects/"+this.props.id}> Check it out!</Link>
        </div>
      </div>
    )
  }

}

export default Project;
