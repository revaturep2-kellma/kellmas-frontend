import React from 'react';
import queryString from 'query-string';
import { BASE_URL } from '../config';
import logo from '../cloudlife.png';

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
        this.props.history.push('/home');
      }
    }
  }

  render() {

    return (
      <div className="loginCon">
        <img src={logo} className="cloudLogo"></img>

        <div className="buttonsDiv">
          <a className="button" href={`${BASE_URL}/auth/openid/login`}>login</a>
        </div>
        
      </div>
    );
  }
}

export default Login;