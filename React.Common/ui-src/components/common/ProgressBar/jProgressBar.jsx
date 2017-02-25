import React from 'react';

let defaultCountSty = {
  backgroundColor: '#4d2c3d',
  height: '12px',
  marginRight: '5px',
  marginTop: '4px',
  width: '100%'
};

let defaultIndexSty = {backgroundColor: '#ab9353', height: '6px', borderTop: '3px solid #4d2c3d', width: '1%'};
let centerSty = {color: '#e9e7da', marginLeft: 'auto', marginRight: 'auto', marginTop: '-33px'};
let numberSty = {color: '#e9e7da'};

const JProgressBar = (props) => {
  if (!props.data) return null;
  let progressSty = {fontSize: '1em', width: '100%'};
  let count = props.data.count;
  let index = props.data.index;
  let perc = index/count * 100;
  let percentage = perc > 50 ? Math.floor(perc) : Math.ceil(perc);

  let countSty = props.countSty ? Object.assign({}, props.countSty) : Object.assign({}, defaultCountSty);
  let indexSty = props.indexSty ? Object.assign({}, props.indexSty) : Object.assign({}, defaultIndexSty);
  indexSty.width = percentage + '%';
  countSty.backgroundColor = props.countColor ? props.countColor : defaultCountSty.backgroundColor;
  indexSty.backgroundColor = props.indexColor ? props.indexColor : defaultIndexSty.backgroundColor;
  indexSty.borderTopColor = countSty.backgroundColor;

  let barRender = (
    <div id="countSty" style={countSty}>
      <div id="indexSty" style={indexSty} />
    </div>
  );

  let progressRender = '';
  let position = props.position ? props.position : 'center';
  switch (position) {
    case 'center': progressRender = (
      <div id="JProgressBar" style={progressSty}>
        {barRender}<br />
        <div style={{textAlign: 'center', width: '100%'}}>
          <div style={centerSty}>{index}&nbsp;/&nbsp;{count}</div>
        </div>
      </div>
    ); break;
    case 'after': progressRender = (
      <div id="JProgressBar" className="FlexBox" style={progressSty}>
        {barRender}
        <span style={numberSty}>{index}&nbsp;/&nbsp;{count}</span>
      </div>
    ); break;
    case 'before': progressRender = (
      <div id="JProgressBar" className="FlexBox" style={progressSty}>
        <span style={numberSty}>{index}&nbsp;/&nbsp;{count}&nbsp;</span>
        {barRender}
      </div>
    ); break;
    case 'beforenafter': progressRender = (
      <div id="JProgressBar" className="FlexBox" style={progressSty}>
        <span style={numberSty}>{index}&nbsp;</span>
        {barRender}
        &nbsp;<span style={numberSty}>{count}</span>
      </div>
    ); break;
    case 'none': progressRender = (
      <div id="JProgressBar" style={progressSty}>
        {barRender}
      </div>
    ); break;
  }
  return progressRender;
};

export default JProgressBar;
