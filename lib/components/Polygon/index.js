'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: white;\n  border-radius: 1px;\n  width: 2px;\n  height: 2px;\n  margin-left: -1px;\n  margin-top: -1px;\n  position: absolute;\n'], ['\n  background: white;\n  border-radius: 1px;\n  width: 2px;\n  height: 2px;\n  margin-left: -1px;\n  margin-top: -1px;\n  position: absolute;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
//import LineTo from 'react-lineto'


var PointDot = _styledComponents2.default.div(_templateObject);

function edgesFromPoints(points) {
  if (!points || points.length < 3) return [];

  var edges = [];
  for (var i = 0; i < points.length; ++i) {
    if (i + 1 === points.length) {
      edges.push(Math.hypot(points[0].x - points[i].x, points[0].y - points[i].y));
    } else {
      edges.push(Math.hypot(points[i + 1].x - points[i].x, points[i + 1].y - points[i].y));
    }
  }

  return edges;
}

function Polygon(props) {
  var geometry = props.annotation.geometry;

  if (!geometry || !geometry.points || geometry.points.length === 0) return null;
  var points = "";
  return (
    // <div
    //   className={`linesContainer ${props.className}`}
    //   style={{
    //     width: '100%',
    //     height: '100%',
    //     ...props.style
    //   }}
    // >
    _react2.default.createElement(
      'svg',
      { width: '100%', height: '100%', viewBox: '0 0 100 100', preserveAspectRatio: 'none' },
      geometry.points.length >= 3 && geometry.points.map(function (item, i) {
        // Iterate over points to create the edge lines
        var prevItem = void 0;
        if (i === 0) {
          // First point (links from last to first)
          prevItem = geometry.points[geometry.points.length - 1];
        } else {
          prevItem = geometry.points[i - 1];
        }
        points = points + " " + item.x + "," + item.y;

        return (
          // Note that each LineTo element must have a unique key (unique relative to the connected points)
          // <LineTo
          //   key={i + "_" + item.x + "_" + item.y + "_" + prevItem.x + "_" + prevItem.y}
          //   from="linesContainer"
          //   fromAnchor={item.x + "% " + item.y + "%"}
          //   to="linesContainer"
          //   toAnchor={prevItem.x + "% " + prevItem.y + "%"}
          //   borderColor={'white'}
          //   borderStyle={'dashed'}
          //   borderWidth={2}
          //   className={(!props.active) ? "Polygon-LineTo" : "Polygon-LineToActive"}
          //   within="linesContainer"
          //   //delay={false}
          // />
          _react2.default.createElement('line', { x1: item.x + "%", y1: item.y + "%", x2: prevItem.x + "%", y2: prevItem.y + "%", stroke: props.active ? "yellow" : "white",
            'stroke-width': props.zoomScale >= 2 && props.zoomScale <= 3.5 ? "0.3px" : props.zoomScale > 3.5 && props.zoomScale <= 8 ? "0.2px" : "0.4px", className: 'polygon-line' })

          // <div class="Polygon-LineTo"  style={{borderTop: "2px dashed white",width: item.width+"% ",
          //  position: "absolute", top: item.y+"%", left: item.x+"%",  transform: "rotate(80.2635deg)", transformOrigin: "0px 0px"}}></div>

        );
      }),
      _react2.default.createElement('polygon', { points: points, style: { fill: "rgba(25, 118, 210, 0.27)", stroke: "#1976d2", strokeWidth: '' + (props.zoomScale >= 2 && props.zoomScale <= 3.5 ? "0.2px" : props.zoomScale > 3.5 && props.zoomScale <= 8 ? "0.1px" : "0.275px") }, className: 'polygon-line' }),
      geometry.points.map(function (item, i) {
        var _React$createElement;

        // Iterate over points to points
        return (
          // Note that each LineTo element must have a unique key (unique relative to the point)
          // <PointDot
          //   key={i + "_" + item.x + "_" + item.y}
          //   style={{
          //     left: item.x + "% ",
          //     top: item.y + "%"
          //   }}
          // />
          _react2.default.createElement('circle', (_React$createElement = { cx: item.x + "% ", cy: item.y + "%", r: '0.1', stroke: 'white', 'stroke-width': props.zoomScale >= 2 && props.zoomScale <= 3.5 ? "0.1px" : props.zoomScale > 3.5 && props.zoomScale <= 8 ? "0.05px" : "0.2px", fill: '#1976d2' }, _React$createElement['stroke'] = props.active ? "yellow" : "white", _React$createElement))
        );
      })
    )
  );
}

Polygon.defaultProps = {
  className: '',
  style: {}
};

exports.default = Polygon;
module.exports = exports['default'];