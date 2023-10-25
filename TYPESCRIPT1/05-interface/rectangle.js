"use strict";
// import {shape} from "./shape";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(_x, _y, _height, _width) {
        this._x = _x;
        this._y = _y;
        this._height = _height;
        this._width = _width;
    }
    Rectangle.prototype.getInfo = function () {
        return "x=".concat(this._x, " and y=").concat(this._y, " height : ").concat(this._height, " and width : ").concat(this._width);
    };
    Rectangle.prototype.calculateArea = function () {
        return this._height * this._width;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
