import React from 'react';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

class locationDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelWidth: 0,
    };
  }
  
  handleLocation = (location) => {
    this.props.onChange(location);
  }
  
  render() {
    let locations = [
      "",
      "eastasia",
      "southeastasia",
      "centralus",
      "eastus",
      "eastus2",
      "westus",
      "northcentralus",
      "southcentralus",
      "northeurope",
      "westeurope",
      "japanwest",
      "japaneast",
      "brazilsouth",
      "australiaeast",
      "australiasoutheast",
      "southindia",
      "centralindia",
      "westindia",
      "canadacentral",
      "canadaeast",
      "uksouth",
      "ukwest",
      "westcentralus",
      "westus2",
      "koreacentral",
      "koreasouth",
      "francecentral",
      "francesouth",
      "australiacentral",
      "australiacentral2",
      "southafricanorth",
      "southafricawest"
    ];

    let elements = locations.map(loc => {
      return <option key={loc} value={loc}>{loc}</option>;
    });
    return (
      <div className="container">
        <InputLabel htmlFor="filled-age-native-simple">Location</InputLabel>

        <div>

          <Select
            native
            value={this.state.location}
            onChange={(e) => this.handleLocation(e.target.value)}
            input={
              <OutlinedInput
                name="Location"
                labelWidth={this.state.labelWidth}
                id="outlined-location-native-simple"
              />
            }
          >
            {elements}
          </Select>
        </div>
      </div>
        
    );
  }
}
  
export default locationDropDown;
  