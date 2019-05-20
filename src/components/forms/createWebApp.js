import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';

class WebApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      webAppName: '',
      webAppGitRepo: '',
      openWebApp: false
    };
  }
  
  //WebApp handlers
  handleOpenWebApp = () => {
    this.setState({ openWebApp: true });
  };

  handleCloseWebApp = () => {
    this.setState({ openWebApp: false });
  };

  submit(groupName, webAppName, webAppGitRepo) {

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
        webAppGitRepo: webAppGitRepo
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
    return (
      <div className="container">
        <Button onClick={this.handleOpenWebApp}>Open Web App</Button>
        <Modal
          aria-labelledby="WebApp-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openWebApp}
          onClose={this.handleCloseWebApp}
        >
          <div className="paperCard">
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
            <button className="regBut" onClick={ () => {this.submit(this.state.groupName, this.state.webAppName, this.state.webAppGitRepo);} }>Create Web App</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default WebApp;
  