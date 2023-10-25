"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
var rectangle = new rectangle_1.Rectangle(11, 22, 33, 44);
var shapes = [];
shapes.push(rectangle);
shapes.forEach(function (s) {
    //console.log("Info : " + s.getInfo());
    console.log("Area : " + s.calculateArea());
    console.log("--------------");
});
