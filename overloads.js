// Overloads -> 
function abcd(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("something is wrong");
}
