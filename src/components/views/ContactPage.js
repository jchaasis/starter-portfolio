import React, { Component } from 'react';


class ContactPage extends Component {

  render(){
    let listStyle = {
      listStyle: "none",
    }
    return(
      <section>
        <p> Contact Me: </p>
        <ul style={listStyle}>
          <li>Phone: 867-5309</li>
          <li>Email: me@coolplace.org</li>
          <li>Address: 123 Main Street, Charlotte NC, 12345</li>
        </ul>
      </section>
    )
  }
}

export default ContactPage;
