import React from 'react';

import AppNotes from './app.notes';
import AppStore from '../stores/App.Store';

import JButton from './common/jButton';
import Gallery from './common/gallery/jGallery';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
}

let basicBtn = { buttonid: "galleryHide", text: "Open Gallery" };

class AppCtrlRender extends React.Component {
   render() {
    let data = {
      PicList: this.state.PicList,
      close: this.galleryHideHandler
    };
    let hideGallery = this.state.hideGallery;
    return (
      <div id='AppCtrlSty' style={AppCtrlSty}>
        <Gallery data={data} hide={hideGallery} />
        React 15 Gallery<br/><br/>
        <JButton btn={basicBtn} parentClickHandler={this.galleryHideHandler} />
        <AppNotes/>
      </div>
    );
  }
}

export default class AppCtrl extends AppCtrlRender {
  state = {
    PicList: AppStore.getData(),
    hideGallery: true
  };

  componentDidMount = () => { this.unsubscribe = AppStore.listen(this.storeDidChange); };
  componentWillUnmount = () => { this.unsubscribe(); };
  storeDidChange = () => { this.setState({PicList: AppStore.getData()}); };
  galleryHideHandler = () => { this.setState({hideGallery: !this.state.hideGallery}); };
}
