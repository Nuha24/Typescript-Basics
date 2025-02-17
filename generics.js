//<>
var Score = [];
var Name = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
//function identityThree<"3">(val: "3"): "3"
identityThree("3");
function identityFour(val) {
    return val;
}
//identityFour<bottle>({})
function getSearchProducts(products) {
    //database operations
    var myIndex = 5;
    return products[myIndex];
}
//how to define a arrow function & definition <T>(): => {}
// , -> to ensure its not an ordinary syntax rather a syntax for generics
var getMoreSearchProducts = function (products) {
    var myIndex = 4;
    return products[myIndex];
};
