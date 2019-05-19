import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SQL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: this.props.groupName,
      postSqlUsename: '',
      postSqlPassword: '', 
      openSQL: false,
    };
  }
  
  //SQL handlers
  handleOpenSQL = () => {
    this.setState({ openSQL: true });
  };

  handleCloseSQL = () => {
    this.setState({ openSQL: false });
  };
  
  render() {
    return (
      <div className="container">
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
      </div>
    );
  }
}
  
export default SQL;
  