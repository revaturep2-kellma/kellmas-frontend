import React from 'react';
import queryString from 'query-string';
import { BASE_URL } from '../config';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    if (this.props.location.search) {
      const authToken = queryString.parse(this.props.location.search).token;

      if (authToken) {
        localStorage.setItem('authToken', authToken);
      }
    }
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

  render() {
    return (
      <div className="loginCon">
        <h1>Kellma Cloud Login</h1>
        {/* this button will change later */}
        <button onClick={() => this.props.history.push('/home')}>Home</button>
        <button onClick={() => this.props.history.push('/register')}>Sign Up</button>

        <a href={`${BASE_URL}/login`}>login</a>

        <button onClick={() => this.someFunc()}>fetch</button>
      </div>
    );
  }
}

export default Login;