const React = require('react');

const styles = {
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
    backgroundColor: '#fff',
    cursor: 'pointer'
  },
  dotActive: {
    backgroundColor: '#b4dbc0'
  }
};

const PageIndicator = (props) => {

  const _handleDotClick = (e) => { if (props.onClick) props.onClick(parseInt(e.target.id)); };

  const _renderDots = () => {
    const dots = [];

    for (let i = 0; i < props.count; i++) {
      const dotStyles = props.activeIndex === i ? Object.assign({}, styles.dot, styles.dotActive) : styles.dot;
      dots.push(<span key={'dot' + i} id={i} onClick={_handleDotClick} style={dotStyles} />);
    }
    return dots;
  };

  let renderedDots = _renderDots();

  return (
    <div style={styles.component}>
      {renderedDots}
    </div>
  );
};

PageIndicator.propTypes = {
  activeIndex: React.PropTypes.number,
  count: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func
};

export default PageIndicator;
