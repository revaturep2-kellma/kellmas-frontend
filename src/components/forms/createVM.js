import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class CreateVM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vmName: '',
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
            <div className="h1Div">
              <h1>Create Virtual Machine</h1>
            </div>
              
            <TextField
              type="text"
              variant="outlined"
              label="VM Name"
              value={this.state.vmName}
              onChange={(e) => this.setState({vmName: e.target.value})}
            /><br/>
            <button className="regBut">Create VM</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateVM;