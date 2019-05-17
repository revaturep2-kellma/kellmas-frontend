import React from 'react';

class AppServicePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServicePlanName: ''
    };
  }
  
  
  render() {
    return (
      <div className="container">
        <h1>App Servicee</h1>   
        <label for="servicePlanName">Serive Plan Name</label><br/>
        <input 
          type="text" 
          value={this.state.servicePlanName}
          onChange={(e) => this.setState({servicePlanName: e.target.value})}
        />
      </div>
    );
  }
}
  
export default AppServicePlan;
  