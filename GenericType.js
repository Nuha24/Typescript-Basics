//() input
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
//function anotherFunction<T, U extends number> 
anotherFunction(3, "4");
//if we use U extends number then it will show error when we use string value
function Function2(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var sellable = /** @class */ (function () {
    function sellable() {
        this.cart = [];
    }
    sellable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return sellable;
}());
