import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {mapStyle} from './mapStyle';

import {mapChangeCenterAction, mapChangeZoomAction, mapInitializedAction} from '../../store/map/map.actions';

const GoogleMapsPageSty = {
  border: 'solid 1px darkslategrey',
  height: '100%',
  overflow: 'hidden',
  padding: '0px',
  width: '100%'
};

const MapSty = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 'auto'
};

function loadJS(src) {
  var ref = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

class GoogleMapsPage extends React.Component {
  state = {mapStyle: MapSty};
  static map;
  static mapRef;
  markers = [];
  componentDidMount() {
    window.initMap = this.initMap;
    if (typeof google !== 'undefined') {
      google.maps = null;
    }
    loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDcsh25a_J-Plt-TjiPNXDvZ-qMnuzt3vc&callback=initMap');
  }
  componentWillReceiveProps(nextProps) {
    if (!this.props.hide && nextProps.markers.length > this.props.markers.length) {
      this.setMarkers(nextProps.markers);
    }
  }
  setMarkers = newMarkers => {
    let _this = this;
    for (let i = 0; i < newMarkers.length; i++) {
      let newMarker = new google.maps.Marker({
        position: newMarkers[i].position,
        map: _this.map
      });
      _this.markers.push(newMarker);
    }
  };
  initMap = () => {
    let _this = this;
    this.map = new google.maps.Map(this.mapRef, {
      center: this.props.mapState.mapCenter,
      zoom: this.props.mapState.mapZoom,
      styles: mapStyle,
      mapTypeId: 'hybrid',
      gestureHandling: 'cooperative'
    });
    this.map.addListener('zoom_changed', function() {
      _this.props.mapChangeZoomAction(_this.map.getZoom());
    });
    this.map.addListener('center_changed', function() {
      const mapCenter = _this.map.getCenter();
      _this.props.mapChangeCenterAction({lat: mapCenter.lat(), lng: mapCenter.lng()});
    });
    if (this.props.markers.length) this.setMarkers(this.props.markers);
  };

  setMapRef = ref => {
    this.mapRef = ref;
    if (!this.state.mapStyle.height) {
      let msty = Object.assign({}, MapSty);
      msty.height = (window.innerHeight - 50) * 0.6 + 'px';
      msty.width = window.innerWidth * 0.7 + 'px';
      this.setState({mapStyle: msty});
    }
  };
  render() {
    return (
      <div id="GoogleMapsPage" style={GoogleMapsPageSty}>
        <div ref={ref => this.setMapRef(ref)} style={this.state.mapStyle} />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {mapState: store.mapState};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({mapChangeCenterAction, mapChangeZoomAction, mapInitializedAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapsPage);
