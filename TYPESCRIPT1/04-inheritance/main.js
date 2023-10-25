"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
var rectangle = new rectangle_1.Rectangle(11, 22, 33, 44);
var shapes = [];
shapes.push(rectangle);
shapes.forEach(function (shape) {
    console.log(shape.getInfo());
    console.log("--------------");
});
