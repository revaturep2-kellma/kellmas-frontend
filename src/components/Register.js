import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      role: ''

    };
  }
  
  
  render() {
    return (
      <div className="registerCon">
        <h1>Kellma Cloud Create Account</h1>
        <div>
          <label for="Name">Name</label><br/>
          <input 
            type="text" 
            value={this.state.name}
            onChange={(e) => this.setState({name: e.target.value})}
          /><br/>
          <label for="Email">Email</label><br/>
          <input 
            type="text" 
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
          /><br/>
          <label for="Password">Password</label><br/>
          <input 
            type="text" 
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
          /><br/>
          <label for="Role">Role</label><br/>
          <input 
            type="text" 
            value={this.state.role}
            onChange={(e) => this.setState({role: e.target.value})}
          />
        </div>
        <button onClick={() => this.props.history.push('/')}>Back to Login</button>

      </div>
    );
  }
}
  
export default Register;