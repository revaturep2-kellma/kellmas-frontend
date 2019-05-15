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
                <input 
                    type="text" 
                    value={this.state.name}
                    onChange={(e) => this.setState({name: e.target.value})}
                /><br/>
                <input 
                    type="text" 
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
                /><br/>
                <input 
                    type="text" 
                    value={this.state.password}
                    onChange={(e) => this.setState({password: e.target.value})}
                /><br/>
                <input 
                    type="text" 
                    value={this.state.role}
                    onChange={(e) => this.setState({role: e.target.value})}
                />
            </div>
       </div>
      );
    }
  }
  
  export default Register;