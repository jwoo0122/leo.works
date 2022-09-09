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
// Int
var Anchor_scss_1 = __importDefault(require("./Anchor.scss"));
function Anchor(_a) {
    var href = _a.href, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("a", __assign({ style: { textDecoration: "none" }, className: Anchor_scss_1.default.linkContainer, href: href, target: "_blank", rel: "noopener noreferrer" }, { children: children })));
}
exports.default = Anchor;
