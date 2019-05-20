import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';
import Locations from  '../Location';

class BlobStorageAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      blobName: '',
      location:'',
      openBlob: false
    };
  }

  handleLocation = (location) => {
    this.setState({location: location});
  }

  //Blob handlers
  handleOpenBlob = () => {
    this.setState({ openBlob: true });
  };

  handleCloseBlob = () => {
    this.setState({ openBlob: false });
  };

  submit(groupName, blobName, location) {

    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/newBlob`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupName: groupName,
        blobName: blobName,
        location: location
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseBlob();

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
    console.log(this.state.location);
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
            <h1>Create Blob Storage</h1>
              
            <TextField
              type="text"
              variant="outlined"
              label="Blob Name"
              value={this.state.blobName}
              onChange={(e) => this.setState({blobName: e.target.value})}
            /><br/>
            <Locations onChange={this.handleLocation} /><br/>
            <button className="regBut" onClick={ () => {this.submit(this.state.groupName, this.state.blobName, this.state.location);} }>Create Blob</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default BlobStorageAccount;
  