import React from 'react';

class AppService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      servicePlanName: '',
      webAppName: ''
    };
  }
  
  
  render() {
    return (
      <div className="homeCon">
        <h1>App Servicee</h1>   
        <label for="Web App Name">Web App Name</label><br/>
        <input 
          type="text" 
          value={this.state.webAppName}
          onChange={(e) => this.setState({webAppName: e.target.value})}
        />
      </div>
    );
  }
}
  
export default AppService;
  