import React from 'react';

import JMultiSelect from '../common/DropDowns/jMultiSelect';

const MultiSelectSty = {
  height: '100%',
  maxWidth: '200px',
  minHeight: '300px',
};

let sunExposure = {
  'value': [],
  'key': 'SunFilter',
  'options': [
    {
      'count': 77,
      'label': 'Full',
      'value': 'full'
    },
    {
      'count': 24,
      'label': 'Gradual',
      'value': 'grad'
    },
    {
      'count': 49,
      'label': 'Partial',
      'value': 'part'
    },
    {
      'count': 14,
      'label': 'Shade',
      'value': 'shade'
    }
  ]
};

const isDesktop = 1;

export default class MultiSelect extends React.Component {
  state = {currentValue: sunExposure.value}
  onJSelect = (itemName, selectedItems) => {
    let newValue = [];
    selectedItems.forEach(item => newValue.push(item.value));
    console.log('itemName: ', itemName);
    console.log('newValue: ', newValue);
    this.setState({currentValue: newValue});
  }
  clickHandler = () => {
    this.setState({currentValue: []});
  }
  render() {
    return (
      <div id="MultiSelect" style={MultiSelectSty}>
        <button onClick={this.clickHandler} style={{color: 'black'}}> Clear</button>
        <br /><br /><br />
        <JMultiSelect
          items={sunExposure.options}
          itemName="sunexposure"
          currentValue={this.state.currentValue}
          placeholderText="Select Sun Exposure"
          onChange={this.onJSelect}
          isDesktop={isDesktop}
        />
      </div>
    );
  }
}
