"use strict";

require("dotenv/config");

var _app = _interopRequireDefault(require("./config/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var APP_PORT = process.env.APP_PORT;

_app["default"].listen(APP_PORT);