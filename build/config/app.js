"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _ejs = _interopRequireDefault(require("ejs"));

var _path = _interopRequireDefault(require("path"));

var _router = _interopRequireDefault(require("../router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = (0, _express["default"])();
App.use((0, _cors["default"])({
  origin: true
}));
App.use(_express["default"].json());
App.use((0, _morgan["default"])('dev'));
App.use(_express["default"]["static"](_path["default"].join(__dirname, '../../public')));
App.set('views', _path["default"].join(__dirname, '../../public'));
App.set('view engine', 'html');
App.engine('html', _ejs["default"].renderFile);
App.use(_router["default"]);
var _default = App;
exports["default"] = _default;