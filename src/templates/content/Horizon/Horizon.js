"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Horizon_scss_1 = __importDefault(require("./Horizon.scss"));
function Horizon() {
    return ((0, jsx_runtime_1.jsx)("div", { className: Horizon_scss_1.default.horizon }));
}
exports.default = (0, react_1.memo)(Horizon);
