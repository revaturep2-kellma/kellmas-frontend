import React from 'react';
import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../config';
import { Redirect } from 'react-router-dom';
import CreateUsers from './forms/createUser';
import CreateVM from './forms/createVM';
import CreateWebApp from './forms/createWebApp';
import AppServicePlan from './forms/createAppServicePlan';
import BlobStorageAccount from './forms/createBlobStorageAccount';
import Network from './forms/createNetwork';
import SQL from './forms/createSQL';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: 'kellmaGroup',
    };
  }

  someFunc() {
    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/main/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  logout() {
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  render() {
    const authToken = localStorage.getItem('authToken');
    let decodedToken;

    if (authToken) {
      decodedToken = jwtDecode(authToken);
      // console.log(decodedToken.preferred_username);
    } else {
      return (
        <Redirect to="/" />
      );
    }
    // console.log(this.state.openVM);
    return (
      <div className="container">
        <div>
          <CreateUsers />
          <CreateVM />
          <CreateWebApp />
          <AppServicePlan />
          <BlobStorageAccount />
          <Network />
          <SQL />

          {/* <span>some spacer text so I can see my damn name:&nbsp;</span> */}
          {/* <span>{decodedToken.preferred_username}</span> */}
          <button onClick={() => this.logout()}>log out</button>
        </div>
      </div>
    );
  }
}

export default Home;
