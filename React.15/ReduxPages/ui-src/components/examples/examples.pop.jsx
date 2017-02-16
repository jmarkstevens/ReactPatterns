import React from 'react';

const popupSty = {
  background: 'rgba(28, 34, 24, .6)',
  color: '#e4eae0',
  fontFamily: 'Georgia, serif',
  fontSize: '1.3vmax',
  left: '50%',
  padding: '30px',
  position: 'absolute',
  textAlign: 'center',
  top: '66%',
  transform: 'translate(-50%, -50%)',
  zIndex: '5'
};

export default function ExamplesPopup({hide, subText}) {
  if (hide) return null;
  return (
    <div id="ExamplesPopup" style={popupSty}>
      {subText}
    </div>
  );
}
