// Primitive Types (number, string, boolean)
let age: number = 25;
let username: string = "nuha";  // Changed from "harsh"
let isLoggedIn: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];

// Tuples (Fixed-length array with specific types)
let arr: [string, number] = ["nuha", 25];  // Changed from "harsh"

// Enums (Define named constants)
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}

// Using Enums
let userRole: UserRoles = UserRoles.ADMIN;
console.log(userRole);  // Output: "admin"

// Any, Unknown, Void, Null, Undefined, Never
let randomValue: any = 10;  // Can be any type
randomValue = "Now it's a string";  // No error

let something: unknown = "I am unknown"; // Safe than any, requires type checking
if (typeof something === "string") {
    console.log(something.toUpperCase());
}

function logMessage(): void { 
    console.log("This function returns nothing"); 
}

let emptyValue: null = null;
let notDefined: undefined = undefined;

function throwError(message: string): never {
    throw new Error(message);
}
