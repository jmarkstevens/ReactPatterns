module.exports = {
  BreakPoints: {
    large: 1200,
    medium: 768,
    small: 320
  },

  Colors: {
    // GRAYSCALE
    ASH: '#ACB0B3',
    CHARCOAL: '#56595A',
    FOG: '#E3E6E7',
    PORCELAIN: '#F7F8F8',
    WHITE: '#FFFFFF',

    // ACCENTS
    PRIMARY: '#359BCF',
    BANANA: '#FBB600',
    ORANGE: '#EF7625',
    LIME: '#2EBE51',
    STRAWBERRY: '#E22727',

    // CHART COLORS
    BASE_ARC: '#F5F5F5',
    YELLOW: '#f6a01e',
    GREEN: '#00a89c',
    BLUE: '#359BCF',
    RED: '#EE4235',

    // CATEGORY COLORS
    AUTO_TRANSPORT: '#4B9DBC',
    BILLS_UTILITIES: '#EF9B2C',
    BUSINESS: '#B3DE8C',
    EDUCATION: '#F8AB3A',
    ENTERTAINMENT: '#AB5B89',
    FEES: '#FF9696',
    FINANCIAL: '#6BCDDB',
    FOOD_DINING: '#58AC7B',
    GIFTS_CHARITY: '#347AA5',
    HEALTH_FITNESS: '#5C446E',
    HOME: '#FFD84D',
    INCOME: '#133F49',
    INVESTMENTS: '#FF7070',
    KIDS: '#82D196',
    PETS: '#85507B',
    PERSONAL_CARE: '#338B7A',
    SHOPPING: '#CF5F84',
    TAXES: '#32588D',
    TRAVEL: '#e37434',
    UNCATEGORIZED: '#FA5555',

    // SCRIM
    SCRIM: 'rgba(247,248,248,0.9)'
  },

  FontSizes: {
    JUMBO: 30,
    XXLARGE: 21,
    XLARGE: 17,
    LARGE: 15,
    MEDIUM: 13,
    SMALL: 11,
    TINY: 10
  },

  Fonts: {
    THIN: 'ProximaNovaThin, Helvetica, Arial, sans-serif',
    LIGHT: 'ProximaNovaLight, Helvetica, Arial, sans-serif',
    REGULAR: 'ProximaNovaRegular, Helvetica, Arial, sans-serif',
    ITALIC: 'ProximaNovaRegularItalic, Helvetica, Arial, sans-serif',
    SEMIBOLD: 'ProximaNovaSemibold, Helvetica, Arial, sans-serif'
  },

  //Box Shadows
  ShadowLow: '0 1px 2px rgba(0,0,0,0.1)',
  ShadowMed: '0 2px 6px rgba(0,0,0,0.1)',
  ShadowHigh: '0 10px 30px 5px rgba(0,0,0,0.1)',

  Spacing: {
    XLARGE: 30,
    LARGE: 20,
    MEDIUM: 15,
    SMALL: 10,
    XSMALL: 5
  },

  adjustColor (col, amt) {
    let color = col;
    let usePound = false;

    if (color[0] === '#') {
      color = color.slice(1);
      usePound = true;
    }

    const num = parseInt(color, 16);

    let r = (num >> 16) + amt;

    if (r > 255) {
      r = 255;
    } else if (r < 0) {
      r = 0;
    }

    let b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) {
      b = 255;
    } else if (b < 0) {
      b = 0;
    }

    let g = (num & 0x0000FF) + amt;

    if (g > 255) {
      g = 255;
    } else if (g < 0) {
      g = 0;
    }

    return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
  },


  adjustHexOpacity (color, opacity) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacity + ')';
  },

  getWindowSize () {
    const breakPoints = this.BreakPoints;
    const width = window.innerWidth;
    let windowSize = 'small';

    if (width >= breakPoints.large) {
      windowSize = 'large';
    } else if (width >= breakPoints.medium) {
      windowSize = 'medium';
    } else if (width <= breakPoints.small) {
      windowSize = 'xsmall';
    }

    return windowSize;
  }
};
