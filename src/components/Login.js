import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  
  
  render() {
    
    return (
      <div className="loginCon">
        <h1>Kellma Cloud Login</h1>
        <div>

          <TextField
            id="outlined-adornment-email"
            variant="outlined"
            label="Email"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
          /><br/><br/>
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            label="Password"
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
          />
        </div><br/>
        {/* this button will change later */}
        <div className="buttons">
          <Button variant="contained" size="medium" color="primary" className="cat" onClick={() => this.props.history.push('/home')}>
          Login
          </Button>
          <Button variant="outlined" size="medium" color="secondary" onClick={() => this.props.history.push('/register')}>
          SignUp
          </Button>
        </div>
        
      </div>
    );
  }
}
  
export default Login;