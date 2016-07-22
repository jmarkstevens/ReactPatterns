import React from 'react';

import JTreeViewB from './../common/jTreeViewB';

const options = {
  icon: {sun: 1, leaf: 2, snow: 3},
  typeName: ['node', 'nodeLevel']
};

export default class JumpCtrl extends React.Component {
   render() {
    return (
      <div id='JumpCtrl'>
        <JTreeViewB data={this.props.imageList} options={options} titleClick={this.props.clickHandler} />
      </div>
    );
  }
}
