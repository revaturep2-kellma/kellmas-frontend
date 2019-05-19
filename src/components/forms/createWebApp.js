import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class WebApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      webAppName: '',
      webAppGitRepo: '',
      openWebApp: false
    };
  }
  
  //WebApp handlers
  handleOpenWebApp = () => {
    this.setState({ openWebApp: true });
  };

  handleCloseWebApp = () => {
    this.setState({ openWebApp: false });
  };
  
  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}
  
export default WebApp;
  