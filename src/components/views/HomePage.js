import React, { Component } from 'react';

//import pages
import ProjectsPage from './ProjectsPage';
import ResumePage from './ResumePage';
import ContactPage from './ContactPage';

class HomePage extends Component {

  render(){

    return(
      <div>
      <h3> Home </h3>

      <p>
      quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
      <ProjectsPage/>
      <ResumePage/>
      <ContactPage/>
      </div>
    )
  }
}

export default HomePage;
