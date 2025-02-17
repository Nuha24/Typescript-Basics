var a; // Union 
function abcd(a) {
    a.getDetails("User details here");
}
// Example 
var adminUser = {
    name: "Nuha",
    email: "n@h.com",
    getDetails: function (userInfo) {
        console.log("Admin Details:", userInfo);
    },
};
abcd(adminUser);
