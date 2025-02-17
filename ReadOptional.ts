//ReadOnly
type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
}

let myUser: User = {
    _id: "1245",
    name: "John",
    email: "john@example.com",
    isActive: true
};

// myUser._id = "5678";  
// ❌ Error: Cannot assign to '_id' because it is a read-only property.
//ReadOnly with Arrays
type ReadonlyArrayExample = {
    readonly values: number[];
}

let obj: ReadonlyArrayExample = {
    values: [1, 2, 3]
};

// obj.values.push(4);  ❌ Error: Cannot push to 'values' because it is a read-only array.


//optional
type User = {
    _id: string;
    name: string;
    email?: string; // Optional property
}

let user1: User = { _id: "123", name: "Alice" };  //Works without email
let user2: User = { _id: "456", name: "Bob", email: "bob@example.com" }; //Works with email
