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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: []
    };
  }

  componentDidMount() {
    this.getResources();
    setInterval(this.getResources.bind(this), 1000 * 60);
  }

  getResources() {
    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/resources/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(res => this.setState({resources: res}))
      .catch(err => console.error(err));
  }

  logout() {
    localStorage.removeItem('authToken');
    window.location = `${BASE_URL}/auth/openid/logout`;
  }

  deleteResource(id) {
    const authToken = localStorage.getItem('authToken');

    console.log(id);
    fetch(`${BASE_URL}/resources`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({id})
    })
      .then(() => this.getResources())
      .catch(err => console.error(err));
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
    // console.log(this.state.openVM);
    const resources = this.state.resources.map(resource => {
      return <li key={resource.id}><button onClick={() => this.deleteResource(resource.id)}>Delete</button>{resource.name} <span>({resource.type})</span></li>;
    });

    return (
      <div className="container">
        <div>
          <CreateUsers />
          <CreateVM />
          <CreateWebApp />
          {/* <AppServicePlan groupName={groupName} /> */}
          <BlobStorageAccount />
          <Network />
          <SQL />
          <h2>Resources</h2>
          <ul>
            {resources}
          </ul>
          <span>{groupName}</span>
          <button onClick={() => this.logout()}>log out</button>
        </div>
      </div>
    );
  }
}

export default Home;
