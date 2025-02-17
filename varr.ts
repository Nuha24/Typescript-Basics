let user ={name: "Nuha", age:24}

console.log("BLAH BLAH BLAH");
console.log(user.name); 
 
let greetings: string = "HELLO! LEARNING TS" 
//defined a variable "greetings" where only string type can come! 

console.log(greetings);
greetings.toLowerCase

// number
let mynum: number = 3747367.236
mynum.toFixed() 

// boolean 
let isOkay: boolean= false 
isOkay.valueOf //true or false

//type inference -> putting annotation 
//always infer a datatype
// NoImplicitAny -> compiler flag 

//function addTwo(num) --> brings any error so must define
function addTwo(num: number) 
{
    return num+2
}
addTwo(5) 

function MultiOne(num: number): number
{
    return num*1
}
//addOne("NUHA") will show error due to the -> : number
function getUpper(val: string){ //any error if string not defined
    return val.toUpperCase()
}
getUpper("noo") 

function signUpUser(name: string, email: string, isTrue: boolean){ }
signUpUser("Nuha", "blah@gmail.com", false)

//Passing default values --> first annotate then add value like boolean=false 
// so that you dont have to write every value in something
//var loginUser = (name: string, email: string, isTrue: boolean = false) => {}
var loginUser = (name: string, email: string, isTrue: boolean = false) => {}
loginUser("h", "h@history.com")

//function getValue(myVal: number): boolean{
   // if(myVal>5){
   //     return true
    //}
   // return "200OK"
//}
const getHello=(s: string):string =>{
    return ""
} //arrow function


let age: number = 25;
let name: string = "Alice";
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob"];
let person: [string, number] = ["Alice", 25];

enum Color { Red, Green, Blue }
let color: Color = Color.Green;


let value: any = "Hello";
value = 42; 

let data: unknown = "test";

function logMessage(): void { console.log("Hello!"); }

let empty: null = null;
let notDefined: undefined = undefined;

function error(message: string): never { throw new Error(message); }


export{}