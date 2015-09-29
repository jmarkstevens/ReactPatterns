import React, {Component} from 'react';

var TooltipSty = {
	display: 'inline-block',
	lineHeight: '14px',
	marginRight: '5px',
	verticalAlign: 'top'
};

var helpTip = {
	background: '#5a5e5e',
	border: '1px solid #a3aaaa',
	borderRadius: '50%',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.18)',
	boxSizing: 'border-box',
	color: '#fafafa',
	cursor: 'default',
	fontSize: '11px',
	height: '14px',
	lineHeight: '14px',
	marginTop: '1px',
	textAlign: 'center',
	width: '14px'
};

var contentSty = {
	background: 'rgb(28, 34, 24)',
	border: '1px solid rgba(0, 0, 0, 0.08)',
	borderRadius: '3px',
	boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
	color: '#fff',
	fontSize: '0.9375em',
	lineHeight: '1.2em',
	maxWidth: '280px',
	minWidth: '200px',
	padding: '5px',
	textAlign: 'left',
	wordWrap: 'break-word',
	zIndex: '200'
};

var contentOuterSty = {height: '100%', width: '100%'}

class ContentsRender extends Component {
	render() {
		var contentHtml = this.props.data ? this.props.data : '';
		var active = this.props.tooltipActive;
		var position = this.props.position || null;
		var contentInnerSty = { position: 'absolute' };
		if (active) {
			switch (this.props.place) {
				case 'bottom': contentInnerSty.left = position.right + 5; contentInnerSty.top = position.top + 20; break;
				case 'right': contentInnerSty.left = position.right + 5; contentInnerSty.top = position.top - 10; break;
				case 'top': contentInnerSty.left = position.right + 5; contentInnerSty.top = position.top - 30; break;
			}
		}
		else contentInnerSty.display = 'none';
		var displayContent = {__html: contentHtml};
		return (
			<div id='contentOuterSty' style={contentOuterSty}>
				<div id='contentInnerSty' style={contentInnerSty}>
					<div id='contentSty' style={contentSty}>
						<div dangerouslySetInnerHTML={displayContent} ></div>
					</div>
				</div>
			</div>
		);
	}
}

class Contents extends ContentsRender {}

class JTooltipRender extends Component {
	binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

 	render() {
		var help = '?';
		return(
			<div id='TooltipSty' style={TooltipSty} >
				<div id='events' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
					<div id='helpTip' style={helpTip}>{help}</div>
				</div>
				<Contents tooltipActive={this.state.tooltipActive} place={this.props.place}
					position={this.state.position} data={this.props.data} />
			</div>
		);
	}
}

export default class JTooltip extends JTooltipRender {
	constructor() { 
	  super();
		this.state = {tooltipActive: false, position: {}}; 
	  this.binder('onMouseEnter', 'onMouseLeave');
	}
	onMouseEnter() {
		var rect = React.findDOMNode(this).getBoundingClientRect();
		var position = {};
		position.left = rect.left - this.props.adjust.left;
		position.top = rect.top - this.props.adjust.top;
		position.right = rect.right - this.props.adjust.left;
		position.bottom = rect.bottom - this.props.adjust.top;
		this.setState({ tooltipActive: true, position: position });
	}
	onMouseLeave() { this.setState({ tooltipActive: false }); }
}

