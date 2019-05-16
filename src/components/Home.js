import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  
  
  render() {
    return (
      <div className="homeCon">
        <div class="sidenav">
          <a href="#about">Virtual Machine</a>
          <a href="#services">App Services Plan</a>
          <a href="#contact">Web App</a>
          <a href="#clients">Blob Storage</a>
        </div>
      </div>
    );
  }
}
  
export default Home;
  