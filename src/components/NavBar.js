
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
          <ul className='navis'>
            <li ><Link to="/home" className='naviLink'> Home </Link></li>
            <li ><Link to="/projects" className='naviLink'> Projects </Link></li>
            <li ><Link to="/resume" className='naviLink'> Resume </Link></li>
            <li ><Link to="/contact" className='naviLink'> Contact </Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar;
