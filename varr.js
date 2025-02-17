"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "Nuha", age: 24 };
console.log("BLAH BLAH BLAH");
console.log(user.name);
var greetings = "HELLO! LEARNING TS";
//defined a variable "greetings" where only string type can come! 
console.log(greetings);
greetings.toLowerCase;
// number
var mynum = 3747367.236;
mynum.toFixed();
// boolean 
var isOkay = false;
isOkay.valueOf; //true or false
//type inference -> putting annotation 
//always infer a datatype
// NoImplicitAny -> compiler flag 
//function addTwo(num) --> brings any error so must define
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function MultiOne(num) {
    return num * 1;
}
//addOne("NUHA") will show error due to the -> : number
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("noo");
function signUpUser(name, email, isTrue) { }
signUpUser("Nuha", "blah@gmail.com", false);
//Passing default values --> first annotate then add value like boolean=false 
// so that you dont have to write every value in something
//var loginUser = (name: string, email: string, isTrue: boolean = false) => {}
var loginUser = function (name, email, isTrue) {
    if (isTrue === void 0) { isTrue = false; }
};
loginUser("h", "h@history.com");
//function getValue(myVal: number): boolean{
// if(myVal>5){
//     return true
//}
// return "200OK"
//}
var getHello = function (s) {
    return "";
}; //arrow function
var age = 25;
var name = "Alice";
var isActive = true;
var numbers = [1, 2, 3, 4];
var names = ["Alice", "Bob"];
var person = ["Alice", 25];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
var value = "Hello";
value = 42;
var data = "test";
function logMessage() { console.log("Hello!"); }
var empty = null;
var notDefined = undefined;
function error(message) { throw new Error(message); }
