import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import UpdateUser from './UserRoleUpdate';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    };
  }

  render() {
    const { user } = this.state;
    console.log(user);

    return (
      <React.Fragment>
        <TableRow key={user.id}>
          <TableCell align="center">{user.principalName}</TableCell>
          <TableCell align="center">{user.roleDefinitionName}</TableCell>
          <TableCell align="center"><UpdateUser user={this.state.user} /></TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
}
