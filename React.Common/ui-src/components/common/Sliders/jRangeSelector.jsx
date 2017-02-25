const React = require('react');
const Radium = require('radium');
const _throttle = require('lodash/throttle');

const StyleConstants = {
  Colors: {
    trackColor: '#4d2c3d',
    selectedColor: '#ab9353',
  },
  FontFamily: 'Helvetica, Arial, sans-serif',
  ShadowLow: '0 1px 2px rgba(0,0,0,0.1)',
};

class RangeSelector extends React.Component {
  constructor(props) {
    super(props);
    const lowerValue = props.defaultLowerValue;
    const upperValue = props.defaultUpperValue;
    this.state = {
      dragging: null,
      lowerPixels: 0,
      lowerValue,
      range: props.upperBound - props.lowerBound,
      upperPixels: 1,
      upperValue,
      trackClicked: false,
    };
  }

  componentDidMount = () => {
    this._setDefaultRangeValues(this.state.lowerValue, this.state.upperValue);

    window.addEventListener('resize', _throttle(this._setDefaultRangeValues, 300));
  };

  componentWillReceiveProps = newProps => {
    let lowerReset = Boolean(
      newProps.lowerValue == this.props.defaultLowerValue &&
        newProps.upperValue == this.props.defaultUpperValue &&
        newProps.lowerValue != this.props.lowerValue,
    );
    let upperReset = Boolean(
      newProps.upperValue == this.props.defaultUpperValue &&
        newProps.lowerValue == this.props.defaultLowerValue &&
        newProps.upperValue != this.props.upperValue,
    );
    if (lowerReset || upperReset) {
      this.setState({lowerValue: newProps.lowerValue, upperValue: newProps.upperValue});
      this._setDefaultRangeValues(newProps.lowerValue, newProps.upperValue);
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', _throttle(this._setDefaultRangeValues, 300));
  };

  _setDefaultRangeValues = (lowerValue, upperValue) => {
    const component = this.rangeSelectorRef;
    const componentStyles = window.getComputedStyle(component);
    const width = parseInt(componentStyles.width, 0);

    //convert our values to a 0-based scale
    const lowerPosition = lowerValue - this.props.lowerBound;
    const upperPosition = upperValue - this.props.lowerBound;

    //convert our 0-based values to pixels
    const lowerPixels = Math.round(
      lowerPosition * width / this.state.range / this.props.interval * this.props.interval,
    );
    const upperPixels = Math.round(
      upperPosition * width / this.state.range / this.props.interval * this.props.interval,
    );

    this.setState({lowerPixels, upperPixels, width});
  };

  _handleLowerDragStart = () => { this.setState({dragging: 'Lower'}); };
  _handleUpperDragStart = () => { this.setState({dragging: 'Upper'}); };

  _handleTrackMouseDown = e => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const newPixels = clientX - this.rangeSelectorRef.getBoundingClientRect().left;
    const updatedState = {trackClicked: true};
    const clickBelowLower = newPixels < this.state.lowerPixels;
    const clickAboveUpper = newPixels > this.state.upperPixels;
    const clickCloserToLower = newPixels > this.state.lowerPixels &&
      newPixels < this.state.lowerPixels + (this.state.upperPixels - this.state.lowerPixels) / 2;
    const clickCloserToUpper = newPixels < this.state.upperPixels &&
      newPixels > this.state.upperPixels - (this.state.upperPixels - this.state.lowerPixels) / 2;

    if (clickBelowLower || clickCloserToLower) {
      updatedState.dragging = 'Lower';
    }

    if (clickAboveUpper || clickCloserToUpper) {
      updatedState.dragging = 'Upper';
    }

    this.setState(updatedState, this._handleDragging(e));
  };

  //this method now handles both the dragging of the toggle, and moving it when track is clicked
  _handleDragging = e => {
    if (this.state.dragging) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const pixelInterval = this.props.interval * this.state.width / this.state.range;
      const newState = {selectedLabel: null};

      let newPixels = clientX - this.rangeSelectorRef.getBoundingClientRect().left;

      //make sure we don't go past the end of the track
      newPixels = Math.min(newPixels, this.state.width);

      //make sure we don't go past the beginning of the track
      newPixels = Math.max(newPixels, 0);

      //make sure the lower toggle doesn't go past the upper toggle
      if (this.state.dragging === 'Lower') {
        newPixels = Math.min(newPixels, this.state.upperPixels - pixelInterval);
      }

      //make sure the upper toggle doesn't go past the lower toggle
      if (this.state.dragging === 'Upper') {
        newPixels = Math.max(newPixels, this.state.lowerPixels + pixelInterval);
      }

      //make sure we snap to our interval
      newPixels = Math.round(newPixels / pixelInterval) * pixelInterval;

      //convert our pixels to a 0-based scale
      const newPosition = newPixels * this.state.range / this.state.width + this.props.lowerBound;

      //covert our 0-based value to actual value
      const newValue = Math.round(newPosition / this.props.interval) * this.props.interval;

      newState[this.state.dragging.toLowerCase() + 'Pixels'] = newPixels;
      newState[this.state.dragging.toLowerCase() + 'Value'] = newValue;

      if (this.state.trackClicked) {
        newState.dragging = false;
        newState.trackClicked = false;
      }

      if (this.props.updateOnDrag || this.state.trackClicked) {
        this.props['on' + this.state.dragging + 'DragStop'](newValue, this.props.itemName);
      }

      this.setState(newState);

      e.preventDefault();
    }
  };

  _handleDragEnd = e => {
    if (this.state.dragging) {
      if (this.state.trackClicked) {
        this._handleDragging(e);
      } else {
        if (!this.state.updateOnDrag) {
          this.props['on' + this.state.dragging + 'DragStop'](
            this.state[this.state.dragging.toLowerCase() + 'Value'],
            this.props.itemName,
          );
        }

        this.setState({dragging: false, trackClicked: false});
      }
    }
  };

  styles = () => {
    return {
      component: {
        fontFamily: StyleConstants.FontFamily,
        fontSize: '.8em',
        fontWeight: '700',
        position: 'relative',
      },
      range: {
        margin: '0 10px',
        padding: '0px 0',
        visibility: this.state.showPresets ? 'hidden' : 'visible',
      },
      track: {
        background: StyleConstants.Colors.trackColor,
        borderRadius: '3px',
        height: '7px',
      },
      trackHolder: {
        cursor: 'pointer',
        padding: '15px 0',
      },
      lowerToggle: {
        background: StyleConstants.Colors.selectedColor,
        borderRadius: '100%',
        boxShadow: StyleConstants.ShadowLow,
        cursor: 'pointer',
        height: '24px',
        left: this.state.lowerPixels,
        marginLeft: '10px',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        WebkitTransform: 'translate(-50%, -50%)',
        width: '24px',
      },
      lowerToggleLabel: {
        cursor: 'pointer',
        display: 'block',
        left: '0%',
        marginTop: '5px',
        minWidth: '24px',
        position: 'absolute',
        textAlign: 'center',
        top: '0%',
        transform: 'translateX(-50%, -50%)',
        WebkitTransform: 'translateX(-50%, -50%)',
      },
      upperToggle: {
        background: StyleConstants.Colors.selectedColor,
        borderRadius: '100%',
        boxShadow: StyleConstants.ShadowLow,
        cursor: 'pointer',
        height: '24px',
        left: this.state.upperPixels,
        marginLeft: '10px',
        position: 'absolute',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        WebkitTransform: 'translate(-50%, -50%)',
        width: '24px',
        zIndex: 1,
      },
      upperToggleLabel: {
        cursor: 'pointer',
        display: 'block',
        left: '0%',
        marginTop: '5px',
        minWidth: '24px',
        position: 'absolute',
        textAlign: 'center',
        top: '0%',
        transform: 'translateX(-50%, -50%)',
        WebkitTransform: 'translateX(-50%, -50%)',
      },
      selected: {
        background: StyleConstants.Colors.selectedColor,
        height: '3px',
        left: this.state.lowerPixels + 10,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        WebkitTransform: 'translateY(-50%)',
        width: this.state.upperPixels - this.state.lowerPixels,
      },
      selectedLabel: {
        textAlign: 'center',
        marginTop: '30px',
        fontStyle: 'italic',
        opacity: 0.5,
      },
    };
  };

  render() {
    const styles = this.styles();
    return (
      <div className="mx-rangeselector" style={[styles.component, this.props.style]}>
        <div
          className="mx-rangeselector-range"
          onMouseLeave={this._handleDragEnd}
          onMouseMove={this._handleDragging}
          onMouseUp={this._handleDragEnd}
          onTouchEnd={this._handleDragEnd}
          onTouchMove={this._handleDragging}
          ref={ref => this.rangeSelectorRef = ref}
          style={styles.range}
        >
          <div
            className="mx-rangeselector-track-holder"
            onMouseDown={this._handleTrackMouseDown}
            style={styles.trackHolder}
          >
            <div className="mx-rangeselector-track" style={styles.track} />
            <div className="mx-rangeselector-selected" style={styles.selected}>
              <div className="mx-rangeselector-selected-label" style={styles.selectedLabel}>
                {this.state.selectedLabel}
              </div>
            </div>
          </div>
          <div
            className="mx-rangeselector-lower-toggle"
            onMouseDown={this._handleLowerDragStart}
            onTouchStart={this._handleLowerDragStart}
            style={styles.lowerToggle}
          >
            <label className="mx-rangeselector-lower-toggle-label" style={styles.lowerToggleLabel}>
              {this.props.formatter(this.state.lowerValue)}
            </label>
          </div>
          <div
            className="mx-rangeselector-upper-toggle"
            onMouseDown={this._handleUpperDragStart}
            onTouchStart={this._handleUpperDragStart}
            style={styles.upperToggle}
          >
            <label className="mx-rangeselector-upper-toggle-label" style={styles.upperToggleLabel}>
              {this.props.formatter(this.state.upperValue)}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

RangeSelector.propTypes = {
  lowerValue: React.PropTypes.number,
  upperValue: React.PropTypes.number,
  defaultLowerValue: React.PropTypes.number,
  defaultUpperValue: React.PropTypes.number,
  formatter: React.PropTypes.func,
  interval: React.PropTypes.number,
  lowerBound: React.PropTypes.number,
  itemName: React.PropTypes.string,
  onLowerDragStop: React.PropTypes.func,
  onUpperDragStop: React.PropTypes.func,
  updateOnDrag: React.PropTypes.bool,
  upperBound: React.PropTypes.number,
};

RangeSelector.defaultProps = {
  lowerValue: 0,
  upperValue: 1,
  defaultLowerValue: 0,
  defaultUpperValue: 1,
  interval: 1,
  formatter(value) { return value; },
  lowerBound: 0,
  itemName: '',
  onLowerDragStop() {},
  onUpperDragStop() {},
  updateOnDrag: false,
  upperBound: 100,
};

module.exports = Radium(RangeSelector);
