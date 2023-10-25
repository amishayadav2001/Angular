var Customer3 = /** @class */ (function () {
    function Customer3(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Customer3.prototype.setFirstName = function (firstName) {
        this._firstName = firstName;
    };
    Customer3.prototype.setLastName = function (lastName) {
        this._lastName = lastName;
    };
    Customer3.prototype.getFirstName = function () {
        return this._firstName;
    };
    Customer3.prototype.getLastName = function () {
        return this._lastName;
    };
    return Customer3;
}());
var newCustomer3 = new Customer3("Amisha", "yadav");
console.log(newCustomer3.getFirstName());
console.log(newCustomer3.getLastName());
