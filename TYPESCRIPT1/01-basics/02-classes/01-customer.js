var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
var customer = new Customer("Amisha", "yadav");
console.log(customer.firstName);
console.log(customer.lastName);
