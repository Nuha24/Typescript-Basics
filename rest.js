var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//function abcd(...args: number[]){
// ...rest/spread -- only 3 dots
// 1. rest if we want to collect multiple arguments into an array
// 2. spread if used to copy an array or object to expand 
//}
function func() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    console.log(arr); // [1,2,3,4,5,6,7,8,9,10]
}
func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//spread
var num = [1, 2, 3, 4, 5];
console.log.apply(console, num); // 1 2 3 4 5
var moreNumbers = __spreadArray(__spreadArray([], num, true), [6, 7, 8], false);
console.log(moreNumbers);
// [1, 2, 3, 4, 5, 6, 7, 8]
var person = { name: "Nuha", age: 434243  };
var copy = __assign({}, person);
console.log(copy);
// {name: "Nuha", age: 434243 }
