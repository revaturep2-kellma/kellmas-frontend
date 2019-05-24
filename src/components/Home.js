import React from 'react';
import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../config';
import { Redirect } from 'react-router-dom';
import CreateUsers from './forms/createUser';
import CreateVM from './forms/createVM';
import CreateWebApp from './forms/createWebApp';
// import AppServicePlan from './forms/createAppServicePlan';
import BlobStorageAccount from './forms/createBlobStorageAccount';
import Network from './forms/createNetwork';
import SQL from './forms/createSQL';
import ResourceTable from './ResourceTable';
import UserTable from './UserTable';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role: ''
    };
  }

  componentDidMount() {
    this.getRole();
  }

  getRole() {
    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/roles/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(res => this.setState({role: res}))
      .catch(err => console.error(err));
  }

  logout() {
    localStorage.removeItem('authToken');
    window.location = `${BASE_URL}/auth/openid/logout`;
  }

  render() {
    const authToken = localStorage.getItem('authToken');
    let decodedToken;
    let groupName;
    if (authToken) {
      decodedToken = jwtDecode(authToken);
      let email = decodedToken.preferred_username.split('@');
      groupName = email[0];
    } else {
      return (
        <Redirect to="/" />
      );
    }

    console.log(this.state.role);

    return (
      <div className="container">
        <div>
          <span>Logged in as: {groupName}</span>
          <button onClick={() => this.logout()}>log out</button>
          <CreateUsers />
          <CreateVM />
          <CreateWebApp />
          {/* <AppServicePlan groupName={groupName} /> */}
          <BlobStorageAccount />
          <Network />
          <SQL />
          <ResourceTable />
          <UserTable />
        </div>
      </div>
    );
  }
}

export default Home;
