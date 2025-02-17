// Primitive Types (number, string, boolean)
var age = 25;
var username = "nuha"; // Changed from "harsh"
var isLoggedIn = true;
// Arrays
var numbers = [1, 2, 3, 4];
var names = ["Alice", "Bob", "Charlie"];
// Tuples (Fixed-length array with specific types)
var arr = ["nuha", 25]; // Changed from "harsh"
// Enums (Define named constants)
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
// Using Enums
var userRole = UserRoles.ADMIN;
console.log(userRole); // Output: "admin"
// Any, Unknown, Void, Null, Undefined, Never
var randomValue = 10; // Can be any type
randomValue = "Now it's a string"; // No error
var something = "I am unknown"; // Safe than any, requires type checking
if (typeof something === "string") {
    console.log(something.toUpperCase());
}
function logMessage() {
    console.log("This function returns nothing");
}
var emptyValue = null;
var notDefined = undefined;
function throwError(message) {
    throw new Error(message);
}
