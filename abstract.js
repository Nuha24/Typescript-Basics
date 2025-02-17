var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class TakePhoto {
//constructor(
// public cameraMode: string,
// public filter: string
//) {}
//}
var TakePhoto = /** @class */ (function () {
    function TakePhoto(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    TakePhoto.prototype.getReelTime = function () {
        //some complex calculation
        return 8;
    };
    return TakePhoto;
}());
//const hc = new TakePhoto("test", "Test"); 
// abstract classes cannot create object of their own
//but they help you define the classes who are inhereting them
//in the correct way we have to extend the abstract class 
// --> extend is like having a inheritance here
var Instagram = /** @class */ (function (_super) {
    __extends(Instagram, _super);
    function Instagram(cameraMode, filter, burst) {
        var _this = _super.call(this, cameraMode, filter, burst) || this; //must use super
        _this.cameraMode = cameraMode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    Instagram.prototype.getSepia = function () {
        console.log("Sepia");
    };
    return Instagram;
}(TakePhoto));
var nh = new Instagram("testing", "testing", 7);
