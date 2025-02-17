var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
    }
    return User;
}());
var nuha = new User("n@ee.com", "Nuha");
var APerson = /** @class */ (function () {
    function APerson() {
    }
    return APerson;
}());
var person = new APerson();
person.name = "Nuhaaaa";
console.log(person.name);
