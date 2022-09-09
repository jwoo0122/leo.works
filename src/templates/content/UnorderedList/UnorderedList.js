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
var UnorderedList_scss_1 = __importDefault(require("./UnorderedList.scss"));
function OrderedList(_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)("ul", __assign({ className: UnorderedList_scss_1.default.wrapper }, { children: children }));
}
exports.default = OrderedList;
