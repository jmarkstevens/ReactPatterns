import React from 'react';

let TooltipSty = {
  display: 'inline-block',
  lineHeight: '14px',
  marginRight: '5px',
  verticalAlign: 'top'
};

let helpTip = {
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

let contentSty = {
  background: 'rgb(28, 34, 24)',
  border: '1px solid rgba(0, 0, 0, 0.08)',
  borderRadius: '3px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
  color: '#e9e7da',
  fontSize: '0.9375em',
  lineHeight: '1.2em',
  maxWidth: '280px',
  minWidth: '200px',
  padding: '5px',
  textAlign: 'left',
  wordWrap: 'break-word',
  zIndex: '200'
};

let contentOuterSty = {height: '100%', width: '100%'};

function Contents({tooltipActive, place, position, data}) {
  if (!data) return null;
  let contentHtml = data;
  let contentLength = contentHtml.length;
  let topNeg = (Math.ceil(contentLength/40) + 1) * 18;
  let rightNeg = contentLength * .25;

  let active = tooltipActive;
  let inPosition = position || null;
  let contentInnerSty = {position: 'absolute'};
  if (active) {
    switch (place) {
      case 'bottom': contentInnerSty.left = inPosition.right + 5; contentInnerSty.top = inPosition.top + 20; break;
      case 'right': contentInnerSty.left = inPosition.right + 5; contentInnerSty.top = inPosition.top - rightNeg; break;
      case 'top': contentInnerSty.left = inPosition.right + 5; contentInnerSty.top = inPosition.top - topNeg; break;
    }
  }
  else contentInnerSty.display = 'none';
  let displayContent = {__html: contentHtml};
  return (
    <div id="contentOuterSty" style={contentOuterSty}>
      <div id="contentInnerSty" style={contentInnerSty}>
        <div id="contentSty" style={contentSty}>
          <div dangerouslySetInnerHTML={displayContent} />
        </div>
      </div>
    </div>
  );
}

export default class JTooltip extends React.Component {
  state = {tooltipActive: false, position: {}};
  onMouseEnter = () => {
    let rect = this.TooltipRef.getBoundingClientRect();
    let position = {};
    position.left = rect.left - this.props.adjust.left;
    position.top = rect.top - this.props.adjust.top;
    position.right = rect.right - this.props.adjust.left;
    position.bottom = rect.bottom - this.props.adjust.top;
    this.setState({tooltipActive: true, position});
  };
  onMouseLeave = () => { this.setState({tooltipActive: false}); };
  render() {
    let help = '?';
    return(
      <div id="TooltipSty" ref={(ref) => { this.TooltipRef = ref; }} style={TooltipSty} >
        <div id="events" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
          <div id="helpTip" style={helpTip}>{help}</div>
        </div>
        <Contents
          tooltipActive={this.state.tooltipActive}
          place={this.props.place}
          position={this.state.position}
          data={this.props.data}
        />
      </div>
    );
  }
}
