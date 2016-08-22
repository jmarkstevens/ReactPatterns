import React from 'react';

import JTreeViewB from './../common/jTreeViewB';

const options = {
  icon: {sun: 1, leaf: 2, snow: 3},
  typeName: ['node', 'nodeLevel']
};

export default function JumpCtrl({imageList, clickHandler}) {
  return (
    <div id="JumpCtrl">
      <JTreeViewB data={imageList} options={options} titleClick={clickHandler} />
    </div>
  );
}
