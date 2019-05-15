import React from 'react';

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
                />
            </div>
            <button onClick={() => this.props.history.push('/register')}>Create Account</button>
       </div>
      );
    }
  }
  
  export default Login;