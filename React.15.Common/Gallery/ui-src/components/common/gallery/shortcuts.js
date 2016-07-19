import React from 'react';

let ShortcutsSty = {
  backgroundColor: '#333',
  border: '1px solid green',
  color: '#AAA',
  left: '10px',
  padding: '10px',
  position: 'absolute',
  top: '50px'
};

let headSty = {
  color: '#e2d290',
  fontSize: '1.2em',
  textAlign: 'center'
};

let keySty = {
  color: '#aaa',
  fontSize: '1em',
  textAlign: 'center',
  width: '30px'
};

let descSty = {
  color: '#aaa',
  fontSize: '1em',
  textAlign: 'left'
};

let okSty = {
  backgroundColor: '#222',
  cursor: 'pointer',
  padding: '5px 0px',
  textAlign: 'center',
  width: '100%'
};

export default class Shortcuts extends React.Component {
  closeHandler = () => { this.props.closeHandler(); };
  render() {
    if (this.props.hide) return null;
    return (
      <div id='Shortcuts' className='HighZ' style={ShortcutsSty}>
        <div style={headSty} >Keyboard Shortcuts</div>
        <br/>
        <div className='FlexBox'>
          <div style={keySty}>
            &rarr;<br/>
            &larr;<br/>
            T<br/>
            B<br/>
            S<br/>
            X<br/>
          </div>
          <div style={descSty}>
            Next pic<br/>
            Previous pic<br/>
            Side Thumbs<br/>
            Bottom Thumbs<br/>
            Full screen<br/>
            Exit<br/>
          </div>
        </div>
        <br/>
        <div style={okSty} onClick={this.closeHandler}>Ok</div>
      </div>
    );
  }
}
