const React = require('react');

const StyleConstants = {
  Colors: {
    activeIndexColor: '#b4dbc0',
    dotColor: '#fff',
  },
};

export default class PageIndicator extends React.Component {
  constructor(props) {
    super(props);
    this._handleDotClick = this._handleDotClick.bind(this);
    this._renderDots = this._renderDots.bind(this);
  }

  _handleDotClick (e) { if (this.props.onClick) this.props.onClick(parseInt(e.target.id)); }

  _renderDots () {
    const styles = this.styles();
    const dots = [];

    for (let i = 0; i < this.props.count; i++) {
      const dotStyles = this.props.activeIndex === i ? Object.assign({}, styles.dot, styles.dotActive) : styles.dot;
      dots.push(<span key={'dot' + i} id={i} onClick={this._handleDotClick} style={dotStyles} />);
    }
    return dots;
  }

  styles = () => {
    return {
      component: {
        textAlign: 'center',
        padding: '0',
      },
      dot: {
        width: 9,
        height: 9,
        margin: 7,
        padding: 0,
        borderRadius: '100%',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundColor: StyleConstants.Colors.dotColor,
        cursor: 'pointer'
      },
      dotActive: {
        backgroundColor: StyleConstants.Colors.activeIndexColor
      }
    };
  }

  render() {
    const styles = this.styles();
    let renderedDots = this._renderDots();

    return (
      <div style={styles.component}>
        {renderedDots}
      </div>
    );
  }
}

PageIndicator.propTypes = {
  activeIndex: React.PropTypes.number,
  count: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func
};
