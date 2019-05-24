import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import User from './User';
import { BASE_URL } from '../config';

export default class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/newUsers/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(res => this.setState({users: res}))
      .catch(err => console.error(err));
  }

  render() {
    const users = this.state.users.map(user => {
      return <User key={user.id} user={user} getUsers={this.getUsers} />;
    });

    return (
      <React.Fragment>
        <h2>Users</h2>
        <Paper className="resource-table-root">
          <Table className="resource-table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Role</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}
