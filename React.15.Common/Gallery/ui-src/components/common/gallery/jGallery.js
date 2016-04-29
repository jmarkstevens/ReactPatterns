import React from 'react';
import screenfull from 'screenfull';

import JButton from '../jButton';
import JThumbs from './jThumbs';
import GalleryStyle from './gallery.style';
import Shortcuts from './shortcuts';

class GalleryRender extends React.Component {
   render() {
    if (this.props.hide) return null;
    let btnX;
    let btnX2 = 'fa-2x';
    if (window.screen.width > 2560 || window.screen.height > 2560) btnX = 'fa-3x';
    else btnX = 'fa-2x';
    let closeBtn = { buttonid: "close", icon: 'fa fa-close ' + btnX, style: "BtnImg" };
    let fullBtn = { buttonid: "full", icon: 'fa fa-expand fa-2x', style: "BtnImg" };
    let nextBtn = { buttonid: "next", icon: 'fa fa-chevron-right ' + btnX, style: "BtnImg" };
    let prevBtn = { buttonid: "prev", icon: 'fa fa-chevron-left ' + btnX, style: "BtnImg" };
    let shortcutsBtn = { buttonid: "shortcuts", icon: 'fa fa-keyboard-o ' + btnX, style: "BtnImg" };
    let thumbsOpenColumnBtn = { buttonid: "openThumbs", icon: 'fa fa-film ' + btnX, style: "BtnImg" };
    let thumbsOpenRowBtn = { buttonid: "openThumbs", icon: 'fa fa-film fa-rotate-90 ' + btnX, style: "BtnImg" };

    let PicList = this.props.data.PicList;
    let imageSrc = PicList[this.state.index].lgFolder + PicList[this.state.index].file;
    
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
    
    let copyRight = PicList[this.state.index].copyright;
    let banClass = 'fa fa-close fa-stack-1x';
    return (
      <div id='GallerySty' style={GalleryStyle.GallerySty}>
        <div id='imageThumbDiv' className={imageThumbClass} style={GalleryStyle.imageThumbSty}>
          <div id='imageDiv' style={GalleryImageSty}>
            <div id='status' className='HighZ' style={GalleryStyle.statusSty}>{status}</div>
            <div id='copyRight' style={GalleryStyle.copyRightSty}>{copyRight}</div>
            <div id='actionDiv' className='HighZ' style={GalleryStyle.actionSty} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
              <div id='hoverDiv' style={HoverSty}>
                <div id='prevdiv' style={GalleryStyle.prevSty}>
                  <JButton btn={prevBtn} />
                </div>
                <div id='nextdiv' style={GalleryStyle.nextSty}>
                  <JButton btn={nextBtn} />
                </div>
                <div id='thumbsOpenDiv' style={ThumbsOpenSty}>
                  <JButton btn={thumbsOpenColumnBtn} parentClickHandler={this.hideThumbHandlerP} />
                  &nbsp;
                  <JButton btn={thumbsOpenRowBtn} parentClickHandler={this.hideThumbHandlerL} />
                </div>
                <div id='thumbsClosedDiv' style={ThumbsClosedSty} onClick={this.hideThumbHandler}>
                  <span className="fa-stack fa-2x">
                    <i className='fa fa-film fa-stack-1x'></i>
                    <i className={banClass}></i>
                  </span>
                </div>
                <div id='fulldiv' style={GalleryStyle.fullCloseSty}>
                  <JButton btn={fullBtn} parentClickHandler={this.actionHandler} />
                  &nbsp;
                  <JButton btn={closeBtn} parentClickHandler={this.actionHandler} />
                  &nbsp;
                  <JButton btn={shortcutsBtn} parentClickHandler={this.hideShortcutsHandler} />
                </div>
                <div id='nextPanel' style={GalleryStyle.nextPanelSty} onClick={this.nextIndex}></div>
                <div id='prevPanel' style={GalleryStyle.prevPanelSty} onClick={this.prevIndex}></div>
                <Shortcuts closeHandler={this.hideShortcutsHandler} hide={this.state.hideShortcuts}/>
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

export default class Gallery extends GalleryRender {
  constructor() {
    super();
    this.state = {index: 0, hover: false, hideThumbs: true, thumbColumn: false, hideShortcuts: true};
  }

  componentDidMount = () => { window.addEventListener('keydown', this.keyDownListener); };
  componentWillUnmount = () => { window.removeEventListener('keydown', this.keyDownListener); };
  keyDownListener = (event) => {
    if (this.props.hide) return;
    let intKey = (window.Event) ? event.which : event.keyCode;
    switch (intKey) {
      case 37: this.prevIndex(); event.preventDefault(); break; //<--
      case 39: this.nextIndex(); event.preventDefault(); break; //-->
      case 66: this.hideThumbHandlerL(); event.preventDefault(); break; //b
      case 84: this.hideThumbHandlerP(); event.preventDefault(); break; //x
      case 87: this.actionHandler('full'); event.preventDefault(); break; //w
      case 88: this.actionHandler('close'); event.preventDefault(); break; //x
    }
  };
  actionHandler = (action) => {
    switch (action) {
      case 'close': this.props.data.close(); break;
      case 'full': if (screenfull.enabled) screenfull.request(); break;
    };
  };
  nextIndex = () => {
    let newIndex = this.state.index + 1;
    if (newIndex === this.props.data.PicList.length) newIndex = 0;
    this.setState({index: newIndex});
  };
  prevIndex = () => {
    let newIndex = this.state.index - 1;
    if (newIndex === -1) newIndex = this.props.data.PicList.length - 1;
    this.setState({index: newIndex});
  };
  onMouseEnter = () => { this.setState({hover: true}); };
  onMouseLeave = () => { this.setState({hover: false}); };
  thumbClickHandler = (index) => { this.setState({index: index}); };
  hideShortcutsHandler = () => { this.setState({hideShortcuts: !this.state.hideShortcuts})};
  hideThumbHandler = () => { this.setState({hideThumbs: !this.state.hideThumbs})};
  hideThumbHandlerL = () => { this.setState({hideThumbs: !this.state.hideThumbs, thumbColumn: false})};
  hideThumbHandlerP = () => { this.setState({hideThumbs: !this.state.hideThumbs, thumbColumn: true})};
}

    // let CopyRightSty = Object.assign({}, copyRightSty);
    // if (PicList[this.state.index].copyright) CopyRightSty.display = 'block';
    // else CopyRightSty.display = 'none';
