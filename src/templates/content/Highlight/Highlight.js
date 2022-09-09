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
var classnames_1 = __importDefault(require("classnames"));
var useTooltip_1 = __importDefault(require("Hooks/useTooltip"));
var Highlight_scss_1 = __importDefault(require("./Highlight.scss"));
function HighLight(_a) {
    var _b;
    var comment = _a.comment, children = _a.children;
    var _c = (0, useTooltip_1.default)(children, comment), handleShowTooltip = _c.handleShowTooltip, isShowing = _c.isShowing;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: (0, classnames_1.default)(Highlight_scss_1.default.wrapper, (_b = {},
            _b[Highlight_scss_1.default.isShowing] = isShowing,
            _b)), onClick: handleShowTooltip }, { children: children })));
}
exports.default = HighLight;
