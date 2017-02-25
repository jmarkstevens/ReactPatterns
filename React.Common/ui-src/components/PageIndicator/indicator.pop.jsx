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
  top: '33%',
  transform: 'translate(-50%, -50%)',
  zIndex: '5'
};

export default function IndicatorPopup({hide, subText}) {
  if (hide) return null;
  return (
    <div id="IndicatorPopup" style={popupSty}>
      {subText}
    </div>
  );
}
