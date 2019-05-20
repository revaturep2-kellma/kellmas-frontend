import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';

class AppServicePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      servicePlanName: '',
      openAPS: false
    };
  }
  
   //ASP handlers
   handleOpenASP = () => {
     this.setState({ openAPS: true });
   };

  handleCloseASP = () => {
    this.setState({ openAPS: false });
  };
  
  submit(groupName, servicePlanName) {

    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/newASP`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        groupName: groupName,
        servicePlanName: servicePlanName
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseASP();

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
        <Button onClick={this.handleOpenASP}>Open ASP</Button>
        <Modal
          aria-labelledby="ASP-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openAPS}
          onClose={this.handleCloseASP}
        >
          <div className="paperCard">
            <div className="h1Div">
              <h1>Create App Service Plan</h1>
            </div>

            <TextField
              type="text"
              variant="outlined"
              label="Service Plan Name"
              value={this.state.servicePlanName}
              onChange={(e) => this.setState({servicePlanName: e.target.value})}
            /><br/>
            <button className="regBut" onClick={ () => {this.submit(this.state.groupName, this.state.servicePlanName);} }>Create Service Plan</button>
          </div>
        </Modal>
      </div>
    );
  }
}
  
export default AppServicePlan;
  