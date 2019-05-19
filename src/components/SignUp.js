import React from 'react';
import TextField from '@material-ui/core/TextField';
import logo from '../newcloudlife.png';
import { BASE_URL } from '../config';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  submit(username, password, azDomain) {

    let userPrincipalName = username + '@' + azDomain;

    console.log(username);
    fetch(`${BASE_URL}/adminUsers`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          return this.props.history.push('/');

        }else{
          alert(responseJson.error);
          console.log('THERE WAS AN ERROR', responseJson.error);
        }
      })
      .catch((err) => {
        console.log('caught error in catch of submt');
        alert(err);
      /* do something if there was an error with fetching */
      });
  }


  render() {
    return(
      <div>
        <div className="container">
          <img src={logo} alt="logo" className="cloudLogo"></img>
          <TextField
            type="text"
            variant="outlined"
            label="Username"
            value={this.state.username}
            onChange={(e) => this.setState({username: e.target.value})}
          /><br/><br/>
          <TextField
            type="text"
            variant="outlined"
            label="Password"
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
          /><br/><br/>

          <button className="regBut" onClick={ () => {this.submit(this.state.username, this.state.password);} }>Sign Up</button>
        </div>
      </div>
    );
  }
}


export default SignUp;
