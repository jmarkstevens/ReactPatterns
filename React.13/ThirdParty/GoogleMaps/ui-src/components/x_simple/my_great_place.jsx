import React, {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle} from './my_great_place_styles.js';

export default class MyGreatPlace extends Component {


  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate;
  }

  render() {
    return (
       <div style={greatPlaceStyle}>
          {this.props.text}
       </div>
    );
  }
}

MyGreatPlace.propTypes = {
  text: PropTypes.string
};

MyGreatPlace.defaultProps = {};
