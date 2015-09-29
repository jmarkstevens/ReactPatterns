import React, {Component} from 'react';
import emptyFunction from 'react/lib/emptyFunction';
import reactMixin from 'react-mixin';

var PropTypes = React.PropTypes;

var event = {};

event.isTouchDevice = function () {
  if ('ontouchstart' in window || 'ontouchstart' in document) return true; 
  var touchPoints = navigator.msMaxTouchPoints || navigator.maxTouchPoints;
  if (touchPoints) return true;
  return false;
}

event.dragEventFor = (function () {
  var eventsFor = {
    touch: {start: 'touchstart', move: 'touchmove', end: 'touchend'},
    mouse: {start: 'mousedown', move: 'mousemove', end: 'mouseup' }
  };
  return eventsFor[event.isTouchDevice() ? 'touch' : 'mouse'];
})()

event.addEvent = function (el, event, handler) {
  if (!el) return;
  if (el.attachEvent) el.attachEvent('on' + event, handler);
  else if (el.addEventListener) el.addEventListener(event, handler, true);
  else el['on' + event] = handler;
}

event.removeEvent = function (el, event, handler) {
  if (!el) return;
  if (el.detachEvent) el.detachEvent('on' + event, handler);
  else if (el.removeEventListener) el.removeEventListener(event, handler, true);
  else el['on' + event] = null;
}

class CursorRender extends Component {
  binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

  render() {
    var cursorSty = this.getStyle(this.props.classSty, this.props.hidden);
    return (
      <div
        id='Cursor'
        style={cursorSty}
        onMouseDown={this.props.onDragStart}
        onTouchStart={this.touchStartHandle}
        onMouseUp={this.props.onDragEnd}
        onTouchEnd={this.props.onDragEnd}
        axis={this.props.axis}
        offset={this.props.offset}
        ref={this.props.ref}
        key={this.props.key}
        hidden={this.props.hidden}
        zIndex={this.props.zIndex}
        >
        {this.props.children}
      </div>
    );
  }
}

class Cursor extends CursorRender {
  constructor() { 
    super();
    this.binder('getStyle', 'touchStartHandle');
  }

	getStyle(classSty, hidden) {
		var transform = 'translate' + this.props.axis + '(' + this.props.offset + 'px)';
		classSty.WebkitTransform = transform;
		classSty.MozTransform = transform;
		classSty.msTransform = transform;
		classSty.OTransform = transform;
		classSty.transform = transform;
		classSty.position = 'absolute';
		classSty.display = hidden ? 'none' : 'block';

		return classSty
	}

  touchStartHandle(e) {
    e.preventDefault(); // prevent for scroll
    return this.props.onDragStart.apply(null, arguments);
  }
}

Cursor.propTypes = {
  axis: PropTypes.oneOf(['X', 'Y']),
  offset: PropTypes.number,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func
};

Cursor.defaultProps = {
  axis: 'X',
  offset: 0,
  onDragStart: emptyFunction,
  onDragEnd: emptyFunction
};

function pauseEvent(e) {
	if (e.stopPropagation) e.stopPropagation();
	if (e.preventDefault) e.preventDefault();
	e.cancelBubble = true;
	e.returnValue = false;
	return false;
}

function valueFormat(value, max, min) {
	value = typeof value === 'number' ? [value] : value;
	var returnMap = [];
	if (typeof value == 'array') {
		returnMap = value.map(function (v, i) {
			return typeof v === 'object' ? v : {
				value: typeof v === 'number' ? v : (parseInt((i + 1) * (max - min) / value.length, 10) + min),
				color: typeof v === 'string' ? v : ''
			};
		});
	}
	return returnMap;
}

function finder(cmp, arr, attr) {
	var val = arr[0] ? arr[0][attr] || 0 : 0;
	for (var i = 1; i < arr.length; i++) {
		val = cmp(val, arr[i][attr])
	}
	return val;
}

var RangeSliderSty = {
	borderRadius: '2px',
	borderColor: '#000',
	color: '#FFF',
	fontSize: '1rem',
	height: '20px',
	left: '0px',
	lineHeight: '110%',
	margin: '0 auto',
	maxWidth: '700px',
	position: 'relative',
	right: '0',
	top: '0',
	width: '90%'
};

var BarsSty = {
	backgroundColor: '#822AC7',
	height: '4px',
	position: 'absolute',
	top: '10px',
	width: '100%'
};

var BarSty = {
	backgroundColor: '#632097',
	height: 'inherit',
	position: 'absolute'
};

var CursorSty = {
	backgroundColor: '#3E4B35',
	borderRadius: '10px',
	border: '3px solid #3E4B35',
	height: 'inherit',
	padding: '0 8px',
	width: '4px'
};
var CursorHeaderSty = {height: 'inherit'};

var CursorSpanSty = {
	backgroundColor: '#3E4B35',
	bottom: '0px',
	display: 'block',
	position: 'absolute',
	right: '0px'
};

function handleDragStart(i, e) {
	if (this.props.disabled) return;
	// Make it possible to attach event handlers on top of this one
	this.props.onMouseDown(e);
	e = this.isTouchDevice() ? e.changedTouches[e.changedTouches.length - 1] : e;
	var position = e['page' + this.state.axis];
	var value = this.state.min,
	    l = this.state.value.length;
	if (l != 0 && 0 < i && i <= l) {
		value = this.state.value[i - 1].value;
	} else if (i === l + 1) {
		value = this.state.max;
	}
	this.setState({
		startValue: value,
		startPosition: position,
		index: i,
		clicked: -1
	});

	this.props.onBeforeChange(e, i - 1);

	// Add event handlers
	this.addEvent(window, this.dragEventFor['move'], this.handleDrag);
	this.addEvent(window, this.dragEventFor['end'], this.handleDragEnd);
	pauseEvent(e);
}

function handleDrag(e) {
	if (this.props.disabled) return;

	e = this.isTouchDevice() ? e.changedTouches[e.changedTouches.length - 1] : e;
	var position = e['page' + this.state.axis],
	    diffPosition = position - this.state.startPosition,
	    diffValue = (diffPosition / this.state.upperBound) * (this.props.max - this.props.min),
	    i = this.state.index,
	    l = this.state.value.length;
	// Cursor position after moved
	var returnItem = this.props.itemName;
	var _v = this.state.startValue + diffValue;
	if (i === 0) {
		// Move header
		if(this.props.disabledHeader) return;
		var v = l > 0 ? finder(Math.min, this.state.value, 'value') : this.state.max;
		this.setState({min: parseInt(Math.max(_v <= v ? (_v < 0 ? 0 : _v) : v, this.props.min), 10)});
		var returnMin = this.state.min;
	if (returnItem == 'height') this.props.onAfterChange('heightMore', returnMin);
	else this.props.onAfterChange('widthMore', returnMin);
	} else if (0 < i < l) {
		// Move cursor
		// The cursor postion must smaller than the next cursor or this.state.max
		// bigger than the previous cursor or this.state.min
		var value = this.state.value;
		// var v = value[i - 1].value;
		var min = (value[i - 2] ? value[i - 2].value : this.state.min);
		var max = value[i] ? value[i].value : this.state.max;
		value[i - 1].value = parseInt(Math.max(Math.min(_v, max), min), 10);
		this.setState({value: value});
	} else if (i === l + 1) {
		// Move tailer
		if(this.props.disabledTailer) return;
		var v = l > 0 ? finder(Math.max, this.state.value, 'value') : this.state.min;
		this.setState({max: parseInt(Math.min(_v >= v ? _v : v, this.props.max))});
		var returnMax = this.state.max;
		if (returnItem == 'lowtemp') this.props.onAfterChange(returnItem, returnMax);
		else if (returnItem == 'height') this.props.onAfterChange('heightLess', returnMax);
		else this.props.onAfterChange('widthLess', returnMax);
	}

	this.props.onChange(e, i - 1, this.state.value);
}

function renderCursor(offset, i, child) {
	var l = this.state.value.length;
	var ref = 'cursor' + i,
	    zIndex = i + 1;
	if (i === 0) {
		ref = 'header';
		zIndex = 0;
		child = child || <span id='CursorSpanStyHeader' style={CursorSpanSty}>{this.state.min}</span>;
	} else if (i === l + 1) {
		ref = 'tailer';
		zIndex = 0;
		child = child || <span id='CursorSpanStyTailer2' style={CursorSpanSty}>{this.state.max}</span>;
	} else {
		child = child || <span id='CursorSpanStyElse' style={CursorSpanSty}>{this.state.value[i - 1] ? this.state.value[i - 1].value : null}</span>
		;
	}

	var hidden = false;
	if (ref == 'header' && this.state.header == -1) hidden = true;

	var returnCursor = <Cursor
		axis={this.state.axis}
		offset={offset}
		ref={ref}
		key={ref}
		hidden={hidden}
		zIndex={zIndex}
		classSty={CursorSty}
		onDragStart={this.handleDragStart.bind(null, i)}
		onDragEnd={this.handleDragEnd} >{child}</Cursor>;

	return returnCursor
}

class JRangeSliderRender extends Component {
  binder(...methods) { methods.forEach( (method) => this[method] = this[method].bind(this) ); }

  render() {
		var upper = this.state.upperBound;
		var isDesktop = this.props.isDesktop;
		if (isDesktop) {
			RangeSliderSty.height = '20px';
			CursorSty.width = '4px';
			CursorSpanSty.bottom = '0';
			CursorSpanSty.right = '0';
			BarsSty.top = '10px';
		} else {
			RangeSliderSty.height = '26px';
			CursorSty.width = '10px';
			CursorSpanSty.bottom = '3';
			CursorSpanSty.right = '3';
			BarsSty.top = '13px';
		}
		var bars = this.renderBars();
		var cursors = this.renderCursors();

		return (
			<div id='RangeSliderSty' ref='slider' style={RangeSliderSty}>
				<div id='BarsSty' ref='barsty' style={BarsSty}>
					{bars}
				</div>
				{cursors}
			</div>
		);
	}
}

export default class JRangeSlider extends JRangeSliderRender {
  constructor() {
    super();
    this.handleDragStart = handleDragStart;
    this.handleDrag = handleDrag;
    this.renderCursor = renderCursor;
    this.binder('isHorizontal', 'getValue', 'handleResize', 'handleDragStart', 'handleDrag', 'handleDragEnd', 'handleBarClick', 'renderCursor', 'renderCursors', 'calcOffset', 'renderBar', 'renderBars');
  	this.state = {
			index: -1, // TODO: find better solution
			clicked: -1,
			upperBound: 0,
			axis: this.isHorizontal() ? 'X' : 'Y',
			minProp: this.isHorizontal() ? 'left' : 'top',
			maxProp: this.isHorizontal() ? 'right' : 'bottom',
			value: [],
			isDesktop: true
		};
  }

	isHorizontal() { return true; }

	componentWillMount() {
		this.componentWillReceiveProps(this.props);
		this.addEvent(window, 'resize', this.handleResize);
	}

	componentWillReceiveProps(nextProps) {
		var range = nextProps.range || this.props.range,
		    range = (range ? (typeof range === 'boolean' ? [range, range] : range) : []),
		    header = range[0],
		    tailer = range[1],
		    min = nextProps.min || this.props.min,
		    max = nextProps.max || this.props.max,
		    min = typeof header === 'number' ? Math.max(header, min) : min,
		    max = typeof tailer === 'number' ? Math.min(Math.max(tailer, min), max) : max;
		this.setState({
			min: min,
			max: max,
			header: header,
			tailer: tailer,
			value: valueFormat(nextProps.value || this.props.value, max, min),
			isDesktop: nextProps.isDesktop || this.props.isDesktop
		}, function () {
			// Calculate the bound size again, if the bound size less than 0
			if (this.state.upperBound <= 0) {
				this.handleResize();
			}
		}.bind(this));
	}

	componentDidMount() { this.handleResize(); }

	componentWillUnmount() { this.removeEvent(window, 'resize', this.handleResize); }

	getValue() { return this.state.value }

	handleResize() {
		var slider = this.refs.barsty.getDOMNode();
		this.setState({upperBound: slider.offsetWidth - 4});
	}


	handleDragEnd(e) {
		this.setState({index: -1});

		this.removeEvent(window, this.dragEventFor['move'], this.handleDrag);
		this.removeEvent(window, this.dragEventFor['end'], this.handleDragEnd);
	}

	handleBarClick(i, e) {
		this.setState({clicked: i});
		this.props.onBarClick(e, i, this.state.value[i]);
	}

	renderCursors() {
		var cursors = [];
		if (this.state.header) cursors.splice(0, 0, this.renderCursor(this.calcOffset(this.state.min), 0));
		if (this.state.tailer) {
			CursorSpanSty.display = 'block';
			var l = cursors.length;
			var child = <span id='CursorSpanStyTailer1' style={CursorSpanSty}>{this.state.max}</span>;
			cursors.push(this.renderCursor(this.calcOffset(this.state.max), l, child));
		}
		return cursors;
	}

	// calculates the offset of a handle in pixels based on its value.
	calcOffset(v) {
		if (typeof v === 'undefined') return;
		v = typeof v === 'number' ? v : v.value;
		var ratio = (v - this.props.min) / (this.props.max - this.props.min);
		return ratio * this.state.upperBound;
	}

	renderBar(from, to, i) {
		BarSty.left = from;
		BarSty.right = this.state.upperBound - to;
		var key='bar' + i;
		return (
			<div id='BarSty' key={key} ref={key} style={BarSty}
			onClick={this.handleBarClick.bind(this, i)}></div>
		);
	}

	renderBars() {
		var minOffset = this.calcOffset(this.state.min);
		return [this.renderBar(minOffset, this.calcOffset(this.state.max), 0)];
	}
}

reactMixin(JRangeSlider.prototype, event);

JRangeSlider.defaultProps = {
	min: 0,
	max: 100,
	value: [],
	defaultValue: 0,
	orientation: 'horizontal',
	withBars: true,
	withCursor: true,
	pearling: false,
	disabled: false,
	onBeforeChange: emptyFunction,
	onChange: emptyFunction,
	onAfterChange: emptyFunction,
	onBarClick: emptyFunction,
	onMouseDown: emptyFunction,
	isDesktop: true
};

