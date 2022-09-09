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
var Heading_scss_1 = __importDefault(require("./Heading.scss"));
function Heading(_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsx)("a", __assign({ href: "#".concat(children), className: Heading_scss_1.default.linkWrapper }, { children: (0, jsx_runtime_1.jsx)("h1", __assign({ id: children === null || children === void 0 ? void 0 : children.toString(), className: Heading_scss_1.default.heading1 }, { children: children })) })));
}
exports.default = Heading;
