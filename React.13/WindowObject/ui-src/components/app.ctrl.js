import React, {Component} from 'react';
import lodash from 'lodash';

var AppCtrlSty = {
	height: '100%',
	padding: '0 10px 0 0'
}

function windowPropsMap(prop) {
	var returnVal;
	var propValue = window[prop];
	if (lodash.isObject(propValue)) return (<div key={prop}></div>);
	else if (lodash.isNull(propValue)) return (<div key={prop}></div>);
	else if (lodash.isBoolean(propValue)) propValue = propValue ? 'true' : 'false';
	return (<div key={prop}>{prop}: {propValue}<br/></div>);
}

function navigatorPropsMap(prop) {
	console.log(prop);
	var returnVal;
	var propValue = window.navigator[prop];
	if (lodash.isObject(propValue)) return (<div key={prop}></div>);
	else if (lodash.isBoolean(propValue)) propValue = propValue ? 'true' : 'false';
	return (<div key={prop}>{prop}: {propValue}<br/></div>);
}

function screenPropsMap(prop) {
	console.log(prop);
	var returnVal;
	var propValue = window.screen[prop];
	if (lodash.isObject(propValue)) return (<div key={prop}></div>);
	else if (lodash.isBoolean(propValue)) propValue = propValue ? 'true' : 'false';
	return (<div key={prop}>{prop}: {propValue}<br/></div>);
}

class AppCtrlRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

	render() {
		var winnavgeolocation = this.state.location;
		var winNav = window.navigator;
		var winScreen = window.screen;
		var windowProps = lodash.keys(window).sort();
		var windowMap = windowProps.map(windowPropsMap);
		var navigatorProps = lodash.keys(winNav).sort();
		var navigatorMap = navigatorProps.map(navigatorPropsMap);
		var screenProps = lodash.keys(winScreen).sort();
		var screenMap = screenProps.map(screenPropsMap);

		var winnavappCodeName = window.navigator.appCodeName;
		var winnavappName = window.navigator.appName;
		var winnavappVersion = window.navigator.appVersion;
		var winnavcookieEnabled = window.navigator.cookieEnabled ? 'true' : 'false';
		var winnavlanguage = window.navigator.language;
		var winnavonLine = window.navigator.onLine ? 'true' : 'false';
		var winnavplatform = window.navigator.platform;
		var winnavproduct = window.navigator.product;
		var winnavuserAgent = window.navigator.userAgent;
		var winnavvendor = window.navigator.vendor;

		var winscrnavailHeight = window.screen.availHeight;
		var winscrnavailLeft = window.screen.availLeft;
		var winscrnavailTop = window.screen.availTop;
		var winscrnavailWidth = window.screen.availWidth;
		var winscrncolorDepth = window.screen.colorDepth;
		var winscrnheight = window.screen.height;
		var winscrnpixelDepth = window.screen.pixelDepth;
		var winscrnwidth = window.screen.width;

		return (
			<div id='AppCtrlSty' style={AppCtrlSty}>
				window.<br/><br/>
				{windowMap}
				<br/>
				window.navigator<br/>
				<br/>
				appCodeName: {winnavappCodeName}<br/>
				appName: {winnavappName}<br/>
				appVersion: {winnavappVersion}<br/>
				cookieEnabled: {winnavcookieEnabled}<br/>
				geolocation: {winnavgeolocation}<br/>
				language: {winnavlanguage}<br/>
				onLine: {winnavonLine}<br/>
				platform: {winnavplatform}<br/>
				product: {winnavproduct}<br/>
				userAgent: {winnavuserAgent}<br/>
				vendor: {winnavvendor}<br/>
				<br/>
				{navigatorMap}
				geolocation: {winnavgeolocation}<br/>
				<br/>
				window.screen<br/>
				<br/>
				availHeight: {winscrnavailHeight}<br/>
				availLeft: {winscrnavailLeft}<br/>
				availTop: {winscrnavailTop}<br/>
				availWidth: {winscrnavailWidth}<br/>
				colorDepth: {winscrncolorDepth}<br/>
				height: {winscrnheight}<br/>
				pixelDepth: {winscrnpixelDepth}<br/>
				width: {winscrnwidth}<br/>
			</div>
		);
	}
}

export default class AppCtrl extends AppCtrlRender {
	constructor() { 
	  super();
		this.state = {location: ''}; 
	  this.binder('showPosition');
	}
	componentDidMount() { 
		if (window.navigator.geolocation) {
	      window.navigator.geolocation.getCurrentPosition(this.showPosition);
	  } else {
	      var x = "Geolocation is not supported by this browser.";
	      this.setState({location: x});
	  }
	}
	showPosition(position) { 
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
    var x = "Latitude: " + lat.toPrecision(6) + "   Longitude: " + lon.toPrecision(7); 
		this.setState({location: x});
	}
}


