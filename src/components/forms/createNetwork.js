import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Network extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: 'kellmaGroup',
      netName: '',
      openNet: false
    };
  }
  
  //Net handlers
  handleOpenNet = () => {
    this.setState({ openNet: true });
  };

  handleCloseNet = () => {
    this.setState({ openNet: false });
  };
  
  render() {
    return (
      <div className="container">
        <Button onClick={this.handleOpenNet}>Open Net</Button>
        <Modal
          aria-labelledby="Network-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openNet}
          onClose={this.handleCloseNet}
        >
          <div className="paperCard">
            <div className="h1Div">
              <h1>Create Network</h1>
            </div>

            <TextField
              type="text"
              variant="outlined"
              label="Network Name"
              value={this.state.netName}
              onChange={(e) => this.setState({netName: e.target.value})}
            /><br/>
            <button className="regBut">Create Network</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default Network;
  