import React from 'react';
import jwtDecode from 'jwt-decode';
import { BASE_URL } from '../config';
import { Redirect } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: 'kellmaGroup',
      displayName: '',
      userPassword: '',
      domain: 'kenttokunagagmail.onmicrosoft.com',
      vmName: '',
      servicePlanName: '',
      netName: '',
      webAppName: '',
      webAppGitRepo: '',
      postSqlUsename: '',
      postSqlPassword: '', 
      blobName: '',
      openUser: false,
      openVM: false,
      openSPN: false,
      openNet: false,
      openWebApp: false,
      openSQL: false,
      openBlob: false
    };
  }

  //User handler
  handleOpenUser = () => {
    this.setState({ openUser: true });
  };

  handleCloseUser = () => {
    this.setState({ openUser: false });
  };
  
  //VM handlers
  handleOpenVM = () => {
    this.setState({ openVM: true });
  };

  handleCloseVM = () => {
    this.setState({ openVM: false });
  };

  //SPN handlers
  handleOpenSPN = () => {
    this.setState({ openSPN: true });
  };

  handleCloseSPN = () => {
    this.setState({ openSPN: false });
  };
  
  //Net handlers
  handleOpenNet = () => {
    this.setState({ openNet: true });
  };

  handleCloseNet = () => {
    this.setState({ openNet: false });
  };

  //WebApp handlers
  handleOpenWebApp = () => {
    this.setState({ openWebApp: true });
  };

  handleCloseWebApp = () => {
    this.setState({ openWebApp: false });
  };

  //SQL handlers
  handleOpenSQL = () => {
    this.setState({ openSQL: true });
  };

  handleCloseSQL = () => {
    this.setState({ openSQL: false });
  };

  //Blob handlers
  handleOpenBlob = () => {
    this.setState({ openBlob: true });
  };

  handleCloseBlob = () => {
    this.setState({ openBlob: false });
  };



  // someFunc() {
  //   const authToken = localStorage.getItem('authToken');

  //   fetch(`${BASE_URL}/main/`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${authToken}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  //     .catch(err => console.error(err));
  // }

  logout() {
    localStorage.removeItem('authToken');
    this.props.history.push('/');
  }

  render() {
    const authToken = localStorage.getItem('authToken');
    let decodedToken;

    if (authToken) {
      decodedToken = jwtDecode(authToken);
      // console.log(decodedToken.preferred_username);
    } else {
      return (
        <Redirect to="/" />
      );
    }
    // console.log(this.state.openVM);
    return (
      <div className="container">
        <div>
          <Button onClick={this.handleOpenUser}>Open User</Button>
          <Modal
            aria-labelledby="User-Modal"
            aria-describedby="simple-modal-description"
            open={this.state.openUser}
            onClose={this.handleCloseUser}
          >
            <div className="paperCard">
              <h1>Create New User</h1>
              
              <TextField
                type="text"
                variant="outlined"
                label="Display Name"
                value={this.state.displayName}
                onChange={(e) => this.setState({displayName: e.target.value})}
              /><br/>
              <TextField
                type="text"
                variant="outlined"
                label="Password"
                value={this.state.userPassword}
                onChange={(e) => this.setState({userPassword: e.target.value})}
              /><br/>
              <button className="regBut">Create User</button>
            </div>
          </Modal>

          <Button onClick={this.handleOpenVM}>Open VM</Button>
          <Modal
            aria-labelledby="VM-Modal"
            aria-describedby="simple-modal-description"
            open={this.state.openVM}
            onClose={this.handleCloseVM}
          >
            <div className="paperCard">
              <div className="h1Div">
                <h1>Create Virtual Machine</h1>
              </div>
              
              <TextField
                type="text"
                variant="outlined"
                label="VM Name"
                value={this.state.vmName}
                onChange={(e) => this.setState({vmName: e.target.value})}
              /><br/>
              <button className="regBut">Create VM</button>
            </div>
          </Modal>

          <Button onClick={this.handleOpenSPN}>Open SPN</Button>
          <Modal
            aria-labelledby="SPN-Modal"
            aria-describedby="simple-modal-description"
            open={this.state.openSPN}
            onClose={this.handleCloseSPN}
          >
            <div className="paperCard">
              <div className="h1Div">
                <h1>Create App Service Plan</h1>
              </div>

              <TextField
                type="text"
                variant="outlined"
                label="Service Plan Name"
                value={this.state.servicePlanName}
                onChange={(e) => this.setState({servicePlanName: e.target.value})}
              /><br/>
              <button className="regBut">Create Service Plan</button>
            </div>
          </Modal>

          <Button onClick={this.handleOpenNet}>Open Net</Button>
          <Modal
            aria-labelledby="Network-Modal"
            aria-describedby="simple-modal-description"
            open={this.state.openNet}
            onClose={this.handleCloseNet}
          >
            <div className="paperCard">
              <div className="h1Div">
                <h1>Create Network</h1>
              </div>

              <TextField
                type="text"
                variant="outlined"
                label="Network Name"
                value={this.state.netName}
                onChange={(e) => this.setState({netName: e.target.value})}
              /><br/>
              <button className="regBut">Create Network</button>
            </div>
          </Modal>

          <Button onClick={this.handleOpenWebApp}>Open Web App</Button>
          <Modal
            aria-labelledby="WebApp-Modal"
            aria-describedby="simple-modal-description"
            open={this.state.openWebApp}
            onClose={this.handleCloseWebApp}
          >
            <div className="paperCard">
              <h1>Create Web App</h1>

              <TextField
                type="text"
                variant="outlined"
                label="Web App Name"
                value={this.state.webAppName}
                onChange={(e) => this.setState({webAppName: e.target.value})}
              /><br/>
              <TextField
                type="text"
                variant="outlined"
                label="Git Repo URL"
                value={this.state.webAppGitRepo}
                onChange={(e) => this.setState({webAppGitRepo: e.target.value})}
              /><br/>
              <button className="regBut">Create Web App</button>
            </div>
          </Modal>

          <Button onClick={this.handleOpenSQL}>Open SQL</Button>
          <Modal
            aria-labelledby="SQL-Modal"
            aria-describedby="simple-modal-description"
            open={this.state.openSQL}
            onClose={this.handleCloseSQL}
          >
            <div className="paperCard">
              <h1>Create Postgres SQL</h1>

              <TextField
                type="text"
                variant="outlined"
                label="SQL Username"
                value={this.state.postSqlUsename}
                onChange={(e) => this.setState({postSqlUsename: e.target.value})}
              /><br/>
              <TextField
                type="text"
                variant="outlined"
                label="SQL Password"
                value={this.state.postSqlPassword}
                onChange={(e) => this.setState({postSqlPassword: e.target.value})}
              /><br/>
              <button className="regBut">Create PSQL</button>
            </div>
          </Modal>

          <Button onClick={this.handleOpenBlob}>Open Blob</Button>
          <Modal
            aria-labelledby="Blob-Modal"
            aria-describedby="simple-modal-description"
            open={this.state.openBlob}
            onClose={this.handleCloseBlob}
          >
            <div className="paperCard">
              <div className="h1Div">
                <h1>Create Blob Storage</h1>
              </div>
              
              <TextField
                type="text"
                variant="outlined"
                label="Blob Name"
                value={this.state.blobName}
                onChange={(e) => this.setState({blobName: e.target.value})}
              /><br/>
              <button className="regBut">Create Blob</button>
            </div>
          </Modal>
          {/* <span>some spacer text so I can see my damn name:&nbsp;</span> */}
          {/* <span>{decodedToken.preferred_username}</span> */}
          <button onClick={() => this.logout()}>log out</button>
        </div>
      </div>
    );
  }
}

export default Home;
