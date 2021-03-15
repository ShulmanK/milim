"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var headers = new Headers();
headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
headers.append("Access-Control-Allow-Credentials", "true");

var instance = _axios["default"].create({
  baseURL: "http://localhost:5000",
  headers: headers
});

var _default = instance;
exports["default"] = _default;