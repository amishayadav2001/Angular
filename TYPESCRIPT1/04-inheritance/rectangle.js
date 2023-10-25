"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var shape_1 = require("./shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(theX, theY, _height, _width) {
        var _this = _super.call(this, theX, theY) || this;
        _this._height = _height;
        _this._width = _width;
        return _this;
    }
    Rectangle.prototype.getInfo = function () {
        // super.getInfo();
        // console.log("Height :"+ this._height);
        // console.log("Width :"+ this._width);
        return _super.prototype.getInfo.call(this) + " height : ".concat(this._height, " and width :").concat(this._width);
    };
    return Rectangle;
}(shape_1.shape));
exports.Rectangle = Rectangle;
