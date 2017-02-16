import React from 'react';

let listSty = {};
let listStyle = {
  height: '100%',
  margin: '-24px 0 0 4px',
  width: 'calc(100% - 8px)'
};

let lineSty = {};
let lineStyle = {
  color: '#FBF7C3',
  height: '100%',
  zIndex: '3'
};

let imageStyle = {borderImageWidth: '0px', height: '100%', width: '100%'};
let imageDivStyle = {
  border: 'none',
  borderImageWidth: '0px',
  height: '24px',
  left: '0px',
  position: 'relative',
  top: '0px',
  width: '100%'
};

let indexAdjust = 0;

function divColorMap(item, index) {
  imageDivStyle.backgroundColor = 'transparent';
  lineSty = lineStyle;
  let id = index + indexAdjust;
  return (
    <div
      style={lineSty}
      key={index}
      className="FlexItem"
      draggable="true"
      onDragStart={this.onThisDragStart}
      onDragEnter={this.onThisDragEnter}
      onDragOver={this.onThisDragOver}
      onDrop={this.onThisDragEnd}
      onTouchStart={this.onThisTouchStart}
      onTouchMove={this.onThisTouchMove}
      onTouchEnd={this.onThisTouchEnd}
      onTouchCancel={this.onThisTouchEnd}
    >
      <div style={imageDivStyle}><img id={id} src="./img/1x1TransShim.gif" style={imageStyle} /></div>
    </div>
  );
}

class JRangeSliderDnd extends React.Component {

  onThisDragStart = (event) => {
    event.dataTransfer.effectAllowed = 'all';
    let img = document.createElement('img');
    img.src = './img/1x1TransShim.gif';
    event.dataTransfer.setDragImage = (img, 1, 1);
    let itemID = event.target.id;
    if (isNaN(itemID) || itemID.length == 0) {
      event.preventDefault();
      return;
    }
    this.isLow = (Math.abs(this.props.sliderObj.low - itemID) < 5);
    if (this.isLow && this.props.sliderObj.isSingle) this.isLow = false;
    this.isHigh = (Math.abs(this.props.sliderObj.high - itemID) < 5);
    if (this.isLow || this.isHigh) {
      this.props.sliderStartChange(itemID);
    } else {
      event.preventDefault();
    }
  };
  
  onThisDragEnter = (event) => {
    event.preventDefault();
  };
  
  onThisDragOver = (event) => {
    event.preventDefault();
    let itemID = event.target.id;
    if (isNaN(itemID) || itemID.length == 0 || (this.overID == itemID)) return;
    this.overID = itemID;
    this.props.sliderChange(itemID);
  };
  
  onThisDragEnd = (event) => {
    event.preventDefault();
    let itemID = event.target.id;
    if (isNaN(itemID) || itemID.length == 0 || this.overID == itemID) return;
    else this.props.sliderChange(itemID);
  };
  
  onThisTouchStart = (event) => {
    event.preventDefault();
    let itemID = event.target.id;
    if (isNaN(itemID) || itemID.length == 0) return;
    this.isLow = (Math.abs(this.props.sliderObj.low - itemID) < 5);
    if (this.isLow && this.props.sliderObj.isSingle) this.isLow = false;
    this.isHigh = (Math.abs(this.props.sliderObj.high - itemID) < 5);
    if (this.isLow || this.isHigh) {
      this.props.sliderStartChange(itemID);
    } else {
      event.preventDefault();
    }
  };
  
  onThisTouchMove = (event) => {
    event.preventDefault();
    let lastTouch = event.touches.length - 1;
    let x = event.touches[lastTouch].pageX;
    let y = event.touches[lastTouch].pageY;
    let element = document.elementFromPoint(x, y);
    let itemID = element.id;
    if (isNaN(itemID) || itemID.length == 0 || (this.overID == itemID) || !(this.isLow || this.isHigh)) return;
    else {
      this.overID = itemID;
      this.props.sliderChange(itemID);
    }
  };
  
  onThisTouchEnd = (event) => {
    event.preventDefault();
    let lastTouch = event.changedTouches.length - 1;
    let x = event.changedTouches[lastTouch].pageX;
    let y = event.changedTouches[lastTouch].pageY;
    let element = document.elementFromPoint(x, y);
    let itemID = element.id;
    if (isNaN(itemID) || itemID.length == 0 || (this.overID == itemID) || !(this.isLow || this.isHigh)) return;
    else {
      this.props.sliderChange(itemID);
    }
  };

  isHigh = false;
  overID = '';
  isLow = false;
  
  render() {
    let sizeFactor = this.props.sliderObj.size ? this.props.sliderObj.size : 1;
    let size24 = Math.round(24 * sizeFactor);
    listStyle.margin = '-' + size24 + 'px 0 0 4px';
    imageDivStyle.height = size24 + 'px';
    listSty = listStyle;
    indexAdjust = this.props.sliderObj.min;

    let imgCnt = (this.props.sliderObj.max - this.props.sliderObj.min) / this.props.sliderObj.step;
    let imgArray = new Array(imgCnt + 1);
    imgArray.fill('0');
    let vm = this;
    let list = imgArray.map(divColorMap, vm);
    return (
      <div id="SliderDndSty" className="FlexBox Stretch" style={listSty}>
        {list}
      </div>
    );
  }
}

let sliderValueSty = {
  height: '100%',
  width: '100%'
};

let LowButtonSty = {
  backgroundColor: '#4d2c3d',
  border: 'none',
  borderRadius: '50%',
  color: '#e9e7da',
  height: '24px',
  lineHeight: 'normal',
  marginTop: '0px',
  padding: '0px',
  width: '24px',
  zIndex: '2'
};

let HighButtonSty = {
  backgroundColor: '#4d2c3d',
  border: 'none',
  borderRadius: '50%',
  color: '#e9e7da',
  height: '24px',
  lineHeight: 'normal',
  marginTop: '0px',
  padding: '0px',
  width: '24px',
  zIndex: '2'
};

let defaultCountSty = {
  backgroundColor: '#4d2c3d',
  height: '12px',
  margin: '-18px 0 0',
  width: '100%'
};

let defaultIndexSty = {
  backgroundColor: '#ab9353',
  position: 'relative',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100%'
};

function JRangeSliderValue({sliderObj}) {
  let highButtonSty = Object.assign({}, HighButtonSty);
  let lowButtonSty = Object.assign({}, LowButtonSty);

  let sizeFactor = sliderObj.size ? sliderObj.size : 1;
  let size24 = Math.round(24 * sizeFactor);
  let size18 = Math.round(size24 * .75);
  let size12 = Math.round(size24 * .5);
  let size6 = Math.round(size12 * .5);
  let size3 = Math.round(size6 * .5);
  // lowButtonSty.borderRadius = size24 + 'px';
  lowButtonSty.height = size24 + 'px';
  lowButtonSty.width = size24 + 'px';
  // highButtonSty.borderRadius = size24 + 'px';
  highButtonSty.height = size24 + 'px';
  highButtonSty.width = size24 + 'px';
  defaultCountSty.borderRadius = size6 + 'px';
  defaultCountSty.height = size12 + 'px';
  defaultCountSty.margin = '-' + size18 + 'px 0 0 0px';
  defaultIndexSty.height = size3 + 'px';
  defaultIndexSty.borderRadius = size3 + 'px';
  let font1 = Math.round(1 * sizeFactor);
  let font7 = Math.round(.7 * sizeFactor);
  let count = sliderObj.max - sliderObj.min;
  let factor = 100 / count;

  let lowValue = sliderObj.low;
  let highValue = sliderObj.high;
  let highLowDiff = highValue - lowValue;

  let leftValue = lowValue - sliderObj.min;
  let lowMargin = Math.floor(leftValue * factor);
  let buttonDivSty = {};
  let highAdjust = 0;

  if (sliderObj.isSingle) {
    buttonDivSty.width = 'calc(100% - 0px)';
    lowButtonSty.marginLeft = '0px';
    lowButtonSty.display = 'none';
    highAdjust = 24 * sizeFactor;
  } else {
    buttonDivSty.width = 'calc(100% - 0px)';
    lowButtonSty.marginLeft = lowMargin + '%';
    lowButtonSty.display = 'block';
    highAdjust = 48 * sizeFactor;
  }
  lowButtonSty.fontSize = lowValue > 99 ? font7 + 'em' : font1 + 'em';


  let highMargin = Math.ceil(highLowDiff * factor);
  highButtonSty.marginLeft = 'calc(' + highMargin + '% - ' + highAdjust + 'px)';
  highButtonSty.fontSize = highValue > 99 ? font7 + 'em' : font1 + 'em';

  let percentage = Math.floor(highLowDiff * factor);

  let countSty = Object.assign({}, defaultCountSty);
  countSty.backgroundColor = '#4d2c3d';

  let indexSty = Object.assign({}, defaultIndexSty);
  indexSty.width = percentage + '%';
  indexSty.marginLeft = lowButtonSty.marginLeft;
  indexSty.backgroundColor = '#ab9353';
  indexSty.borderTopColor = countSty.backgroundColor;

  return (
    <div id="sliderValueSty" style={sliderValueSty}>
      <div id="buttonDiv" className="FlexBox" style={buttonDivSty}>
        <button id="lowButtonSty" style={lowButtonSty}>{lowValue}</button>
        <button id="highButtonSty" style={highButtonSty}>{highValue}</button>
      </div>
      <div id="countSty" style={countSty}>
        <div id="indexSty" style={indexSty} />
      </div>
    </div>
  );
}

let SliderCtrlSty = {
  height: '24px',
  margin: '0 10px',
  width: 'calc(100% - 20px)'
};

export default class JRangeSlider extends React.Component {
  valueAdjust = 0;
  isLowValue = true;
  sliderStartChange = (index) => {
    this.isLowValue = (Math.abs(this.props.sliderObj.low - index) < 5);
    // let value = this.isLowValue ? this.props.sliderObj.low : this.props.sliderObj.high;
  };
  sliderChange = (value) => {
    let newValue = value;
    if (this.isLowValue) newValue = Math.max(newValue, this.props.sliderObj.min);
    else newValue = Math.min(newValue, this.props.sliderObj.max);
    let sliderName = this.props.sliderObj.name;
    if (this.isLowValue) this.props.handleChange(sliderName, 'low', newValue);
    else this.props.handleChange(sliderName, 'high', newValue);
  };
  render() {
    let sizeFactor = this.props.sliderObj.size ? this.props.sliderObj.size : 1;
    let size24 = Math.round(24 * sizeFactor);
    SliderCtrlSty.height = size24 + 'px';
    return (
      <div
        id="SliderCtrlSty"
        style={SliderCtrlSty}
      >
        <JRangeSliderValue sliderObj={this.props.sliderObj} />
        <JRangeSliderDnd
          sliderObj={this.props.sliderObj}
          sliderChange={this.sliderChange}
          sliderStartChange={this.sliderStartChange}
          heightAdjust={SliderCtrlSty.height}
        />
      </div>
    );
  }
}
