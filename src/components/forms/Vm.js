import React, { Component } from 'react';

export class Vm extends Component {
    state = {
      vmName: '',
      vmAdminName: '',
      size: 'B1S'
    }

    render() {
      return (
        <div className="container">
          <h1>Make a damn VM</h1>
          <input
            type="text"
            value={this.state.vmName}
            onChange={(e) => this.setState({vmName: e.target.value})}
          />
          <input
            type="text"
            value={this.state.vmAdminName}
            onChange={(e) => this.setState({vmAdminName: e.target.value})}
          />
          {/* <input
                type="text"
                value={this.state.size}
                onChange={(e) => this.setState({vmName: e.target.value})}
            /> */}
        </div>
      );
    }
}

export default Vm;
