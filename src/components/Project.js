import React, { Component } from 'react';

import Starbar from './Starbar/Starbar';
//import React Router
import {Link} from 'react-router-dom';

class Project extends Component {


handleButtonClick(){
  window.location.href = this.props.github
}

  render(){

    let projectContainer = {
      width: "250px",
    }

    return(
      <div style={projectContainer}>
        <img src={this.props.image} alt="" />
        <h4>{this.props.title}</h4>
        <Link to={"/projects/"+this.props.id}> Check it out!</Link>

        {/*<p> {this.props.description} </p>
        <button onClick={() => this.handleButtonClick()}> Check it Out! </button>*/}
        <Starbar />

      </div>
    )
  }

}

export default Project;
