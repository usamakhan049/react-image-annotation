'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Point = require('./Point');

var _Point2 = _interopRequireDefault(_Point);

var _Editor = require('./Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _PolygonControls = require('./PolygonControls');

var _PolygonControls2 = _interopRequireDefault(_PolygonControls);

var _FancyRectangle = require('./FancyRectangle');

var _FancyRectangle2 = _interopRequireDefault(_FancyRectangle);

var _Rectangle = require('./Rectangle');

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Oval = require('./Oval');

var _Oval2 = _interopRequireDefault(_Oval);

var _Polygon = require('./Polygon');

var _Polygon2 = _interopRequireDefault(_Polygon);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _RecatangleSelector = require('./Rectangle/RecatangleSelector');

var _RecatangleSelector2 = _interopRequireDefault(_RecatangleSelector);

var _OvalSelector = require('./Oval/OvalSelector');

var _OvalSelector2 = _interopRequireDefault(_OvalSelector);

var _PolygonSelector = require('./Polygon/PolygonSelector');

var _PolygonSelector2 = _interopRequireDefault(_PolygonSelector);

var _PointSelector = require('./Point/PointSelector');

var _PointSelector2 = _interopRequireDefault(_PointSelector);

var _selectors = require('../selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  innerRef: function innerRef() {},
  onChange: function onChange() {},
  onSubmit: function onSubmit() {},
  type: _selectors.RectangleSelector.TYPE,
  selectors: [_selectors.RectangleSelector, _selectors.PointSelector, _selectors.OvalSelector, _selectors.PolygonSelector],
  disableAnnotation: false,
  disableSelector: false,
  disableEditor: false,
  disableOverlay: false,
  imageZoomAmount: 1,
  zoomScale: 1,
  showActiveAnnotations: function showActiveAnnotations(annotation, active) {},
  activeAnnotationComparator: function activeAnnotationComparator(a, b) {
    return a === b;
  },
  renderSelector: function renderSelector(_ref) {
    var annotation = _ref.annotation,
        zoomScale = _ref.zoomScale;

    switch (annotation.geometry.type) {
      case _selectors.RectangleSelector.TYPE:
        return _react2.default.createElement(_RecatangleSelector2.default, {
          annotation: annotation,
          zoomScale: zoomScale
        });
      case _selectors.PointSelector.TYPE:
        return _react2.default.createElement(_PointSelector2.default, {
          annotation: annotation,
          zoomScale: zoomScale
        });
      case _selectors.OvalSelector.TYPE:
        return _react2.default.createElement(_OvalSelector2.default, {
          annotation: annotation,
          zoomScale: zoomScale
        });
      case _selectors.PolygonSelector.TYPE:
        return _react2.default.createElement(_PolygonSelector2.default, {
          annotation: annotation,
          zoomScale: zoomScale
        });
      default:
        return null;
    }
  },
  renderEditor: function renderEditor(_ref2) {
    var annotation = _ref2.annotation,
        onChange = _ref2.onChange,
        onSubmit = _ref2.onSubmit,
        imageZoomAmount = _ref2.imageZoomAmount;
    return _react2.default.createElement(_Editor2.default, {
      annotation: annotation,
      onChange: onChange,
      onSubmit: onSubmit,
      imageZoomAmount: imageZoomAmount
    });
  },
  renderPolygonControls: function renderPolygonControls(_ref3) {
    var annotation = _ref3.annotation,
        onSelectionComplete = _ref3.onSelectionComplete,
        onSelectionClear = _ref3.onSelectionClear,
        onSelectionUndo = _ref3.onSelectionUndo,
        imageZoomAmount = _ref3.imageZoomAmount,
        disableAnnotation = _ref3.disableAnnotation;
    return _react2.default.createElement(_PolygonControls2.default, {
      annotation: annotation,
      onSelectionComplete: onSelectionComplete,
      onSelectionClear: onSelectionClear,
      onSelectionUndo: onSelectionUndo,
      imageZoomAmount: imageZoomAmount,
      disableAnnotation: disableAnnotation
    });
  },
  renderHighlight: function renderHighlight(_ref4) {
    var key = _ref4.key,
        annotation = _ref4.annotation,
        active = _ref4.active,
        zoomScale = _ref4.zoomScale;

    switch (annotation.geometry.type) {
      case _selectors.RectangleSelector.TYPE:
        return _react2.default.createElement(_Rectangle2.default, {
          key: key,
          annotation: annotation,
          active: active,
          zoomScale: zoomScale
        });
      case _selectors.PointSelector.TYPE:
        return _react2.default.createElement(_Point2.default, {
          key: key,
          annotation: annotation,
          active: active,
          zoomScale: zoomScale
        });
      case _selectors.OvalSelector.TYPE:
        return _react2.default.createElement(_Oval2.default, {
          key: key,
          annotation: annotation,
          active: active,
          zoomScale: zoomScale
        });
      case _selectors.PolygonSelector.TYPE:
        return _react2.default.createElement(_Polygon2.default, {
          key: key,
          annotation: annotation,
          active: active,
          zoomScale: zoomScale
        });
      default:
        return null;
    }
  },
  renderContent: function renderContent(_ref5) {
    var key = _ref5.key,
        annotation = _ref5.annotation,
        imageZoomAmount = _ref5.imageZoomAmount,
        zoomScale = _ref5.zoomScale;
    return _react2.default.createElement(_Content2.default, {
      key: key,
      annotation: annotation,
      imageZoomAmount: imageZoomAmount,
      zoomScale: zoomScale
    });
  },
  renderOverlay: function renderOverlay(_ref6) {
    var type = _ref6.type,
        annotation = _ref6.annotation;

    switch (type) {
      case _selectors.PointSelector.TYPE:
        return ""
        // <Overlay>
        //   Click to Annotate
        // </Overlay>
        ;
      case _selectors.PolygonSelector.TYPE:
        return ""
        // <Overlay>
        //   Click to Add Points to Annotation
        // </Overlay>
        ;
      default:
        return ""
        // <Overlay>
        //   Click and Drag to Annotate
        // </Overlay>
        ;
    }
  }
};
module.exports = exports['default'];