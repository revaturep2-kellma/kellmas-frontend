import React from 'react';

class BlobStorageAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webAppName: '',
      appServicePlanName: '',
      storageAccountName: ''
    };
  }
  
  
  render() {
    return (
      <div className="container">
        <h1>App Servicee</h1>   
        <label for="storageAccountName">Storage Account Name</label><br/>
        <input 
          type="text" 
          value={this.state.storageAccountName}
          onChange={(e) => this.setState({storageAccountName: e.target.value})}
        />
      </div>
    );
  }
}
  
export default BlobStorageAccount;
  