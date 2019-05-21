import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';
import Locations from  '../Location';

class WebApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      webAppName: '',
      webAppGitRepo: '',
      servicePlanName: '', 
      location:'',
      webAppType: '',
      openWebApp: false
    };
  }

  handleLocation = (location) => {
    this.setState({location: location});
  }
  
  //WebApp handlers
  handleOpenWebApp = () => {
    this.setState({ openWebApp: true });
  };

  handleCloseWebApp = () => {
    this.setState({ openWebApp: false });
  };

  submit(groupName, webAppName, webAppGitRepo, servicePlanName, location, webAppType) {

    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/newWebApp`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupName: groupName,
        webAppName: webAppName,
        webAppGitRepo: webAppGitRepo,
        servicePlanName: servicePlanName,
        location: location,
        webAppType: webAppType
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseWebApp();

        }else{
          alert(responseJson.error);
          console.log('THERE WAS AN ERROR', responseJson.error);
        }
      })
      .catch((err) => {
        console.log('caught error in catch of submt');
        alert(err);
      /* do something if there was an error with fetching */
      });
  }
  
  render() {
    let nodeType = [
      "",
      "NODE|lts",
      "NODE|4.4",
      "NODE|4.5",
      "NODE|4.8",
      "NODE|6.2",
      "NODE|6.6",
      "NODE|6.9",
      "NODE|6.10",
      "NODE|6.11",
      "NODE|8.0",
      "NODE|8.1",
      "NODE|8.2",
      "NODE|8.8",
      "NODE|8.9",
      "NODE|8.11",
      "NODE|8.12",
      "NODE|9.4",
      "NODE|10.1",
      "NODE|10.10",
      "NODE|10.12",
      "NODE|10.14",
    ]; 

    let elements = nodeType.map(node => {
      return <option key={node} value={node}>{node}</option>;
    });
    console.log(this.state.location);
    return (
      <div className="container">
        <Button onClick={this.handleOpenWebApp}>Open Web App</Button>
        <Modal
          aria-labelledby="WebApp-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openWebApp}
          onClose={this.handleCloseWebApp}
        >
          <div className="paperCard1">
            <h1>Create Web App</h1>

            <TextField
              type="text"
              variant="outlined"
              label="Web App Name"
              value={this.state.webAppName}
              onChange={(e) => this.setState({webAppName: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Git Repo URL"
              value={this.state.webAppGitRepo}
              onChange={(e) => this.setState({webAppGitRepo: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Service Plan Name"
              value={this.state.servicePlanName}
              onChange={(e) => this.setState({servicePlanName: e.target.value})}
            /><br/>
            <Locations onChange={this.handleLocation} /><br/>
            <Select
              native
              value={this.state.webAppType}
              onChange={(e) => this.setState({webAppType: e.target.value})}
              input={
                <OutlinedInput
                  name="Location"
                  labelWidth={this.state.labelWidth}
                  id="outlined-location-native-simple"
                />
              }
            >
              {elements}
            </Select><br/>

            <button className="regBut" onClick={ () => {this.submit(this.state.groupName, this.state.webAppName, this.state.webAppGitRepo, this.state.servicePlanName, this.state.location, this.state.webAppType);} }>Create Web App</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default WebApp;
  