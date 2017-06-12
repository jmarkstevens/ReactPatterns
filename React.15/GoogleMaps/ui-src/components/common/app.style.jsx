import AppColors from './app.colors';

const borderLight = 'rgba(228, 220, 224, 0.2)';
const borderDark = 'rgba(228, 220, 224, 0.3)';

const dropShadow = '0 1px 0px #000, 1px 0 0px #000, 1px 2px 1px #000, 2px 1px 1px #000, 2px 3px 2px #000';
const dropShadowCR = '0 1px 0px #555, 1px 0 0px #555, 1px 2px 1px #555, 2px 1px 1px #555, 2px 3px 2px #555';
const backgroundSize = 'contain';

const textBack = 'rgba(28, 34, 24, 0.8)';

const navBarHeight = 70;

module.exports = {
  buttonSty: {
    backgroundColor: 'rgba(228, 220, 224, 0.1)',
    borderBottomColor: borderLight,
    borderLeftColor: borderDark,
    borderRightColor: borderLight,
    borderTopColor: borderDark,
    borderRadius: '6px',
    color: AppColors.siOrangeDark,
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '600',
    margin: '0 3px',
    outline: 'none',
    padding: '3px 5px 3px',
    whiteSpace: 'nowrap'
  },
  buttonMobileSty: {
    backgroundColor: 'rgba(228, 220, 224, 0.1)',
    borderBottomColor: borderLight,
    borderLeftColor: borderDark,
    borderRightColor: borderLight,
    borderTopColor: borderDark,
    borderRadius: '6px',
    color: AppColors.siOrangeDark,
    cursor: 'pointer',
    fontSize: '1.3rem',
    fontWeight: '600',
    lineHeight: '100%',
    margin: '0 3px',
    outline: 'none',
    padding: '5px 5px 3px',
    whiteSpace: 'nowrap'
  },
  bottomBtnDivSty: {
    background: 'transparent',
    bottom: '0',
    color: AppColors.siWhiteWhite,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0px',
    position: 'absolute',
    transform: 'translate(-50%, 0)',
    left: '50%',
    zIndex: '6'
  },
  topBtnDivSty: {
    background: 'transparent',
    color: AppColors.siWhiteWhite,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0',
    position: 'absolute',
    top: '0',
    transform: 'translate(-50%, 0)',
    left: '50%',
    zIndex: '6'
  },
  HomePageSty: {
    backgroundColor: AppColors.siWhiteWhite,
    height: '100%',
    overflow: 'auto',
    padding: '0px',
    width: '100%'
  },
  hiddenOverflowSty: {
    background: 'transparent',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  modalStyles: {
    overlay: {
      position: 'fixed',
      top: '44px',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: AppColors.siWhiteWhite
    },
    content: {
      backgroundColor: 'transparent',
      border: '0',
      bottom: 'auto',
      left: '50%',
      lineHeight: '18px',
      padding: '0',
      position: 'absolute',
      right: 'auto',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2'
    }
  },
  modalMobileStyles: {
    overlay: {
      position: 'fixed',
      top: '44px',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: AppColors.siWhiteWhite
    },
    content: {
      backgroundColor: 'transparent',
      bottom: 'auto',
      color: 'black',
      left: '50%',
      lineHeight: '24px',
      marginRight: '-50%',
      maxHeight: '95vh',
      overflow: 'auto',
      padding: '15px',
      right: 'auto',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '2'
    }
  }
};
