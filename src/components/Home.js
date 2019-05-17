import React from 'react';
import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../config';
import { Redirect } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vmName: '',
      servicePlanName: '',
      netName: '',
      webAppName: '',
      webAppGitRepo: '',
      postSqlUsename: '',
      postSqlPassword: '', 
      blobName: '',
      openVm: false,
      openSPN: false,
      openNet: false,
      openWebApp: false,
      openSQL: false,
      openBlob: false
    };
  }




  // someFunc() {
  //   const authToken = localStorage.getItem('authToken');

  //   fetch(`${BASE_URL}/main/`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${authToken}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.error(err));
  // }

  logout() {
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  render() {
    const authToken = localStorage.getItem('authToken');
    let decodedToken;

    if (authToken) {
      decodedToken = jwtDecode(authToken);
      console.log(decodedToken.preferred_username);
    } else {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className="container">
        <div>
          <Button onClick={this.handleOpen}>Open VM</Button>
          <Button onClick={this.handleOpen}>Open SPN</Button>
          <Button onClick={this.handleOpen}>Open Net</Button>
          <Button onClick={this.handleOpen}>Open WebApp</Button>
          <Button onClick={this.handleOpen}>Open SQL</Button>
          <Button onClick={this.handleOpen}>Open Blob</Button>
          {/* <span>some spacer text so I can see my damn name:&nbsp;</span> */}
          {/* <span>{decodedToken.preferred_username}</span> */}
          <button onClick={() => this.logout()}>log out</button>
        </div>
      </div>
    );
  }
}

export default Home;
