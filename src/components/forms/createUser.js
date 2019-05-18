import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class CreateUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: 'kellmaGroup',
      displayName: '',
      userPassword: '',
      domain: 'kenttokunagagmail.onmicrosoft.com',
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

  render() {
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
              value={this.state.displayName}
              onChange={(e) => this.setState({displayName: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Password"
              value={this.state.userPassword}
              onChange={(e) => this.setState({userPassword: e.target.value})}
            /><br/>
            <button className="regBut">Create User</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateUsers;