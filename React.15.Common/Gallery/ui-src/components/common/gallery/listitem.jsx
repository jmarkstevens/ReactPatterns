import React from 'react';

let ThumbColumnItemSty = {
  background: 'transparent',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  marginBottom: '10px',
  marginRight: 'auto',
  marginLeft: 'auto',
  textAlign: 'center',
  width: 'calc(100% - 4px)'
};

let ThumbRowItemSty = {
  background: 'transparent',
  display: 'inline-block',
  verticalAlign: 'middle'
};

let thumbImageSty = {
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: 'calc(100% - 6px)',
  maxHeight: 'calc(13vh - 41px)',
  width: 'auto',
  height: 'auto'
};

export default class ListItem extends React.Component {
  componentDidUpdate = () => {
    if ((this.props.index == this.props.selected)) {
      ReactDom.findDOMNode(this).scrollIntoView({behavior: 'smooth'});
      this.props.afterScroll();
    }
  };
  clickHandler = () => { this.props.clickHandler(this.props.index); };
  render() {
    let thumbColumnImgBorder;
    if (this.props.index == this.props.selected) thumbColumnImgBorder = '3px solid rgb(220, 112, 24)';
    else thumbColumnImgBorder = '3px solid transparent';
    
    let ThumbDivSty;
    if (this.props.thumbColumn) ThumbDivSty = Object.assign({}, ThumbColumnItemSty);
    else ThumbDivSty = Object.assign({}, ThumbRowItemSty);
    // ThumbDivSty.backgroundImage = 'url(' + src + ')';
    let ThumbImgSty = Object.assign({}, thumbImageSty);
    ThumbImgSty.border = thumbColumnImgBorder;
    let src = this.props.item.smFolder + this.props.item.file;
    return (
      <div id="ThumbColumnItemSty" style={ThumbDivSty} >
        <img id="ThumbColumnImgSty" src={src} onClick={this.clickHandler} style={ThumbImgSty} />
      </div>
    );
  }
}
