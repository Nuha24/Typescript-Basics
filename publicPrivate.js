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
var User = /** @class */ (function () {
    function User(email, password, age) {
        //readonly -> something once set, can never change 
        this.city = "Dhaka";
        this.email = email;
        this.password = password;
        this.age = age;
    }
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getPassword = function () {
        return this.password;
        //method to get password as its private accessed only in this class
    };
    User.prototype.getAge = function () {
        return this.age;
        //only this and its subclass can as its protected
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(email, password, age) {
        return _super.call(this, email, password, age) || this;
    }
    Admin.prototype.getAdminAge = function () {
        return this.age;
        // admin shall check their age and it works because age is protected 
    };
    return Admin;
}(User));
var user = new User("nuha@example.com", "superSecret", 25);
console.log(user.email);
console.log(user.city);
console.log(user.password); //none can access it and it's private
console.log(user.age); // none can access it and it's protected
//suppose a new admin
var admin = new Admin("admin@example.com", "adminPass", 30);
console.log(admin.getAdminAge()); // works as its using a protected property 
