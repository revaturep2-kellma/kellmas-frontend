import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';

class Network extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
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

  submit(groupName, netName) {

    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/newNetwork`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupName: groupName,
        netName: netName
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseNet();

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
            <button className="regBut" onClick={ () => {this.submit(this.state.groupName, this.state.netName);} }>Create Network</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default Network;
  