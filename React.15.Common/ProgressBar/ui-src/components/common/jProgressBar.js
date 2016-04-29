import React from 'react';

let defaultCountSty = {
  backgroundColor: '#33045B',
  height: '12px',
  marginRight: '5px',
  marginTop: '4px',
  width: '100%'
}

let defaultIndexSty = {backgroundColor: '#874C08', height: '6px', borderTop: '3px solid #33045B', width: '1%'}
let centerSty = {marginLeft: 'auto', marginRight: 'auto', marginTop: '-33px'}

export default class JProgressBar extends React.Component {
  render() {
    if (!this.props.data) return null;
    let count = this.props.data.count;
    let index = this.props.data.index;
    let percentage = Math.floor(index/count * 100);

    let countSty = this.props.countSty ? this.props.countSty : defaultCountSty;
    let indexSty = this.props.indexSty ? this.props.indexSty : defaultIndexSty;
    indexSty.width = percentage + '%';
    countSty.backgroundColor = this.props.countColor ? this.props.countColor : '#33045B';
    indexSty.backgroundColor = this.props.indexColor ? this.props.indexColor : '#874C08';
    indexSty.borderTopColor = countSty.backgroundColor;

    let barRender = (
      <div id='countSty' style={countSty}>
        <div
          id='indexSty'
          style={{
            backgroundColor: indexSty.backgroundColor,
            height: indexSty.height,
            borderTop: indexSty.borderTop,
            width: indexSty.width
          }}
        ></div>
      </div>
    );

    let progressRender = '';
    let position = this.props.position ? this.props.position : 'center';
    switch (position) {
      case 'center': progressRender = (
        <div id='JProgressBar' style={{width: '100%'}}>
          {barRender}<br/>
          <div style={{textAlign: 'center', width: '100%'}}>
            <div style={centerSty}>{index}&nbsp;/&nbsp;{count}</div>
          </div>
        </div>
      ); break;
      case 'after': progressRender = (
        <div id='JProgressBar' className='FlexBox' style={{width: '100%'}}>
          {barRender}
          {index}&nbsp;/&nbsp;{count}
        </div>
      ); break;
      case 'before': progressRender = (
        <div id='JProgressBar' className='FlexBox' style={{width: '100%'}}>
          {index}&nbsp;/&nbsp;{count}&nbsp;
          {barRender}
        </div>
      ); break;
      case 'beforenafter': progressRender = (
        <div id='JProgressBar' className='FlexBox' style={{width: '100%'}}>
          {index}&nbsp;
          {barRender}
          &nbsp;{count}
        </div>
      ); break;
      case 'none': progressRender = (
        <div id='JProgressBar' style={{width: '100%'}}>
          {barRender}
        </div>
      ); break;
    }
    return progressRender;
  }
}
