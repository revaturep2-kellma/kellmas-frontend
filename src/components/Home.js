import React from 'react';
import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../config';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
      console.log(decodedToken.preferred_username);
    } else {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className="homeCon">
        <div className="sidenav">
          <a href="#about">Virtual Machine</a>
          <a href="#services">App Services Plan</a>
          <a href="#contact">Web App</a>
          <a href="#clients">Blob Storage</a>
        </div>
        <div>
          <span>some spacer text so I can see my damn name:&nbsp;</span>
          <span>{decodedToken.preferred_username}</span>
          <button onClick={() => this.someFunc()}>fetch</button>
          <button onClick={() => this.logout()}>log out</button>
        </div>
      </div>
    );
  }
}

export default Home;
