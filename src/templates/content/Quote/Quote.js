"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Quote_scss_1 = __importDefault(require("./Quote.scss"));
function Quote(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: Quote_scss_1.default.quoteContainer }, { children: [(0, jsx_runtime_1.jsx)("div", { className: Quote_scss_1.default.quoteBlock }), (0, jsx_runtime_1.jsx)("div", __assign({ className: Quote_scss_1.default.contents }, { children: children }))] })));
}
exports.default = Quote;
