"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰方法无参数
var a;
(function (a) {
    function enhancer(target) {
        console.log(target); // [function:Person]
        console.log(target.prototype); // Person {eat:[function]}
        target.prototype.name = 'loading';
        target.prototype.myname = 'new myname';
        target.prototype.age = 12;
        target.prototype.eat = function () {
            console.log('eat');
        };
    }
    var Person = /** @class */ (function () {
        function Person(name) {
            this.age = 32;
            this.myname = "default name";
            this.myname = name;
        }
        Person.prototype.eat = function () {
            console.log('eat function initial');
        };
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person('people');
    console.log(p.name);
    console.log(p.myname);
    console.log(p.age);
    p.eat();
})(a || (a = {}));
// 装饰方法有参数
var b;
(function (b) {
    function enhancer(name) {
        return function enhancer(target) {
            target.prototype.name = name;
            target.prototype.eat = function () {
                console.log(this.name + ' eat');
            };
        };
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer('zhufeng')
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.name);
    p.eat();
})(b || (b = {}));
// 装饰类
var c;
(function (c) {
    function enhancer(target) {
        return /** @class */ (function () {
            function class_1() {
                this.name = 'jiagou';
            }
            class_1.prototype.eat = function () {
                console.log('吃饭饭');
            };
            return class_1;
        }());
    }
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person = __decorate([
            enhancer
        ], Person);
        return Person;
    }());
    var p = new Person();
    console.log(p.name);
    p.eat();
})(c || (c = {}));
