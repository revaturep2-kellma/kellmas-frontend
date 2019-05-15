import React from 'react';
import queryString from 'query-string';

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

  render() {
    return (
      <div className="loginCon">
        <h1>Kellma Cloud Login</h1>
        {/* this button will change later */}
        <button onClick={() => this.props.history.push('/home')}>Home</button>
        <button onClick={() => this.props.history.push('/register')}>Sign Up</button>

        <a href="http://localhost:3001/login">login</a>
      </div>
    );
  }
}

export default Login;