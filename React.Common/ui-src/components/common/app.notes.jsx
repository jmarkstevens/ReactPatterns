import React from 'react';

const AppNotesSty = {
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '30px',
  maxWidth: '500px',
  textIndent: '20px'
};

const textSty = {
  color: '#FFF',
  fontSize: '1.0em',
  textAlign: 'left'
};

const btnDivSty = {textAlign: 'center'};

const standardBtnSty = {
  backgroundColor: '#9a6',
  borderBottomColor: '#cea',
  borderLeftColor: '#93a363',
  borderRightColor: '#cea',
  borderTopColor: '#93a363',
  borderRadius: '6px',
  color: '#eeffee',
  cursor: 'pointer',
  lineHeight: '100%',
  outline: 'none',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap'
};

export default class AppNotes extends React.Component {
  state = {show: true};
  onClick = () => { this.setState({show: !this.state.show}); };
  render() {
    if (this.props.AppText.trim().length === 0) return null;
    let showNotes = this.state.show;
    let btnText = showNotes ? 'Hide notes' : 'Show notes';
    let notesDivSty = showNotes ? {display: 'block'} : {display: 'none'};
    return (
      <div id="AppCtrlSty" style={AppNotesSty}>
        <div id="btnDiv" style={btnDivSty}>
          <button onClick={this.onClick} style={standardBtnSty}>{btnText}</button>
        </div>
        <div id="notesDiv" style={notesDivSty}>
          <p style={textSty}>{this.props.AppText}</p>
        </div>
      </div>
    );
  }
}
