var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* ts 中 this 类型的使用 */
var Counter = /** @class */ (function () {
    function Counter(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
        this.value = value;
    }
    Counter.prototype.add = function (value) {
        this.value += value;
        return this;
    };
    Counter.prototype.minus = function (value) {
        this.value -= value;
        return this;
    };
    return Counter;
}());
var PowCounter = /** @class */ (function (_super) {
    __extends(PowCounter, _super);
    function PowCounter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* constructor(value) {
        super(value)
    } */
    PowCounter.prototype.pow = function (value) {
        this.value = Math.pow(this.value, value);
        return this;
    };
    return PowCounter;
}(Counter));
var counter2 = new PowCounter(2);
console.log(counter2.pow(3).add(10).minus(5));
/*  */ 
