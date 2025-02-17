var NUser = /** @class */ (function () {
    function NUser(email, password, age) {
        this.courseCount = 1;
        this.email = email;
    }
    Object.defineProperty(NUser.prototype, "getAppleEmail", {
        //annotate with get keyword ---> getter
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NUser.prototype, "coureCCount", {
        get: function () {
            return this.courseCount;
        },
        //setter cant be void/or any other data type!! no return type!
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course Count Shall be more than 1");
            }
            this.courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return NUser;
}());
