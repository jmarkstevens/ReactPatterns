import React from 'react';
import {connect} from 'react-redux';

import AppNotes from '../common/app.notes';
import AppText from './app.text';

import JButton from '../common/Button/jButton';
import JGallery from '../common/Gallery/jGallery';

let GallerySty = {
  borderBottom: '3px solid #636b46',
  padding: '0 10px 0 0'
};

let basicBtn = {buttonid: 'galleryHide', text: 'Open Gallery'};

class Gallery extends React.Component {
  state = {hideGallery: true};
  galleryHideHandler = () => { this.setState({hideGallery: !this.state.hideGallery}); };
  render() {
    if (this.props.hide) return null;
    let data = this.props.picList;
    let hideGallery = this.state.hideGallery;
    return (
      <div id="Gallery" className="contentPage" style={GallerySty}>
        <JGallery close={this.galleryHideHandler} data={data} hide={hideGallery} />
        <br /><br />
        <JButton btn={basicBtn} parentClickHandler={this.galleryHideHandler} />
        <AppNotes AppText={AppText.p1Text} />
      </div>
    );
  }
}

function mapStateToProps(store) { return {picList: store.galleryState.picList}; }

export default connect(mapStateToProps, null)(Gallery);
