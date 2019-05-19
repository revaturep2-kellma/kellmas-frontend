import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class BlobStorageAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      blobName: '',
      openBlob: false
    };
  }

  //Blob handlers
  handleOpenBlob = () => {
    this.setState({ openBlob: true });
  };

  handleCloseBlob = () => {
    this.setState({ openBlob: false });
  };
  
  
  render() {
    return (
      <div className="container">
        <Button onClick={this.handleOpenBlob}>Open Blob</Button>
        <Modal
          aria-labelledby="Blob-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openBlob}
          onClose={this.handleCloseBlob}
        >
          <div className="paperCard">
            <div className="h1Div">
              <h1>Create Blob Storage</h1>
            </div>
              
            <TextField
              type="text"
              variant="outlined"
              label="Blob Name"
              value={this.state.blobName}
              onChange={(e) => this.setState({blobName: e.target.value})}
            /><br/>
            <button className="regBut">Create Blob</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default BlobStorageAccount;
  