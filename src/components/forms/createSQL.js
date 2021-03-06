import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';
import Locations from  '../Location';

class SQL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serverUsername: '',
      serverPassword: '', 
      serverName: '',
      dbName: '',
      location: '',
      openSQL: false,
    };
  }
  
  handleLocation = (location) => {
    this.setState({location: location});
  }

  //SQL handlers
  handleOpenSQL = () => {
    this.setState({ openSQL: true });
  };

  handleCloseSQL = () => {
    this.setState({ openSQL: false });
  };

  submit(serverUsername, serverPassword, serverName, dbName, location) {

    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/newSQL`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        serverUsername: serverUsername,
        serverPassword: serverPassword,
        serverName: serverName,
        dbName: dbName,
        location: location
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseSQL();

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
        <Button onClick={this.handleOpenSQL}>Create SQL</Button>
        <Modal
          aria-labelledby="SQL-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openSQL}
          onClose={this.handleCloseSQL}
        >
          <div className="paperCard1">
            <h1>Create SQL Database</h1>

            <TextField
              type="text"
              variant="outlined"
              label="Server Username"
              value={this.state.serverUsername}
              onChange={(e) => this.setState({serverUsername: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Server Password"
              value={this.state.serverPassword}
              onChange={(e) => this.setState({serverPassword: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Server Name"
              value={this.state.serverName}
              onChange={(e) => this.setState({serverName: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Database Name"
              value={this.state.dbName}
              onChange={(e) => this.setState({dbName: e.target.value})}
            /><br/>
            <Locations onChange={this.handleLocation} /><br/>

            <button className="regBut" onClick={ () => {this.submit(this.state.serverUsername, this.state.serverPassword, this.state.serverName, this.state.dbName, this.state.location);} }>Create SQL</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default SQL;
  