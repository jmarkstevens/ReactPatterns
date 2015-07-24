'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var Block = (function (_React$Component) {
  function Block(props) {
    _classCallCheck(this, Block);

    _get(Object.getPrototypeOf(Block.prototype), 'constructor', this).call(this, props);
    this.rules = props.style || {};
  }

  _inherits(Block, _React$Component);

  _createClass(Block, [{
    key: '_buildGeneral',
    value: function _buildGeneral() {
      if (this.props.block) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].block);
      }
      if (this.props.hidden) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].hidden);
      }
      if (this.props.invisible) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].invisible);
      }
      return this;
    }
  }, {
    key: '_buildPosition',
    value: function _buildPosition() {
      if (this.props.relative) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].relative);
      }
      if (this.props.absolute) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].absolute);
      }
      return this;
    }
  }, {
    key: '_buildLayout',
    value: function _buildLayout() {
      if (this.props.layout) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].layout, _layout2['default'].vertical);
      }
      if (this.props.inline) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].inline, _layout2['default'].horizontal);
      }
      if (this.props.centered) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].centered);
      }
      return this;
    }
  }, {
    key: '_buildFlex',
    value: function _buildFlex() {
      if (this.props.flex) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].flexAuto);
      } else {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].flexNone);
      }
      return this;
    }
  }, {
    key: '_buildDirection',
    value: function _buildDirection() {
      if (this.props.vertical) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].vertical);
        if (this.props.reverse) {
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].verticalReverse);
        }
      }
      if (this.props.horizontal) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].horizontal);
        if (this.props.reverse) {
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].horizontalReverse);
        }
      }
      return this;
    }
  }, {
    key: '_buildWrap',
    value: function _buildWrap() {
      if (this.props.wrap) {
        this.rules = _layout2['default'].extend(this.rules, _layout2['default'].wrap);
        if (this.props.reverse) {
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].wrapReverse);
        }
      }
      return this;
    }
  }, {
    key: '_buildAlign',
    value: function _buildAlign() {
      switch (this.props.align) {
        case 'start':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].alignStart);
          break;
        case 'center':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].alignCenter);
          break;
        case 'end':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].alignEnd);
          break;
        case 'stretch':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].alignStretch);
          break;
        default:
          break;
      }

      switch (this.props.self) {
        case 'start':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].selfAlignStart);
          break;
        case 'center':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].selfAlignCenter);
          break;
        case 'end':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].selfAlignEnd);
          break;
        case 'stretch':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].selfAlignStretch);
          break;
        default:
          break;
      }

      return this;
    }
  }, {
    key: '_buildJustify',
    value: function _buildJustify() {
      switch (this.props.justify) {
        case 'start':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyStart);
          break;
        case 'center':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyCenter);
          break;
        case 'end':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyEnd);
          break;
        case 'between':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyBetween);
          break;
        case 'around':
          this.rules = _layout2['default'].extend(this.rules, _layout2['default'].justifyAround);
          break;
        default:
          break;
      }
      return this;
    }
  }, {
    key: '_buildStyles',
    value: function _buildStyles() {
      var style = this._buildGeneral()._buildPosition()._buildLayout()._buildFlex()._buildWrap()._buildDirection()._buildAlign()._buildJustify();
      return style.rules;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var node = props.el || 'div';
      var rules = this._buildStyles();
      return _react2['default'].createElement(node, _layout2['default'].extend(props, { style: rules }));
    }
  }]);

  return Block;
})(_react2['default'].Component);

;

Block.PropTypes = {
  el: _react2['default'].PropTypes.string,
  block: _react2['default'].PropTypes.bool,
  hidden: _react2['default'].PropTypes.bool,
  invisible: _react2['default'].PropTypes.bool,
  relative: _react2['default'].PropTypes.bool,
  absolute: _react2['default'].PropTypes.bool,
  layout: _react2['default'].PropTypes.bool,
  inline: _react2['default'].PropTypes.bool,
  flex: _react2['default'].PropTypes.bool,
  vertical: _react2['default'].PropTypes.bool,
  horizontal: _react2['default'].PropTypes.bool,
  reverse: _react2['default'].PropTypes.bool,
  align: _react2['default'].PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  self: _react2['default'].PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
  justify: _react2['default'].PropTypes.oneOf(['start', 'center', 'end', 'between', 'around']),
  centered: _react2['default'].PropTypes.bool
};

exports['default'] = Block;
module.exports = exports['default'];