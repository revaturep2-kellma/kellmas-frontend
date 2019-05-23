import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { BASE_URL } from '../../config';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

export class CreateVM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vmName: '',
      netName: '',
      size: '',
      labelWidth: 0,
      openVM: false
      
    };
  }
  //VM handlers
  handleOpenVM = () => {
    this.setState({ openVM: true });
  };

  handleCloseVM = () => {
    this.setState({ openVM: false });
  };

  submit(vmName, netName, size) {

    const authToken = localStorage.getItem('authToken');

    fetch(`${BASE_URL}/newVM`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        vmName: vmName,
        netName: netName,
        size: size
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
      /* do something with responseJson and go back to the Login view but
       * make sure to check for responseJson.success! */
        if(responseJson.success){
          // return this.props.navigation.goBack();
          this.handleCloseVM();

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
    let size = [
      '',
      'Standard_B1ls',
      'Standard_B1ms',
      'Standard_B1s',
      'Standard_B2ms',
      'Standard_B2s',
      'Standard_B4ms',
      'Standard_B8ms',
      'Standard_DS1_v2',
      'Standard_DS2_v2',
      'Standard_DS3_v2',
      'Standard_DS4_v2',
      'Standard_DS5_v2',
      'Standard_DS11_v2',
      'Standard_DS12_v2',
      'Standard_DS13_v2',
      'Standard_DS14_v2',
      'Standard_DS15_v2',
      'Standard_F1s',
      'Standard_F2s',
      'Standard_F4s',
      'Standard_F8s',
      'Standard_F16s',
      'Standard_D2s_v3',
      'Standard_D4s_v3',
      'Standard_D8s_v3',
      'Standard_D16s_v3',
      'Standard_D32s_v3',
      'Standard_A0',
      'Standard_A1',
      'Standard_A2',
      'Standard_A3',
      'Standard_A5',
      'Standard_A4',
      'Standard_A6',
      'Standard_A7',
      'Basic_A0',
      'Basic_A1',
      'Basic_A2',
      'Basic_A3',
      'Basic_A4',
      'Standard_D1_v2',
      'Standard_D2_v2',
      'Standard_D3_v2',
      'Standard_D4_v2',
      'Standard_D5_v2',
      'Standard_D11_v2',
      'Standard_D12_v2',
      'Standard_D13_v2',
      'Standard_D14_v2',
      'Standard_D15_v2',
      'Standard_F1',
      'Standard_F2',
      'Standard_F4',
      'Standard_F8',
      'Standard_F16',
      'Standard_A1_v2',
      'Standard_A2m_v2',
      'Standard_A2_v2',
      'Standard_A4m_v2',
      'Standard_A4_v2',
      'Standard_A8m_v2',
      'Standard_A8_v2',
      'Standard_D2_v3',
      'Standard_D4_v3',
      'Standard_D8_v3',
      'Standard_D16_v3',
      'Standard_D32_v3',
      'Standard_D64_v3',
      'Standard_D64s_v3',
      'Standard_E2_v3',
      'Standard_E4_v3',
      'Standard_E8_v3',
      'Standard_E16_v3',
      'Standard_E20_v3',
      'Standard_E32_v3',
      'Standard_E64i_v3',
      'Standard_E64_v3',
      'Standard_E2s_v3',
      'Standard_E4s_v3',
      'Standard_E8s_v3',
      'Standard_E16s_v3',
      'Standard_E20s_v3',
      'Standard_E32s_v3',
      'Standard_E64is_v3',
      'Standard_E64s_v3',
      'Standard_D1',
      'Standard_D2',
      'Standard_D3',
      'Standard_D4',
      'Standard_D11',
      'Standard_D12',
      'Standard_D13',
      'Standard_D14',
      'Standard_DS1',
      'Standard_DS2',
      'Standard_DS3',
      'Standard_DS4',
      'Standard_DS11',
      'Standard_DS12',
      'Standard_DS13',
      'Standard_DS14',
      'Standard_G1',
      'Standard_G2',
      'Standard_G3',
      'Standard_G4',
      'Standard_G5',
      'Standard_GS1',
      'Standard_GS2',
      'Standard_GS3',
      'Standard_GS4',
      'Standard_GS5',
      'Standard_L4s',
      'Standard_L8s',
      'Standard_L16s',
      'Standard_L32s',
      'Standard_F2s_v2',
      'Standard_F4s_v2',
      'Standard_F8s_v2',
      'Standard_F16s_v2',
      'Standard_F32s_v2',
      'Standard_F64s_v2',
      'Standard_F72s_v2',
      'Standard_A8',
      'Standard_A9',
      'Standard_A10',
      'Standard_A11',
      'Standard_H8',
      'Standard_H16',
      'Standard_H8m',
      'Standard_H16m',
      'Standard_H16r',
      'Standard_H16mr',
      'Standard_NV6s_v2',
      'Standard_NV12s_v2',
      'Standard_NV24s_v2',
      'Standard_NV12s_v3',
      'Standard_NV24s_v3',
      'Standard_NV48s_v3',
    ];

    let elements = size.map(size => {
      return <option key={size} value={size}>{size}</option>;
    });
    return (
      <div className="container">
        <Button onClick={this.handleOpenVM}>Create VM</Button>
        <Modal
          aria-labelledby="VM-Modal"
          aria-describedby="simple-modal-description"
          open={this.state.openVM}
          onClose={this.handleCloseVM}
        >
          <div className="paperCard3">
            <h1>Create Virtual Machine</h1>
              
            <TextField
              type="text"
              variant="outlined"
              label="VM Name"
              value={this.state.vmName}
              onChange={(e) => this.setState({vmName: e.target.value})}
            /><br/>
            <TextField
              type="text"
              variant="outlined"
              label="Network Name"
              value={this.state.netName}
              onChange={(e) => this.setState({netName: e.target.value})}
            /><br/>
            <InputLabel htmlFor="filled-size-native-simple">Size</InputLabel>
            <Select
              native
              value={this.state.size}
              onChange={(e) => this.setState({size: e.target.value})}
              input={
                <OutlinedInput
                  name="Size"
                  labelWidth={this.state.labelWidth}
                  id="outlined-size-native-simple"
                />
              }
            >
              {elements}
            </Select><br/>
            <button className="regBut" onClick={ () => {this.submit(this.state.vmName, this.state.netName, this.state.size);} }>Create VM</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CreateVM;