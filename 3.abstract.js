"use strict";
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
// 用来描述或提取一定的行为，不能被实例化
// 抽象的方法不能具有实现，父类中抽象的方法必须在子类中具有实现
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = "loading";
        this.name = name;
    }
    Animal.prototype.getAnimalname = function () {
        return 'Animal Name';
    };
    Animal.prototype.speak = function () {
        console.log('hello', this.name);
    };
    return Animal;
}());
/* 子类只能继承一个父类但可以实现多个方法 */
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.getName = function () {
        console.log(_super.prototype.getAnimalname.call(this) + '|' + this.name);
    };
    Cat.prototype.fly = function () {
        console.log('flying');
    };
    Cat.prototype.eat = function () {
        console.log('eating');
    };
    return Cat;
}(Animal));
var c2 = new Cat('猫');
// c2.name = "Ketty"
c2.speak();
c2.fly();
c2.getName();
