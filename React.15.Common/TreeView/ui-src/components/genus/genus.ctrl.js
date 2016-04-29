import React from 'react';

import GenusList from './genus.list';

export default class GenusCtrl extends React.Component {
   render() {
    return (
      <div>
        <GenusList data={this.props.genusList} />
      </div>
    );
  }
}
