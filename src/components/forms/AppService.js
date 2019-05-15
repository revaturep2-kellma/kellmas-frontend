import React from 'react';

class AppService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: '',
      ServicePlanName: ''
    };
  }
  
  
  render() {
    return (
      <div className="homeCon">
        <h1>App Servicee</h1>   
        <label for="Name">Name</label><br/>
        <input 
          type="text" 
          value={this.state.servicePlanName}
          onChange={(e) => this.setState({servicePlanName: e.target.value})}
        />
      </div>
    );
  }
}
  
export default AppService;
  