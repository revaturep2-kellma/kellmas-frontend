import React from 'react';
import queryString from 'query-string';
import { LOGIN_BASE_URL } from '../config';
import logo from '../newcloudlife.png';

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
      <div className="container">
        <img src={logo} alt="logo" className="cloudLogo"></img>

        <div className="buttonsDiv">
          <a className="button" href={`${LOGIN_BASE_URL}/auth/openid/login`}>login</a>
          <p>Don&#39;t have an account? <a href="SignUp">Sign Up</a></p>
        </div>

      </div>
    );
  }
}

export default Login;