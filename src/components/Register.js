import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      role: '',
    };
  }
  
  render() {
    return (
      <div className="registerCon">
        <h1>Kellma Cloud Create Account</h1>
        <div>
          <TextField
            id="outlined-adornment-name"
            variant="outlined"
            label="Name"
            value={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}
          /><br/><br/>
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
          /><br/><br/>
          <TextField
            id="outlined-adornment-password"
            variant="outlined"
            label="Role"
            value={this.state.role}
            onChange={(e) => this.setState({role: e.target.value})}
          />
        </div><br/>

        <div className="buttons">
          <Button variant="contained" size="medium" color="primary" onClick={() => this.props.history.push('/')}>
          Login
          </Button>
          <Button variant="outlined" size="medium" color="secondary" className="cat" onClick={() => this.props.history.push('/home')}>
          Home
          </Button>
         
        </div>

      </div>
    );
  }
}
  
export default Register;