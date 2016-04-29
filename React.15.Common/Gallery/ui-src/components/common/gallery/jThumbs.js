import React from 'react';

let thumbColumnSty = {
  boxSizing: 'border-box',
  flexGrow: '1',
  height: '100%',
  margin: '0px',
  maxWidth: '10%',
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: '0px 10px',
  textAlign: 'center'
};

let thumbRowSty = {
  maxHeight: '13vh',
  margin: '10px 0px 5px',
  overflowY: 'hidden',
  overflowX: 'auto',
  padding: '0px',
  width: '100%',
  whiteSpace: 'nowrap'
};

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

class ListItem extends React.Component {
  constructor(props) { super(); }
  clickHandler = () => { this.props.clickHandler(this.props.index); };
  componentDidUpdate = () => {
    if ((this.props.index == this.props.selected)) {
      ReactDom.findDOMNode(this).scrollIntoView({behavior: "smooth"});
      this.props.afterScroll();
    }
  };
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
      <div id='ThumbColumnItemSty' style={ThumbDivSty} >
        <img id='ThumbColumnImgSty' src={src} onClick={this.clickHandler} style={ThumbImgSty} />
      </div>
    )
  }
}

function listMap(item, index) {
  return (
    <ListItem
      key={index} item={item} index={index}
      selected={this.props.data.index}
      clickHandler={this.props.selectHandler}
      afterScroll={this.afterScroll}
      thumbColumn={this.props.thumbColumn}
    >
    </ListItem>
  );
}

export default class ThumbColumn extends React.Component {
  constructor(props) { super(); }
  afterScroll = () => {
    let thisElement = ReactDom.findDOMNode(this);
    let thisElementScrollTop = thisElement.scrollTop;
    if (thisElement.scrollHeight - thisElementScrollTop != thisElement.clientHeight) {
      thisElement.scrollTop = thisElementScrollTop - 300;
    }
  };
  componentWillReceiveProps = () => {
    if (!this.props.hide) ReactDom.findDOMNode(this).scrollTop = 0;
  };
  render() {
    if (this.props.hide) return null;
    let children = this.props.data.list.map(listMap, this);
    let ThumbColumnSty;
    if (this.props.thumbColumn) ThumbColumnSty = Object.assign({}, thumbColumnSty);
    else ThumbColumnSty = Object.assign({}, thumbRowSty);
    return (
      <div id='ThumbColumnSty' style={ThumbColumnSty}>
        {children}
      </div>
    );
  }
}
