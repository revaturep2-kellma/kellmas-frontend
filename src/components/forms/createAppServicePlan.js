import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AppServicePlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ServicePlanName: '',
      openAPS: false
    };
  }
  
   //ASP handlers
   handleOpenASP = () => {
     this.setState({ openAPS: true });
   };

  handleCloseASP = () => {
    this.setState({ openAPS: false });
  };
  
  render() {
    return (
      <div className="container">
        <Button onClick={this.handleOpenASP}>Open ASP</Button>
        <Modal
          aria-labelledby="ASP-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openAPS}
          onClose={this.handleCloseASP}
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
      </div>
    );
  }
}
  
export default AppServicePlan;
  