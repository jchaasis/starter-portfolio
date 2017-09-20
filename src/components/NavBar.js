
import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class NavBar extends Component {

  render(){

    let navis = {
      listStyle:"none",
      display: "flex",
      justifyContent: "center"
    }

    let naviLink = {
      margin: "10px"
    }


    return(
      <div>
        <nav>
          <ul style={navis}>
            <li style={naviLink}><Link to="/home"> Home </Link></li>
            <li style={naviLink}><Link to="/projects"> Projects </Link></li>
            <li style={naviLink}><Link to="/resume"> Resume </Link></li>
            <li style={naviLink}><Link to="/contact"> Contact </Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
