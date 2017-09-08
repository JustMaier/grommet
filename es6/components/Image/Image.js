function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { compose } from 'recompose';

import StyledImage from './StyledImage';

import { withTheme } from '../hocs';

import doc from './doc';

var Image = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Image.prototype.render = function render() {
    return React.createElement(StyledImage, this.props);
  };

  return Image;
}(Component);

if (process.env.NODE_ENV !== 'production') {
  doc(Image);
}

export default compose(withTheme)(Image);