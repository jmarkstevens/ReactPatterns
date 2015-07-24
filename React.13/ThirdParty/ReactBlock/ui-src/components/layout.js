'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var extend = function extend() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var newObj = {};
  for (var i in args) {
    var obj = args[i];
    for (var key in obj) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

var layout = undefined,
    inline = undefined,
    flexAuto = undefined,
    flexNone = undefined;
var horizontal = undefined,
    horizontalReverse = undefined,
    vertical = undefined,
    verticalReverse = undefined;
var alignStart = undefined,
    alignCenter = undefined,
    alignEnd = undefined,
    alignStretch = undefined;
var selfAlignStart = undefined,
    selfAlignCenter = undefined,
    selfAlignEnd = undefined,
    selfAlignStretch = undefined;
var justifyStart = undefined,
    justifyCenter = undefined,
    justifyEnd = undefined,
    justifyBetween = undefined,
    justifyAround = undefined;
var block = undefined,
    hidden = undefined,
    invisible = undefined;
var relative = undefined,
    absolute = undefined;
var wrap = undefined,
    wrapReverse = undefined;
var centered = undefined;

layout = {
  display: 'flex'
};

inline = {
  display: 'inline-flex'
};

flexAuto = {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto'
};

flexNone = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto'
};

block = {
  display: 'block'
};

hidden = {
  display: 'none'
};

invisible = {
  visibility: 'hidden'
};

relative = {
  position: 'relative'
};

absolute = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

horizontal = extend(layout, {
  flexDirection: 'row'
});

horizontalReverse = extend(layout, {
  flexDirection: 'row-reverse'
});

vertical = extend(layout, {
  flexDirection: 'column'
});

verticalReverse = extend(layout, {
  flexDirection: 'column-reverse'
});

alignStart = {
  alignItems: 'flex-start'
};

alignCenter = {
  alignItems: 'center'
};

alignEnd = {
  alignItems: 'flex-end'
};

alignStretch = {
  alignItems: 'stretch'
};

selfAlignStart = {
  alignSelf: 'flex-start'
};

selfAlignCenter = {
  alignSelf: 'center'
};

selfAlignEnd = {
  alignSelf: 'flex-end'
};

selfAlignStretch = {
  alignSelf: 'stretch'
};

justifyStart = {
  justifyContent: 'flex-start'
};

justifyCenter = {
  justifyContent: 'center'
};

justifyEnd = {
  justifyContent: 'flex-end'
};

justifyBetween = {
  justifyContent: 'space-between'
};

justifyAround = {
  justifyContent: 'space-around'
};

wrap = {
  flexWrap: 'wrap'
};

wrapReverse = {
  flexWrap: 'wrap-reverse'
};

centered = extend(layout, alignCenter, justifyCenter);

exports['default'] = {
  extend: extend,
  block: block,
  hidden: hidden,
  invisible: invisible,
  relative: relative,
  absolute: absolute,
  layout: layout,
  inline: inline,
  flexAuto: flexAuto,
  flexNone: flexNone,
  horizontal: horizontal,
  horizontalReverse: horizontalReverse,
  vertical: vertical,
  verticalReverse: verticalReverse,
  alignStart: alignStart,
  alignCenter: alignCenter,
  alignEnd: alignEnd,
  alignStretch: alignStretch,
  selfAlignStart: selfAlignStart,
  selfAlignCenter: selfAlignCenter,
  selfAlignEnd: selfAlignEnd,
  selfAlignStretch: selfAlignStretch,
  justifyStart: justifyStart,
  justifyCenter: justifyCenter,
  justifyEnd: justifyEnd,
  justifyBetween: justifyBetween,
  justifyAround: justifyAround,
  wrap: wrap,
  wrapReverse: wrapReverse,
  centered: centered
};
module.exports = exports['default'];