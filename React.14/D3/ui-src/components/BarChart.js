import React from 'react';
import _ from 'underscore';
import scale from 'd3-scale';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class BarChart1 extends React.Component {
  render() {
    const x = scale.linear()
      .domain([0, _.max(this.props.data)])
      .range([0, 420]);

    const data = this.props.data;

    return (
      <div className="chart">
      {
        data.map(n => <div style={{width: x(n)+'px'}}>{n}</div>)
      }
      </div>
    );
  }
}

class BarChart2 extends React.Component {
  render() {
    const data = this.props.data || [];

    const width = 420,
        barHeight = 20;

    const x = scale.linear()
        .domain([0, _.max(data)])
        .range([0, width]);

    return (
      <svg className="chart" width={width} height={barHeight * data.length}>
      {
        data.map((n, i) =>
            <g key={i} transform={`translate(0,${barHeight*i})`}>
              <rect width={x(n)} height={barHeight-1}></rect>
              <text x={x(n)-3} y="9.5" dy=".35em">{n}</text>
            </g>
        )
      }
      </svg>
    );
  }
}

class BarChart2A extends React.Component {
  render() {
    const data = this.props.data || [];
		const enterLeaveTimeout = 200;

    const width = 420,
          barHeight = 20;

    const x = scale.linear()
        .domain([0, _.max(data)])
        .range([0, width]);

    return (
        <svg className="chart csstrans" width={width} height={barHeight * data.length}>
            <ReactCSSTransitionGroup
							transitionName="addBar"
							component="g"
							transitionEnterTimeout={enterLeaveTimeout}
							transitionLeaveTimeout={enterLeaveTimeout}
						>
            {
              data.map((n, i) =>
                  <g key={i} transform={`translate(0,${barHeight*i})`}>
                    <rect width={x(n)} height={barHeight-1}></rect>
                    <text x={x(n)-3} y="9.5" dy=".35em">{n}</text>
                  </g>
              )
            }
            </ReactCSSTransitionGroup>
        </svg>
    );
  }
}

class BarChart2JSA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          oldData: [],
          progress: 1.0
        };
    }
    componentWillReceiveProps(nextProps) {
        const state = {
            oldData: this.props.data,
            progress: this.props.data.length > 0 ? 0 : 1
        };
        this.setState(state);
        setTimeout(() => this.updateAnimation(), 0);
    }
    updateAnimation() {
        const steps = 50, time = 0.5;
        if (this.state.progress < 1.0) {
            this.setState({ progress: Math.min(1.0, this.state.progress + (1/steps)) });
            setTimeout(() => this.updateAnimation(), 1000*time/steps);
        }
    }
    render() {
        const rawData = (this.props.data || []);
        const data = rawData.map((n, i) =>
        ({
            raw: n,
            interp: (this.state.oldData[i] !== undefined ?
                this.state.oldData[i] + ((rawData[i] - this.state.oldData[i]) * this.state.progress)
                : rawData[i])
        }));

        const width = 420,
              barHeight = 20;

        const x = scale.linear()
            .domain([0, _.max(data.map(d => d.interp))])
            .range([0, width]);

        return (
            <svg className="chart" width={width} height={barHeight * data.length}>
                <ReactCSSTransitionGroup transitionName="addBar" component="g">
                {
                data.map((n, i) =>
                    <g key={i} transform={`translate(0,${barHeight*i})`}>
                      <rect width={x(n.interp)} height={barHeight-1}></rect>
                      <text x={x(n.interp)-3} y="9.5" dy=".35em">{n.raw}</text>
                    </g>)
                }
                </ReactCSSTransitionGroup>
            </svg>
        );
    }
}

export default BarChart2A;
