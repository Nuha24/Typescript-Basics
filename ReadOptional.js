var myUser = {
    _id: "1245",
    name: "John",
    email: "john@example.com",
    isActive: true
};
var obj = {
    values: [1, 2, 3]
};
var user1 = { _id: "123", name: "Alice" }; // ✅ Works without email
var user2 = { _id: "456", name: "Bob", email: "bob@example.com" }; // ✅ Works with email
