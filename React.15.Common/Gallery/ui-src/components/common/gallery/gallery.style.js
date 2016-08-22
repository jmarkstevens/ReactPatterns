let backgroundSize = 'contain';
let dropShadow = '0 1px 0px #333, 1px 0 0px #333, 1px 2px 1px #333, 2px 1px 1px #333, 2px 3px 2px #333';

module.exports = {
  GallerySty: {
    backgroundColor: 'grey',
    color: 'white',
    height: '100vh',
    left: '0px',
    padding: '0 10px 0 0',
    position: 'absolute',
    top: '0px',
    width: '100vw'
  },
  imageDivSty: {
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize,
      height: '100%',
      MozBackgroundSize: backgroundSize,
      OBackgroundSize: backgroundSize,
      overflow: 'hidden',
      padding: '0px',
      position: 'relative',
      WebkitBackgroundSize: backgroundSize,
      width: '100%'
  },
  imageThumbSty: {position: 'relative', height: '100%', width: '100%'},
  actionSty: {position: 'relative', height: '100%', width: '100%'},
  fullCloseSty: {position: 'absolute', left: '15px', top: '5px'},
  nextSty: {position: 'absolute', right: '25px', top: '50%'},
  prevSty: {position: 'absolute', left: '25px', top: '50%'},
  thumbsOpenSty: {position: 'absolute', right: '25px', top: '5px'},
  thumbsClosedSty: {color: '#afac87', position: 'absolute', right: '25px', top: '0px'},
  nextPanelSty: {height: '80vh', position: 'absolute', right: '0px', top: '10vh', width: '75%'},
  prevPanelSty: {height: '80vh', position: 'absolute', left: '0px', top: '10vh', width: '25%'},
  copyRightSty: {
    position: 'absolute', color: '#777', right: '5px', top: '75%', fontSize: '.8em',
    writingMode: 'vertical-rl', textShadow: dropShadow
  },
  statusSty: {color: 'black', fontSize: '1.5em', position: 'absolute', textAlign: 'center', top: '5px', width: '100%'}
};
