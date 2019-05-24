import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { BASE_URL } from '../config';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      role: '',
      labelWidth: 0,
      openRole: false
    };
  }


  handleOpenRole = () => {
    this.setState({ openRole: true });
  };

  handleCloseRole = () => {
    this.setState({ openRole: false });
  };

  submit(user, role) {

    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/updateUser`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: user,
        role: role
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseRole();

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
    let userRoles =["", "Owner", "Contributor", "Reader"];

    let roles = userRoles.map(role => {
      return <option key={role} value={role}>{role}</option>;
    });

    return (
      <div className="container">
        <Button onClick={this.handleOpenRole}>Update User Role</Button>
        <Modal
          aria-labelledby="Blob-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openRole}
          onClose={this.handleCloseRole}
        >
          <div className="paperCard">
            <h1>Change User Role</h1>

            <Select
              native
              value={this.state.role}
              onChange={(e) => this.setState({role: e.target.value})}
              input={
                <OutlinedInput
                  name="Roles"
                  labelWidth={this.state.labelWidth}
                  id="outlined-storagePlan-native-simple"
                />
              }
            >
              {roles}
            </Select><br/>
            <button className="regBut" onClick={ () => {this.submit(this.state.user, this.state.role);} }>Update User</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default UpdateUser;
