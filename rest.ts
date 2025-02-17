//function abcd(...args: number[]){
    // ...rest/spread -- only 3 dots
    // 1. rest if we want to collect multiple arguments into an array
    // 2. spread if used to copy an array or object to expand 
//}
function func(...arr: number[]) { 
    console.log(arr); // [1,2,3,4,5,6,7,8,9,10]
}

func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); 

//spread
const num = [1, 2, 3, 4, 5];
console.log(...num); // 1 2 3 4 5

const moreNumbers = [...num, 6, 7, 8]; 
console.log(moreNumbers); 
// [1, 2, 3, 4, 5, 6, 7, 8]

const person = { name: "Nuha", age: 434243 };
const copy = { ...person };

console.log(copy); 
// {name: "Nuha", age: 434243 }
