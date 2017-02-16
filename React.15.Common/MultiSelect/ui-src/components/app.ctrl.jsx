import React from 'react';

// import AppNotes from './app.notes';
import JMultiSelect from './common/mSelect/jmSelect';
import JSelect from './common/jSelect/jmSelect';

const AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

const typeAheadContainerSty = {width: '300px'};
const jSelectContainerSty = {width: '200px'};

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

export default class AppCtrl extends React.Component {
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
  _handleItemRemoved = (item, selectedItems) => {
    console.log(item + ' was removed from the list');
    console.log('selectedItems: ', selectedItems);
  }
  _handleItemSelected = (item, selectedItems) => {
    console.log(item + ' was selected from the list');
    console.log('selectedItems: ', selectedItems);
  }
  render() {
    return (
      <div id="AppCtrlSty" className="FlexBoxJustAround" style={AppCtrlSty}>
        <div id="jSelect container" style={jSelectContainerSty}>
          <button onClick={this.clickHandler} style={{color: 'black'}}> Clear</button>
          <br /><br /><br />
          <JSelect
            items={sunExposure.options}
            itemName="sunexposure"
            currentValue={this.state.currentValue}
            placeholderText="Select Sun Exposure"
            onChange={this.onJSelect}
            isDesktop={isDesktop}
          />
        </div>
        <div id="JMultiSelect container" style={typeAheadContainerSty}>
          <JMultiSelect
            items={[
              'JPMorgan Chase',
              'Bank of America',
              'Citigroup',
              'Wells Fargo',
              'The Bank of New York Mellon',
              'U.S. Bancorp',
              'HSBC Bank USA',
              'Capital One',
              'PNC Financial Services',
              'State Street Corporation'
            ]}
            placeholderText="Select a Bank"
            preSelectedItems={[
              'Bank of America',
              'Wells Fargo'
            ]}
            onItemRemove={this._handleItemRemoved}
            onItemSelect={this._handleItemSelected}
          />
        </div>
      </div>
    );
  }
}
