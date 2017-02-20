import React from 'react';
import lodash from 'lodash';

let AppCtrlSty = {
  height: '100%',
  padding: '0 10px 0 0'
};

function windowPropsMap(prop) {
  let propValue = window[prop];
  if (lodash.isObject(propValue)) return (<div key={prop} />);
  else if (lodash.isNull(propValue)) return (<div key={prop} />);
  else if (lodash.isBoolean(propValue)) propValue = propValue ? 'true' : 'false';
  return (<div key={prop}>{prop}: {propValue}<br /></div>);
}

function navigatorPropsMap(prop) {
  console.log(prop);
  let propValue = window.navigator[prop];
  if (lodash.isObject(propValue)) return (<div key={prop} />);
  else if (lodash.isBoolean(propValue)) propValue = propValue ? 'true' : 'false';
  return (<div key={prop}>{prop}: {propValue}<br /></div>);
}

export default class AppCtrl extends React.Component {
  state = {location: ''};
  componentDidMount = () => {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
        let x = 'Geolocation is not supported by this browser.';
        this.setState({location: x});
    }
  };
  showPosition = (position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let x = 'Latitude: ' + lat.toPrecision(6) + '   Longitude: ' + lon.toPrecision(7);
    this.setState({location: x});
  };
  render() {
    let winnavgeolocation = this.state.location;
    let winNav = window.navigator;
    // let winScreen = window.screen;
    let windowProps = lodash.keys(window).sort();
    let windowMap = windowProps.map(windowPropsMap);
    let navigatorProps = lodash.keys(winNav).sort();
    let navigatorMap = navigatorProps.map(navigatorPropsMap);
    // let screenProps = lodash.keys(winScreen).sort();
    // let screenMap = screenProps.map(screenPropsMap);

    let winnavappCodeName = window.navigator.appCodeName;
    let winnavappName = window.navigator.appName;
    let winnavappVersion = window.navigator.appVersion;
    let winnavcookieEnabled = window.navigator.cookieEnabled ? 'true' : 'false';
    let winnavlanguage = window.navigator.language;
    let winnavonLine = window.navigator.onLine ? 'true' : 'false';
    let winnavplatform = window.navigator.platform;
    let winnavproduct = window.navigator.product;
    let winnavuserAgent = window.navigator.userAgent;
    let winnavvendor = window.navigator.vendor;

    let winscrnavailHeight = window.screen.availHeight;
    let winscrnavailLeft = window.screen.availLeft;
    let winscrnavailTop = window.screen.availTop;
    let winscrnavailWidth = window.screen.availWidth;
    let winscrncolorDepth = window.screen.colorDepth;
    let winscrnheight = window.screen.height;
    let winscrnpixelDepth = window.screen.pixelDepth;
    let winscrnwidth = window.screen.width;

    return (
      <div id="AppCtrlSty" style={AppCtrlSty}>
        window.<br /><br />
        {windowMap}
        <br />
        window.navigator<br />
        <br />
        appCodeName: {winnavappCodeName}<br />
        appName: {winnavappName}<br />
        appVersion: {winnavappVersion}<br />
        cookieEnabled: {winnavcookieEnabled}<br />
        geolocation: {winnavgeolocation}<br />
        language: {winnavlanguage}<br />
        onLine: {winnavonLine}<br />
        platform: {winnavplatform}<br />
        product: {winnavproduct}<br />
        userAgent: {winnavuserAgent}<br />
        vendor: {winnavvendor}<br />
        <br />
        {navigatorMap}
        geolocation: {winnavgeolocation}<br />
        <br />
        window.screen<br />
        <br />
        availHeight: {winscrnavailHeight}<br />
        availLeft: {winscrnavailLeft}<br />
        availTop: {winscrnavailTop}<br />
        availWidth: {winscrnavailWidth}<br />
        colorDepth: {winscrncolorDepth}<br />
        height: {winscrnheight}<br />
        pixelDepth: {winscrnpixelDepth}<br />
        width: {winscrnwidth}<br />
      </div>
    );
  }
}

// function screenPropsMap(prop) {
//   console.log(prop);
//   let propValue = window.screen[prop];
//   if (lodash.isObject(propValue)) return (<div key={prop} />);
//   else if (lodash.isBoolean(propValue)) propValue = propValue ? 'true' : 'false';
//   return (<div key={prop}>{prop}: {propValue}<br /></div>);
// }
