"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer4 = void 0;
var Customer4 = /** @class */ (function () {
    function Customer4(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Customer4.prototype.setFirstName = function (firstName) {
        this._firstName = firstName;
    };
    Customer4.prototype.setLastName = function (lastName) {
        this._lastName = lastName;
    };
    Customer4.prototype.getFirstName = function () {
        return this._firstName;
    };
    Customer4.prototype.getLastName = function () {
        return this._lastName;
    };
    return Customer4;
}());
exports.Customer4 = Customer4;
// let newCustomer4 = new Customer3("Amisha","yadav");
// console.log(newCustomer4.getFirstName());
// console.log(newCustomer4.getLastName());
