import React from 'react';

import Actions from '../../flux/Actions';
import TreeView from './../common/jTreeView';

class GenusListRender extends React.Component {
  render() {
    let options = {
      icon: {sun: 'genus', leaf: 'specie', snow: 'sys'},
      typeName: ['node', 'type']
    };
    return (
      <div>
        <TreeView
          data={this.props.data}
          options={options}
          iconClick={this.iconHandler}
          titleClick={this.clickHandler}
        />
      </div>
    );
  }
}

export default class GenusList extends GenusListRender {
  constructor(props) { super(); }
  iconHandler = (node) => { Actions.setGenusNodeClosed(node); };
  clickHandler = (node) => { Actions.selectGenusNode(node); };
}
