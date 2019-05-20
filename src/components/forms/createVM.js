import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';

export class CreateVM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      vmName: '',
      netName: '',
      openVM: false
    };
  }
  //VM handlers
  handleOpenVM = () => {
    this.setState({ openVM: true });
  };

  handleCloseVM = () => {
    this.setState({ openVM: false });
  };

  submit(groupName, vmName, netName) {

    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/newVM`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupName: groupName,
        vmName: vmName,
        netName: netName
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseVM();

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
        <Button onClick={this.handleOpenVM}>Open VM</Button>
        <Modal
          aria-labelledby="VM-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openVM}
          onClose={this.handleCloseVM}
        >
          <div className="paperCard">
            <h1>Create Virtual Machine</h1>
              
            <TextField
              type="text"
              variant="outlined"
              label="VM Name"
              value={this.state.vmName}
              onChange={(e) => this.setState({vmName: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Network Name"
              value={this.state.netName}
              onChange={(e) => this.setState({netName: e.target.value})}
            /><br/>
            <button className="regBut" onClick={ () => {this.submit(this.state.groupName, this.state.vmName, this.state.netName);} }>Create VM</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateVM;