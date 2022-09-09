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
// Ext
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
var prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
// Intck'
var useDarkMode_1 = __importDefault(require("Hooks/useDarkMode"));
var CodeBlock_scss_1 = __importDefault(require("./CodeBlock.scss"));
function PreTag(_a) {
    var children = _a.children;
    return (0, jsx_runtime_1.jsx)("pre", __assign({ className: CodeBlock_scss_1.default.codeWrapper }, { children: children }));
}
var codeTagProps = {
    style: {
        fontFamily: "inherit",
    },
};
function CodeBlock(_a) {
    var className = _a.className, children = _a.children;
    var isDarkMode = (0, useDarkMode_1.default)();
    return ((0, jsx_runtime_1.jsx)(react_syntax_highlighter_1.Prism, { PreTag: PreTag, codeTagProps: codeTagProps, language: className === null || className === void 0 ? void 0 : className.split("-")[1], style: isDarkMode ? prism_1.nord : prism_1.solarizedlight }));
}
exports.default = CodeBlock;
