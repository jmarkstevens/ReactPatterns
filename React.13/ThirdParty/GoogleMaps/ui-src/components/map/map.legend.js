import React, {PropTypes, Component} from 'react/addons';
// import shouldPureComponentUpdate from 'react-pure-render/function';

import {mapStyle} from './map.styles';

export default class MapLegend extends Component {

  render() {
    return (
       <div style={{}}>
          {this.props.text}
       </div>
    );
  }
}

// MyGreatPlace.propTypes = {
//   text: PropTypes.string
// };

// MyGreatPlace.defaultProps = {};

//   constructor() {
//     super();
//     this.shouldComponentUpdate = shouldPureComponentUpdate;
//   }
