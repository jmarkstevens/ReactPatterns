import React from 'react';
import screenfull from 'screenfull';

import JButton from '../Button/jButton';
import JThumbs from './jThumbs';
import GalleryStyle from './gallery.style';
import Shortcuts from './shortcuts';

const infoPicCommentSty = {
  background: 'rgba(0, 0, 0, .7)',
  borderRadius: '20px',
  bottom: '0px',
  color: '#ffffff',
  display: 'inline-block',
  maxWidth: '600px',
  padding: '20px',
  position: 'relative',
  textShadow: '0 1px 0px #000, 1px 0 0px #000, 1px 2px 1px #000, 2px 1px 1px #000, 2px 3px 2px #000',
  width: 'auto',
};

const infoCommentOuterSty = {
  bottom: '0',
  position: 'absolute',
  textAlign: 'center',
  width: '100%',
  zIndex: '201'
};

class GalleryRender extends React.Component {
  render() {
    if (this.props.data.length === 0 || this.props.hide) return null;
    let btnX;
    if (window.screen.width > 2560 || window.screen.height > 2560) btnX = 'fa-3x';
    else btnX = 'fa-2x';
    let fullBtnIcon = this.state.isNotExpanded ? 'fa fa-expand fa-2x' : 'fa fa-compress fa-2x';
    let closeBtn = {buttonid: 'close', icon: 'fa fa-close ' + btnX, style: 'BtnImg'};
    let fullBtn = {buttonid: 'full', icon: fullBtnIcon, style: 'BtnImg'};
    let nextBtn = {buttonid: 'next', icon: 'fa fa-chevron-right ' + btnX, style: 'BtnImg'};
    let prevBtn = {buttonid: 'prev', icon: 'fa fa-chevron-left ' + btnX, style: 'BtnImg'};
    let shortcutsBtn = {buttonid: 'shortcuts', icon: 'fa fa-keyboard-o ' + btnX, style: 'BtnImg'};
    let thumbsOpenColumnBtn = {buttonid: 'openThumbs', icon: 'fa fa-film ' + btnX, style: 'BtnImg'};
    let thumbsOpenRowBtn = {buttonid: 'openThumbs', icon: 'fa fa-film fa-rotate-90 ' + btnX, style: 'BtnImg'};
    let InfoCommentOuterSty = Object.assign({}, infoCommentOuterSty);
    let InfoPicCommentSty = Object.assign({}, infoPicCommentSty);

    let PicList = this.props.data;
    let imageSrc = PicList[this.state.index].lgFolder + PicList[this.state.index].FileName;
    
    let GalleryImageSty = Object.assign({}, GalleryStyle.imageDivSty);
    GalleryImageSty.backgroundImage = 'url(' + imageSrc + ')';
    
    let HoverSty = {height: '100%', width: '100%'};
    if (this.state.hover) HoverSty.display = 'block';
    else HoverSty.display = 'none';
    
    let status = (this.state.index + 1) + '/' + PicList.length;
    let imageThumbClass;
    if (this.state.thumbColumn) imageThumbClass = 'FlexBox';
    else imageThumbClass = 'FlexBoxC';
    let ThumbsOpenSty = Object.assign({}, GalleryStyle.thumbsOpenSty);
    let ThumbsClosedSty = Object.assign({}, GalleryStyle.thumbsClosedSty);
    if (this.state.hideThumbs) {
      ThumbsOpenSty.display = 'block';
      ThumbsClosedSty.display = 'none';
    } else {
      ThumbsOpenSty.display = 'none';
      ThumbsClosedSty.display = 'block';
    }
    
    let copyRight = PicList[this.state.index].Copyright;
    let banClass = 'fa fa-close fa-stack-1x';
    
    let comment = PicList[this.state.index].Description;
    InfoCommentOuterSty.display = comment ? 'block' : 'none';
    let showClose = {display: this.props.close ? 'inlineBlock' : 'none'};
    return (
      <div id="GallerySty" style={GalleryStyle.GallerySty}>
        <div id="imageThumbDiv" className={imageThumbClass} style={GalleryStyle.imageThumbSty}>
          <div id="imageDiv" style={GalleryImageSty}>
            <div id="status" className="HighZ" style={GalleryStyle.statusSty}>{status}</div>
            <div id="copyRight" style={GalleryStyle.copyRightSty}>{copyRight}</div>
            <div id="actionDiv" className="HighZ" style={GalleryStyle.actionSty} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
              <div id="hoverDiv" style={HoverSty}>
                <div id="prevdiv" style={GalleryStyle.prevSty}>
                  <JButton btn={prevBtn} />
                </div>
                <div id="nextdiv" style={GalleryStyle.nextSty}>
                  <JButton btn={nextBtn} />
                </div>
                <div id="thumbsOpenDiv" style={ThumbsOpenSty}>
                  <JButton btn={thumbsOpenColumnBtn} parentClickHandler={this.hideThumbHandlerP} />
                  &nbsp;
                  <JButton btn={thumbsOpenRowBtn} parentClickHandler={this.hideThumbHandlerL} />
                </div>
                <div id="thumbsClosedDiv" style={ThumbsClosedSty} onClick={this.hideThumbHandler}>
                  <span className="fa-stack fa-2x">
                    <i className="fa fa-film fa-stack-1x" />
                    <i className={banClass} />
                  </span>
                </div>
                <div id="fulldiv" style={GalleryStyle.fullCloseSty}>
                  <JButton btn={fullBtn} parentClickHandler={this.actionHandler} />
                  <span style={showClose}>
                    &nbsp;
                    <JButton btn={closeBtn} parentClickHandler={this.actionHandler} />
                  </span>
                  &nbsp;
                  <JButton btn={shortcutsBtn} parentClickHandler={this.hideShortcutsHandler} />
                </div>
                <div id="nextPanel" style={GalleryStyle.nextPanelSty} onClick={this.nextIndex} />
                <div id="prevPanel" style={GalleryStyle.prevPanelSty} onClick={this.prevIndex} />
                <Shortcuts closeHandler={this.hideShortcutsHandler} hide={this.state.hideShortcuts} />
              </div>
            </div>
            <div id="InfoCommentOuterSty" style={InfoCommentOuterSty}>
              <div id="InfoPicCommentSty" ref={(ref) => { this.infoComment = ref; }} style={InfoPicCommentSty}>
                {comment}
              </div>
            </div>
          </div>
          <JThumbs
            data={{list: PicList, index: this.state.index}}
            selectHandler={this.thumbClickHandler}
            thumbColumn={this.state.thumbColumn}
            hide={this.state.hideThumbs}
          />
        </div>
      </div>
    );
  }
}

class JGallery extends GalleryRender {
  state = {index: 0, hover: false, hideThumbs: true, thumbColumn: false, hideShortcuts: true, isNotExpanded: true};

  componentDidMount = () => { window.addEventListener('keydown', this.keyDownListener); };
  componentWillUnmount = () => { window.removeEventListener('keydown', this.keyDownListener); };
  keyDownListener = (event) => {
    if (this.props.hide) return;
    let intKey = (window.Event) ? event.which : event.keyCode;
    switch (intKey) {
      case 37: this.prevIndex(); event.preventDefault(); break; //<--
      case 39: this.nextIndex(); event.preventDefault(); break; //-->
      case 66: this.hideThumbHandlerL(); event.preventDefault(); break; //B
      case 84: this.hideThumbHandlerP(); event.preventDefault(); break; //T
      case 83: this.actionHandler('full'); event.preventDefault(); break; //S
      case 88: this.actionHandler('close'); event.preventDefault(); break; //X
    }
  };
  actionHandler = (action) => {
    switch (action) {
      case 'close': this.props.close(); break;
      case 'full': if (screenfull.enabled) { screenfull.toggle(); this.setState({isNotExpanded: !this.state.isNotExpanded}); } break;
    }
  };
  nextIndex = () => {
    let newIndex = this.state.index + 1;
    if (newIndex === this.props.data.length) newIndex = 0;
    this.setState({index: newIndex});
  };
  prevIndex = () => {
    let newIndex = this.state.index - 1;
    if (newIndex === -1) newIndex = this.props.data.length - 1;
    this.setState({index: newIndex});
  };
  onMouseEnter = () => { this.setState({hover: true}); };
  onMouseLeave = () => { this.setState({hover: false}); };
  thumbClickHandler = (index) => { this.setState({index}); };
  hideShortcutsHandler = () => { this.setState({hideShortcuts: !this.state.hideShortcuts}); };
  hideThumbHandler = () => { this.setState({hideThumbs: !this.state.hideThumbs}); };
  hideThumbHandlerL = () => { this.setState({hideThumbs: !this.state.hideThumbs, thumbColumn: false}); };
  hideThumbHandlerP = () => { this.setState({hideThumbs: !this.state.hideThumbs, thumbColumn: true}); };
}

JGallery.propTypes = {
  data: React.PropTypes.array.isRequired,
  hide: React.PropTypes.bool,
  close: React.PropTypes.func
};

module.exports = JGallery;
