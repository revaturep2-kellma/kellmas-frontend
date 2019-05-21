import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';
import Locations from  '../Location';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class WebApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      webAppName: '',
      webAppGitRepo: '',
      servicePlanName: '', 
      servicePlanType: '',
      location:'',
      webAppType: '',
      labelWidth: 0,
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

  submit(groupName, webAppName, webAppGitRepo, servicePlanName, servicePlanType, location, webAppType) {

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
        servicePlanType: servicePlanType,
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

    let planTypes = ["", "B1", "B2", "B3", "D1", "F1", "FREE", "P1V2", "P2V2", "P3V2", "PC2", "PC3", "PC4", "S1", "S2", "S3", "SHARED"];

    let types = planTypes.map(type => {
      return <option key={type} value={type}>{type}</option>;
    });


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
            <div className="service">
              <TextField
                type="text"
                variant="outlined"
                label="Service Plan Name"
                value={this.state.servicePlanName}
                onChange={(e) => this.setState({servicePlanName: e.target.value})}
              /><br/>
              <div className="inner">
                <InputLabel htmlFor="filled-age-native-simple">Service Plan Type</InputLabel>
                <Select
                  native
                  value={this.state.servicePlanType}
                  onChange={(e) => this.setState({servicePlanType: e.target.value})}
                  input={
                    <OutlinedInput
                      name="Service Plan Types"
                      labelWidth={this.state.labelWidth}
                      id="outlined-servicePlanType-native-simple"
                    />
                  }
                >
                  {types}
                </Select><br/>
              </div>
            </div>
            <Locations onChange={this.handleLocation} /><br/>

            <InputLabel htmlFor="filled-WebAppType-native-simple">Web App Type</InputLabel>
            <Select
              native
              value={this.state.webAppType}
              onChange={(e) => this.setState({webAppType: e.target.value})}
              input={
                <OutlinedInput
                  name="Web App Type"
                  labelWidth={this.state.labelWidth}
                  id="outlined-webAppType-native-simple"
                />
              }
            >
              {elements}
            </Select><br/>

            <button className="regBut" onClick={ () => {this.submit(this.state.groupName, this.state.webAppName, this.state.webAppGitRepo, this.state.servicePlanName, this.state.servicePlanType, this.state.location, this.state.webAppType);} }>Create Web App</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default WebApp;
  