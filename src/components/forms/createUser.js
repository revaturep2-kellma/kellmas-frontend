import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';

export class CreateUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      azDomain: 'mschw90gmail.onmicrosoft.com',
      openUser: false
    };
  }
  //User handler
  handleOpenUser = () => {
    this.setState({ openUser: true });
  };

  handleCloseUser = () => {
    this.setState({ openUser: false });
  };

  submit(username, password, azDomain) {

    let userPrincipalName = username + '@' + azDomain;

    fetch(`${BASE_URL}/newUsers`, {
      method: 'POST',
      headers: {
        
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
        userPrincipalName: userPrincipalName
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseUser();

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
    console.log(this.state.groupName);
    return (
      <div className="container">
        <Button onClick={this.handleOpenUser}>Open User</Button>
        <Modal
          aria-labelledby="User-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openUser}
          onClose={this.handleCloseUser}
        >
          <div className="paperCard">
            <h1>Create New User</h1>
              
            <TextField
              type="text"
              variant="outlined"
              label="Display Name"
              value={this.state.username}
              onChange={(e) => this.setState({username: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Password"
              value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})}
            /><br/>
            <button className="regBut" onClick={ () => {this.submit(this.state.username, this.state.password, this.state.azDomain);} }>Create User</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateUsers;