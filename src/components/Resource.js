import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import { BASE_URL } from '../config';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openResource: false,
      resource: this.props.resource
    };
  }

  componentDidMount() {
    this.getResource(this.props.resource);
  }

  handleOpenResource = () => {
    this.setState({ openResource: true });
  }

  handleCloseResource = () => {
    this.setState({ openResource: false });
  }

  deleteResource(id) {
    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/resources`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({id})
    })
      .then(() => this.props.getResources())
      .catch(err => console.error(err));
  }

  getResource(resource) {
    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/resources/${resource.name}/${resource.type}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => res.json())
      .then(res => this.setState({ resource: res }))
      .catch(err => console.error(err));
  }

  render() {
    const { resource } = this.state;
    let properties;
    let otherProperties;
    console.log(resource);

    if (resource.type === 'Microsoft.Network/virtualNetworks') {
      if (resource.properties) {
        let subnets = resource.properties.subnets.map(subnet => subnet.properties.addressPrefix);
        otherProperties = (
          <React.Fragment>
            <h3>Address Prefixes: {resource.properties.addressSpace.addressPrefixes}</h3>
            <h3>Subnets: {subnets}</h3>
          </React.Fragment>
        );
      }
    }

    properties = (
      <React.Fragment>
        <h1>{resource.name}</h1>
        <h2>{resource.type}</h2>
        {otherProperties}
      </React.Fragment>
    );

    return (
      <React.Fragment>
        <TableRow key={resource.id}>
          <TableCell align="center" onClick={() => this.handleOpenResource()}>{resource.name}</TableCell>
          <TableCell align="center" onClick={() => this.handleOpenResource()}>{resource.type}</TableCell>
          <TableCell align="center"><button onClick={() => this.deleteResource(resource.id)}>delete</button></TableCell>
        </TableRow>
        <Modal
          aria-labelledby="Resource-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openResource}
          onClose={this.handleCloseResource}
        >
          <div className="paperCard">
            {properties}
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
