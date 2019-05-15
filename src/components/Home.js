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
        <h1>Kellma Home</h1>   
        
        <button onClick={() => this.props.history.push('/')}>Back to Login</button>
      </div>
    );
  }
}
  
export default Home;
  