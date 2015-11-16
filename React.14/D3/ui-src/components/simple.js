import React from 'react';
import d3 from 'd3';

var SetIntervalMixin = {
	componentWillMount: function() {
		this.intervals = [];
	},
	setInterval: function() {
		this.intervals.push(setInterval.apply(null, arguments));
	},
	componentWillUnmount: function() {
		this.intervals.map(clearInterval);
	}
};

var Rect = React.createClass({
	mixins: [SetIntervalMixin],
	getDefaultProps: function() {
		return {
			width: 0,
			height: 0,
			x: 0,
			y: 0
		}
	},

	getInitialState: function() {
		return {
			milliseconds: 0,
			height: 0
		};
	},

	shouldComponentUpdate: function(nextProps) {
		return this.props.height !== this.state.height;
	},

	componentWillReceiveProps: function(nextProps) {
		this.setState({milliseconds: 0, height: this.props.height});
	},

	componentDidMount: function() {
		this.setInterval(this.tick, 10);
	},

	tick: function(start) {
		this.setState({milliseconds: this.state.milliseconds + 10});
	},

	render: function() {
		var easyeasy = d3.ease('back-out');
		var height = this.state.height + (this.props.height - this.state.height) * easyeasy(Math.min(1, this.state.milliseconds/1000));
		var y = this.props.height - height + this.props.y;
		return (
			<rect className="chart"
						height={height}
						y={y}
						width={this.props.width}
						x={this.props.x}
			>
			</rect>
		);
	},
});

var Bar = React.createClass({
	getDefaultProps: function() {
		return {
			data: []
		}
	},

	shouldComponentUpdate: function(nextProps) {
			return this.props.data !== nextProps.data;
	},

	render: function() {
		var props = this.props;
		var data = props.data.map(function(d) {
			return d.y;
		});

		var yScale = d3.scale.linear()
			.domain([0, d3.max(data)])
			.range([0, this.props.height]);

		var xScale = d3.scale.ordinal()
			.domain(d3.range(this.props.data.length))
			.rangeRoundBands([0, this.props.width], 0.05);

		var bars = data.map(function(point, i) {
			var height = yScale(point),
					y = props.height - height,
					width = xScale.rangeBand(),
					x = xScale(i);

			return (
				<Rect height={height}
							width={width}
							x={x}
							y={y}
							key={i} />
			)
		});

		return (<g>{bars}</g>);
	}
});

var Chart = React.createClass({
	render: function() {
		return (
			<svg className="chart" width={this.props.width}
					 height={this.props.height} >
				{this.props.children}
			</svg>
		);
	}
});

var Axis = React.createClass({
	render: function() {
		return <g></g>
	}
});

var all = [
	{x: 'a', y: 20},
	{x: 'b', y: 14},
	{x: 'c', y: 12},
	{x: 'd', y: 19},
	{x: 'e', y: 18},
	{x: 'f', y: 15},
	{x: 'g', y: 10},
	{x: 'h', y: 14}
];

var filtered = [
	{x: 'a', y: 9},
	{x: 'b', y: 5},
	{x: 'c', y: 6},
	{x: 'd', y: 12},
	{x: 'e', y: 10},
	{x: 'f', y: 7},
	{x: 'g', y: 4},
	{x: 'h', y: 9}
];


var SimpleApp = React.createClass({
	getDefaultProps: function() {
		return {
			width: 500,
			height: 500
		}
	},

	getInitialState: function() {
		return {
			data: all
		}
	},

	showAll: function() {
		this.setState({data : all})
	},

	filter: function() {
		this.setState({data: filtered});
	},

	render: function() {
		return (
			<div>
				<div className="selection">
					<ul>
						<li onClick={this.showAll}>All</li>
						<li onClick={this.filter}>Filter</li>
					</ul>
				</div>
				<hr/>
				<Chart width={this.props.width}
							 height={this.props.height}>
					<Bar data={this.state.data}
							 width={this.props.width}
							 height={this.props.height} />
				</Chart>
			</div>
		);
	}
});
module.exports = SimpleApp;
