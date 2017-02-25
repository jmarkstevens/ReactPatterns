const React = require('react');
const Radium = require('radium');

const StyleConstants = {
  Colors: {
    trackColor: '#4d2c3d',
    selectedColor: '#ab9353',
  },
  FontFamily: 'Helvetica, Arial, sans-serif',
  ShadowLow: '0 1px 2px rgba(0,0,0,0.1)',
  Spacing: {
    XLARGE: 30,
    LARGE: '24px',
    MEDIUM: 15,
    SMALL: 10,
    XSMALL: 5
  },
};

class SimpleSlider extends React.Component {
  state = {
    dragging: false,
    leftPixels: 0,
    width: 0
  }

  componentDidMount = () => {
    if (!this.rangeSelectorRef) return;
    const component = this.rangeSelectorRef;
    const width = component.clientWidth;
    const leftPixels = this.props.percent * width;

    this.setState({width, leftPixels});
  }

  componentWillReceiveProps = (newProps) => {
    if (this.props.percent !== newProps.percent) {
      const leftPixels = newProps.percent * this.state.width;

      this.setState({leftPixels});
    }
  }

  _handleMouseEvents = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const leftSpace = this.rangeSelectorRef.getBoundingClientRect().left;
    let currentPercent = (clientX - leftSpace) / this.state.width;

    if (currentPercent < 0) {
      currentPercent = 0;
    } else if (currentPercent > 1) {
      currentPercent = 1;
    }

    this.props.onPercentChange(this.props.formatter(currentPercent), this.props.itemName);
  }

  _handleDragStart = () => { this.setState({dragging: true}); }

  _handleDragging = (e) => { if (this.state.dragging) { this._handleMouseEvents(e); } }

  _handleDragEnd = () => { this.setState({dragging: false}); }

  styles = () => {
    let cursorStyle = 'grab';

    if (this.props.disabled) {
      cursorStyle = 'not-allowed';
    }
    if (this.state.dragging) {
      cursorStyle = 'grabbing';
    }

    return Object.assign({}, {
      component: {
        fontFamily: StyleConstants.FontFamily,
        fontSize: '.8em',
        fontWeight: '700',
        position: 'relative'
      },
      range: {
        margin: `0 ${StyleConstants.Spacing.MEDIUM}px`,
        padding: '0px 0',
      },
      track: {
        background: StyleConstants.Colors.trackColor,
        borderRadius: '3px',
        height: '7px',
        marginLeft: '-5px'
      },
      trackHolder: {
        cursor: cursorStyle,
        padding: `${StyleConstants.Spacing.MEDIUM}px 0`,
      },
      toggle: {
        background: StyleConstants.Colors.selectedColor,
        borderRadius: '100%',
        boxShadow: StyleConstants.ShadowLow,
        cursor: cursorStyle,
        height: StyleConstants.Spacing.LARGE,
        left: this.state.leftPixels,
        position: 'absolute',
        top: '50%',
        transform: 'translate(20%, -50%)',
        WebkitTransform: 'translate(20%, -50%)',
        width: StyleConstants.Spacing.LARGE,
        zIndex: 2
      },
      toggleLabel: {
        cursor: 'pointer',
        display: 'block',
        left: '0%',
        marginTop: '5px',
        minWidth: StyleConstants.Spacing.LARGE,
        position: 'absolute',
        textAlign: 'center',
        top: '0%',
        transform: 'translateX(-50%, -50%)',
        WebkitTransform: 'translateX(-50%, -50%)',
      },
      selected: {
        background: StyleConstants.Colors.selectedColor,
        borderRadius: '3px',
        left: StyleConstants.Spacing.SMALL,
        height: '3px',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        WebkitTransform: 'translateY(-50%)',
        width: this.state.leftPixels,
        zIndex: 1
      }
    }, this.props.styles);
  }

  render() {
    const styles = this.styles();
    const {disabled} = this.props;

    return (
      <div style={styles.component}>
        <div
          onMouseLeave={disabled ? null : this._handleDragEnd}
          onMouseMove={disabled ? null : this._handleDragging}
          onMouseUp={disabled ? null : this._handleDragEnd}
          onTouchEnd={disabled ? null : this._handleDragEnd}
          onTouchMove={disabled ? null : this._handleDragging}
          ref={ref => this.rangeSelectorRef = ref}
          style={styles.range}
        >
          <div
            onMouseDown={disabled ? null : this._handleMouseEvents}
            style={styles.trackHolder}
          >
            <div style={styles.track} />
            <div style={styles.selected} />
          </div>
          <div
            onMouseDown={disabled ? null : this._handleDragStart}
            onTouchStart={disabled ? null : this._handleDragStart}
            style={styles.toggle}
          >
            <label className="mx-rangeselector-upper-toggle-label" style={styles.toggleLabel}>
              {this.props.formatter(this.props.percent)}
            </label>
          </div>
        </div>
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  disabled: React.PropTypes.bool,
  formatter: React.PropTypes.func,
  itemName: React.PropTypes.string,
  onPercentChange: React.PropTypes.func.isRequired,
  percent: React.PropTypes.number.isRequired,
  selectedColor: React.PropTypes.string,
  styles: React.PropTypes.object
};

SimpleSlider.defaultProps = {
  disabled: false,
  formatter (value) { return value; },
  itemName: '',
  selectedColor: StyleConstants.Colors.selectedColor
};

module.exports = Radium(SimpleSlider);
