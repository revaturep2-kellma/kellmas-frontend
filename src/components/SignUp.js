import React from 'react';
import TextField from '@material-ui/core/TextField';
import logo from '../newcloudlife.png';
import { BASE_URL } from '../config';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      password: '',
      azDomain: '.onmicrosoft.com'
    };
  }

  submit(username, password, email, azDomain) {

    let removeAtSign = email.split('@').join('');
    let removeCom = removeAtSign.split('.com');
    let newEmailDom = removeCom[0];
    let userPrincipalName = username + '@' + newEmailDom + azDomain;

    fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password,
        userPrincipalName: userPrincipalName
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
        <div className="signUpCan">
          <img src={logo} alt="logo" className="cloudLogo"></img>
          <TextField
            type="text" 	         
            variant="outlined"
            label="Email"
            value={this.state.email}
            onChange={(e) => this.setState({email: e.target.value})}
          /><br/><br/>
          <TextField
            type="text" 	         
            variant="outlined"
            label="Username"
            value={this.state.userName}
            onChange={(e) => this.setState({userName: e.target.value})}
          /><br/><br/>
          <TextField
            type="text" 	         
            variant="outlined"
            label="Password"
            value={this.state.password}
            onChange={(e) => this.setState({password: e.target.value})}
          /><br/><br/>

          <button className="regBut" onClick={ () => {this.submit(this.state.username, this.state.password, this.state.email, this.state.azDomain);} }>Sign Up</button>
        </div>
      </div>
    );
  }
}


export default SignUp;
