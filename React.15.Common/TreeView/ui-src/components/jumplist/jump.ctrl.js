import React from 'react';

import JumpList from './jump.list';

export default class JumpCtrl extends React.Component {
   render() {
    return (
      <div id='JumpCtrl'>
        <JumpList data={this.props.imageList} clickHandler={this.props.clickHandler} />
      </div>
    );
  }
}
