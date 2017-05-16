import React from 'react';

import JMultiSelect from '../common/DropDowns/jMultiSelect';

const MultiSelectSty = {
  height: '100%',
  maxWidth: '300px',
  minHeight: '300px',
};

const leafcolor = {
  'value': [],
  'key': 'leaf color',
  'options': [
    {
      'count': 59,
      'label': 'Green on both sides',
      'value': 'allgrn'
    },
    {
      'count': 13,
      'label': 'Whitish bottom side',
      'value': 'whtbot'
    },
    {
      'count': 25,
      'label': 'Moderately pale bottom side',
      'value': 'mpbot'
    },
    {
      'count': 19,
      'label': 'Both sides blue-gray to silver',
      'value': 'allbs'
    },
    {
      'count': 3,
      'label': 'Red, reddish to bronze when new',
      'value': 'newred'
    }
  ]
};

const isDesktop = 1;

export default class MultiSelect extends React.Component {
  state = {currentValue: leafcolor.value}
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
          items={leafcolor.options}
          itemName="leafcolor"
          currentValue={this.state.currentValue}
          placeholderText="Select Leaf Color"
          onChange={this.onJSelect}
          isDesktop={isDesktop}
        />
      </div>
    );
  }
}
