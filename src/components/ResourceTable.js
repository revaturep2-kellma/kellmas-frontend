import React, { Component } from 'react';
import Resource from './Resource';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { BASE_URL } from '../config';

export default class ResourceTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
    };
  }

  componentDidMount() {
    this.getResources();
    setInterval(this.getResources.bind(this), 1000 * 60);
  }

  getResources() {
    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/resources/`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(res => this.setState({resources: res}))
      .catch(err => console.error(err));
  }

  render() {
    const resources = this.state.resources.map(resource => {
      return <Resource key={resource.id} resource={resource} getResources={this.getResources} />;
    });

    return (
      <React.Fragment>
        <h2>Resources</h2>
        <Paper className="resource-table-root">
          <Table className="resource-table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resources}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}
