import React, {Component} from 'react';

//import Link from Router
import {Link} from 'react-router-dom';

import data from '../../data/data';
class DetailedProject extends Component {

  render(){
    const rp = this.props.match.params.id;
    // const project = data.map(project => project);
    console.log(data[rp]);
    return(
      <div>
        <img src={data[rp].image} alt=""/>
        <h4>{data[rp].title}</h4>
        <p> {data[rp].description} </p>
        <p> completed on: {data[rp].completionDate}</p>
        <a href={data[rp].github}> Visit the Repo </a>
        <p><Link to="/projects">Go back to all the projects</Link></p>
          <h2> </h2>

      </div>
    )
  }
}

export default DetailedProject;
