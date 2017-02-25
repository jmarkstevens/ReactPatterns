const React = require('react');

class Icon extends React.Component {

  styles = () => {
    return {
      component: Object.assign({
        width: this.props.size,
        height: this.props.size,
        display: 'inline-block',
        verticalAlign: 'middle'
      }, this.props.style)
    };
  }

  render() {
    const {elementProps} = this.props;
    const styles = this.styles();

    return (
      <svg
        {...elementProps}
        className="mx-icon"
        preserveAspectRatio="xMidYMid meet"
        style={styles.component}
        viewBox="0 0 512 512"
      >
        <g>
          <path
            d={`M256,88.6c-92.3,0-167.4,75.1-167.4,167.4S163.7,423.4,256,423.4S423.4,348.3,423.4,256
            S348.3,88.6,256,88.6z M256,395.5c-76.9,0-139.5-62.6-139.5-139.5S179.1,116.5,256,116.5S395.5,179.1,395.5,256
            S332.9,395.5,256,395.5z`}
          />
          <path
            d={`M331.8,180.2c-5.4-5.4-14.3-5.4-19.7,0L256,236.3l-56.1-56.1c-5.4-5.4-14.3-5.4-19.7,0
            c-5.4,5.4-5.4,14.3,0,19.7l56.1,56.1l-56.1,56.1c-5.4,5.4-5.4,14.3,0,19.7c2.7,2.7,6.3,4.1,9.9,4.1c3.6,0,7.1-1.4,9.9-4.1
            l56.1-56.1l56.1,56.1c2.7,2.7,6.3,4.1,9.9,4.1s7.1-1.4,9.9-4.1c5.4-5.4,5.4-14.3,0-19.7L275.7,256l56.1-56.1
            C337.3,194.4,337.3,185.6,331.8,180.2z`}
          />
        </g>
      </svg>
    );
  }
}

Icon.propTypes = {
  elementProps: React.PropTypes.object,
  size: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  style: React.PropTypes.object,
  type: React.PropTypes.string
};

Icon.defaultProps = {
  elementProps: {},
  size: 24,
  type: 'accounts'
};

module.exports = Icon;
